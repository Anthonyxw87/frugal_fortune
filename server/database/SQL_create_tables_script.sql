-- Create Users Table if it does not exists
CREATE TABLE IF NOT EXISTS Users (
    id SERIAL PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    firstName VARCHAR(100),
    lastName VARCHAR(100),
    password VARCHAR(255) NOT NULL
);

