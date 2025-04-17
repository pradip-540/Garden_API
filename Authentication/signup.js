const express = require('express');
const pool = require('../Database_Connection/db');
const router = express.Router();

router.post('/Authentication/register', async (req, res) => {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
        return res.status(400).json({ message: 'All fields are required.' });
    }

    try {
        const [rows] = await pool.query('SELECT id FROM customers WHERE email = ?', [email]);

        if (rows.length > 0) {
            return res.status(400).json({ message: 'Email already exists.' });
        }


        await pool.query(
            'INSERT INTO customers (name, email, password_hash) VALUES (?, ?, ?)',
            [name, email, password]
        );

        res.status(201).json({ message: 'Customer registered successfully.' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error' });
    }
});

module.exports = router;
