require("dotenv").config({ path: __dirname + "/.env" });
const express = require('express');
const fs = require('fs');
const pool = require(__dirname + "/config/db.config.js");

const app = express();

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

// Function
const getProducts = (req, res) => {
    pool.query('SELECT * FROM products', (error, products) => {
        if (error) {
            throw error
        }
        res.status(200).json(products.rows)
    })
}

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.get('/products', getProducts)

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