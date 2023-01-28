-- Delete database if it exists
DROP DATABASE IF EXISTS example_db;

-- Create database again
CREATE DATABASE example_db;

-- Connect to newly created database
\c example_db;

-- Create a users table
CREATE TABLE users
(
  id serial NOT NULL,
  first_name text,
  last_name text
);

-- Create an examplpe user
INSERT INTO users (first_name, last_name) VALUES ('Mr.', 'Man');