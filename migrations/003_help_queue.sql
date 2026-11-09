-- Lab help queue. The app creates this table itself on first use
-- (lib/help/store.ts), so running this by hand is optional:
--   psql "$DATABASE_URL_UNPOOLED" -f migrations/003_help_queue.sql

-- One row per student currently waiting or being helped. token is a random
-- UUID from the student's browser so they can see their place and leave the
-- queue; "done" and "clear" delete rows, so nothing outlives the lab.
-- Only the name the student types and their optional question are stored.
CREATE TABLE IF NOT EXISTS help_request (
  id         BIGSERIAL   PRIMARY KEY,
  token      TEXT        NOT NULL UNIQUE,
  name       TEXT        NOT NULL,
  question   TEXT        NOT NULL DEFAULT '',
  status     TEXT        NOT NULL DEFAULT 'waiting'
                         CHECK (status IN ('waiting', 'helping')),
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
