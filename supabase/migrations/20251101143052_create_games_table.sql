/*
  # Create games table

  1. New Tables
    - `games`
      - `id` (uuid, primary key)
      - `title` (text, game title)
      - `description` (text, game description)
      - `image_url` (text, game thumbnail image)
      - `game_url` (text, link to play the game)
      - `category` (text, game category/genre)
      - `created_at` (timestamp)
  
  2. Security
    - Enable RLS on `games` table
    - Add policy for public read access (games are publicly viewable)
    - Add policy for authenticated users to manage games
*/

CREATE TABLE IF NOT EXISTS games (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  description text NOT NULL,
  image_url text NOT NULL,
  game_url text NOT NULL,
  category text DEFAULT 'General',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE games ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view games"
  ON games FOR SELECT
  TO anon, authenticated
  USING (true);

CREATE POLICY "Authenticated users can insert games"
  ON games FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can update games"
  ON games FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Authenticated users can delete games"
  ON games FOR DELETE
  TO authenticated
  USING (true);