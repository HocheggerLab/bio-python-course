-- Poll storage. Run once against the *direct* (unpooled) Neon connection:
--   psql "$DATABASE_URL_UNPOOLED" -f migrations/001_poll.sql

-- One row per (question, voter). The primary key is doing real work: it makes
-- a double tap idempotent and lets ON CONFLICT turn a second submission into a
-- changed answer rather than a second ballot.
--
-- voter_token is a random UUID from the student's localStorage. It is a ballot
-- number, not an identity — nothing here identifies a person.
CREATE TABLE IF NOT EXISTS poll_ballot (
  question_id  TEXT        NOT NULL,
  voter_token  TEXT        NOT NULL,
  option_index SMALLINT    NOT NULL,
  created_at   TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at   TIMESTAMPTZ NOT NULL DEFAULT now(),
  PRIMARY KEY (question_id, voter_token)
);

-- Counting is always "all ballots for one question".
CREATE INDEX IF NOT EXISTS poll_ballot_question_idx ON poll_ballot (question_id);

-- Which question is accepting votes. Only ever one row with is_open = true;
-- the partial unique index below is what guarantees that rather than trusting
-- the application to have closed the previous one.
CREATE TABLE IF NOT EXISTS poll_state (
  question_id TEXT PRIMARY KEY,
  is_open     BOOLEAN     NOT NULL DEFAULT false,
  opened_at   TIMESTAMPTZ
);

CREATE UNIQUE INDEX IF NOT EXISTS poll_state_single_open_idx
  ON poll_state ((is_open)) WHERE is_open;
