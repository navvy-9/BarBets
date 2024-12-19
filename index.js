const { Pool } = require('pg');

const pool = new Pool({
    user: 'postgres', // Your PostgreSQL username
    host: '34.130.175.152', // Replace with your database's IP
    database: 'barbets',    // Name of the database
    password: '<YOUR-PASSWORD>', // Use the password you set when creating the database
    port: 5432, // Default PostgreSQL port
});

// Example endpoint to fetch users
const express = require('express');
const app = express();
const port = 3000;

app.get('/users', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM users');
        res.json(result.rows);
    } catch (err) {
        console.error(err);
        res.status(500).send('Error fetching users');
    }
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
