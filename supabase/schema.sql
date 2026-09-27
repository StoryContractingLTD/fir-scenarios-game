-- =====================================================================
-- The Scenarios Game: Supabase tables
-- Paste into the Supabase SQL Editor and press Run. Safe to run again.
-- Adds sg_ tables only. The Generation Game (gg_) and Decision Game tables are not touched.
-- =====================================================================

-- 1. The live game state: one row the director updates and phones read.
create table if not exists public.sg_state (
  id          int primary key default 1 check (id = 1),
  session_id  text not null,
  step        int  not null default 0,
  phase       text not null default 'join',
  q_index     int  not null default 0,
  updated_at  timestamptz not null default now()
);
insert into public.sg_state (id, session_id) values (1, 'first-session')
on conflict (id) do nothing;

-- 2. Pairs (teams). Filed under a session, so each cohort starts clean.
create table if not exists public.sg_teams (
  id          uuid primary key default gen_random_uuid(),
  session_id  text not null,
  name        text not null check (char_length(name) between 1 and 40),
  joined_at   timestamptz not null default now(),
  unique (session_id, name)
);

-- 3. Votes. One per pair per question, enforced by the database.
create table if not exists public.sg_votes (
  id          bigint generated always as identity primary key,
  session_id  text not null,
  team_id     uuid not null references public.sg_teams(id) on delete cascade,
  q           int  not null,
  choice      text not null check (choice in ('A','B','C','D')),
  created_at  timestamptz not null default now(),
  unique (team_id, q)
);
create index if not exists sg_teams_session on public.sg_teams (session_id);
create index if not exists sg_votes_session on public.sg_votes (session_id);

-- 4. Access for the public key used by the pages.
grant select, insert, update, delete on public.sg_state, public.sg_teams, public.sg_votes to anon, authenticated;

alter table public.sg_state enable row level security;
alter table public.sg_teams enable row level security;
alter table public.sg_votes enable row level security;

drop policy if exists sg_state_read   on public.sg_state;
drop policy if exists sg_state_write  on public.sg_state;
drop policy if exists sg_teams_read   on public.sg_teams;
drop policy if exists sg_teams_join   on public.sg_teams;
drop policy if exists sg_teams_clear  on public.sg_teams;
drop policy if exists sg_votes_read   on public.sg_votes;
drop policy if exists sg_votes_cast   on public.sg_votes;
drop policy if exists sg_votes_clear  on public.sg_votes;

-- Anyone can read the state; the director page updates it.
create policy sg_state_read  on public.sg_state for select to anon, authenticated using (true);
create policy sg_state_write on public.sg_state for update to anon, authenticated using (true) with check (id = 1);

-- Pairs can only join the live session.
create policy sg_teams_read on public.sg_teams for select to anon, authenticated using (true);
create policy sg_teams_join on public.sg_teams for insert to anon, authenticated
  with check (session_id = (select s.session_id from public.sg_state s where s.id = 1));

-- A vote is only accepted while voting is open, for the question on screen,
-- in the live session, from a pair in that session. Late votes are rejected.
create policy sg_votes_read on public.sg_votes for select to anon, authenticated using (true);
create policy sg_votes_cast on public.sg_votes for insert to anon, authenticated
  with check (
    exists (select 1 from public.sg_state s
            where s.id = 1 and s.phase = 'voting'
              and s.q_index = sg_votes.q
              and s.session_id = sg_votes.session_id)
    and exists (select 1 from public.sg_teams t
                where t.id = sg_votes.team_id
                  and t.session_id = sg_votes.session_id)
  );

-- "Clear old sessions" can only delete past sessions, never the live one.
create policy sg_teams_clear on public.sg_teams for delete to anon, authenticated
  using (session_id <> (select s.session_id from public.sg_state s where s.id = 1));
create policy sg_votes_clear on public.sg_votes for delete to anon, authenticated
  using (session_id <> (select s.session_id from public.sg_state s where s.id = 1));

