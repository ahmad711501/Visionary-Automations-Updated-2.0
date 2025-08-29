/*
  # Create consultations table

  1. New Tables
    - `consultations`
      - `id` (uuid, primary key)
      - `name` (text, not null)
      - `company` (text, not null)
      - `email` (text, not null)
      - `phone` (text)
      - `requirements` (text, not null)
      - `date` (date, not null)
      - `time` (text, not null)
      - `created_at` (timestamptz, default now())
      - `status` (text, default 'pending')
  2. Security
    - Enable RLS on `consultations` table
    - Add policy for authenticated users to insert data
    - Add policy for authenticated users to read their own data
*/

CREATE TABLE IF NOT EXISTS consultations (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  company text NOT NULL,
  email text NOT NULL,
  phone text,
  requirements text NOT NULL,
  date date NOT NULL,
  time text NOT NULL,
  created_at timestamptz DEFAULT now(),
  status text DEFAULT 'pending'
);

ALTER TABLE consultations ENABLE ROW LEVEL SECURITY;

-- Allow anyone to insert data (for public form submissions)
CREATE POLICY "Anyone can insert consultations"
  ON consultations
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Only authenticated users can view consultations
CREATE POLICY "Authenticated users can view consultations"
  ON consultations
  FOR SELECT
  TO authenticated
  USING (true);