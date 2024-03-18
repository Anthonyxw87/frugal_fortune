require("dotenv").config(); // Load environment variables from .env file
const { Pool } = require("pg");

// Retrieve environment variables
const database = process.env.POSTGRES_DB;
const user = process.env.POSTGRES_USER;
const password = process.env.POSTGRES_PASSWORD;
const host = process.env.POSTGRES_HOST;
const port = process.env.POSTGRES_PORT || 5432; // Default PostgreSQL port is 5432

// Construct connection string
const connectionString = `postgresql://${user}:${password}@${host}:${port}/${database}`;

// Create a new pool instance using the connection string
const pool = new Pool({
  connectionString: connectionString,
});

module.exports = {
  // Method to execute SQL queries on the database
  query: (text, params) => pool.query(text, params),
  // Method to gracefully terminate all client connections in the pool
  end: () => pool.end(),
};
