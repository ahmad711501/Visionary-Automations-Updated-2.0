/*
  # Create contact requests table

  1. New Tables
    - `contact_requests`
      - `id` (uuid, primary key)
      - `full_name` (text, not null)
      - `email` (text, not null)
      - `company_name` (text, not null)
      - `service` (text, not null)
      - `problems` (text, not null)
      - `additional_info` (text)
      - `created_at` (timestamptz, default now())
      - `status` (text, default 'new')
  2. Security
    - Enable RLS on `contact_requests` table
    - Add policy for authenticated users to insert data
    - Add policy for authenticated users to read their own data
*/

CREATE TABLE IF NOT EXISTS contact_requests (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  full_name text NOT NULL,
  email text NOT NULL,
  company_name text NOT NULL,
  service text NOT NULL,
  problems text NOT NULL,
  additional_info text,
  created_at timestamptz DEFAULT now(),
  status text DEFAULT 'new'
);

ALTER TABLE contact_requests ENABLE ROW LEVEL SECURITY;

-- Allow anyone to insert data (for public form submissions)
CREATE POLICY "Anyone can insert contact requests"
  ON contact_requests
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Only authenticated users can view contact requests
CREATE POLICY "Authenticated users can view contact requests"
  ON contact_requests
  FOR SELECT
  TO authenticated
  USING (true);