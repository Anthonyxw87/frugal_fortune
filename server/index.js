require("dotenv").config({ path: __dirname + "/.env" });
const express = require('express');
const fs = require('fs');
const pool = require(__dirname + "/config/db.config.js");
const bodyParser = require('body-parser'); // middleware for parsing request bodies
const cors = require('cors'); // middleware for enabling cross-origin resource sharing

const app = express();

// enable Cross-Origin Resource Sharing (CORS) middleware
app.use(cors());

// enable body-parser middleware for parsing request bodies as JSON objects
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const PORT = process.env.PORT || 8080;

// Function to execute SQL script
const executeSqlScript = () => {
    fs.readFile(__dirname + '/database/SQL_create_tables_script.sql', 'utf8', (err, data) => {
        if (err) {
            console.error("Error reading SQL script:", err);
            return;
        }
        // Execute the SQL script
        pool.query(data, (error, results) => {
            if (error) {
                console.error("Error executing SQL script:", error);
            } else {
                console.log("Table created successfully");
            }
        });
    });
};

// Execute the SQL script when the application starts
executeSqlScript();

// Function to sign in to an user account
const getProducts = (req, res) => {
    pool.query('SELECT * FROM products', (error, products) => {
        if (error) {
            throw error
        }
        res.status(200).json(products.rows)
    })
}

// Function to sign up a user account
const signUp = (req, res) => {
    // extract user data from request body
    const { firstName, lastName, email, password } = req.body;

    // insert user data into database using connection pool
    pool.query('INSERT INTO Users (firstName, lastName, email, password) VALUES ($1, $2, $3, $4)',
        [firstName, lastName, email, password],
        (error, results) => {
            if (error) {
                console.error('Error signing up user:', error);
                return res.status(500).json({ error: 'Failed to sign up user' });
            }

            // If insertion was successful, send a success response
            return res.status(201).json({ message: 'User signed up successfully' });
        });
}

// Function to sign in to a user account
const signIn = (req, res) => {
    // extract user data from request body
    const { email, password } = req.body


}

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.get('/products', getProducts);

app.post('/sign-up', signUp);

// Route to test database connection
app.get("/testdb", (req, res) => {
    pool.query('SELECT 1', (error, results) => {
        if (error) {
            res.status(500).send("Error connecting to the database");
        } else {
            res.status(200).send("Database connection successful");
        }
    });
});

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});