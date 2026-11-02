-- Course feedback storage. Run once against the *direct* (unpooled) Neon connection:
--   psql "$DATABASE_URL_UNPOOLED" -f migrations/002_feedback.sql

-- One row per (round, respondent). respondent_token is a random UUID the
-- student's browser makes for this round only, so a second submission
-- replaces the first rather than counting twice. A fresh token per round
-- means the mid-course and final responses cannot be linked to each other.
--
-- No IP address, user agent or account is stored: nothing here identifies a
-- person. Only the answers to the fixed question set (lib/feedback/questions.ts),
-- validated server-side before they reach this table.
CREATE TABLE IF NOT EXISTS feedback_response (
  round_id         TEXT        NOT NULL,
  respondent_token TEXT        NOT NULL,
  answers          JSONB       NOT NULL,
  created_at       TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at       TIMESTAMPTZ NOT NULL DEFAULT now(),
  PRIMARY KEY (round_id, respondent_token)
);
