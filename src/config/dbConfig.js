/**
 * Database configuration
 * @author - Faizal 
 * @date - 25th August 2024
 */
// GENERIC IMPORT
const mysql = require('mysql2');

// CONNECTION POOL
const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT,
});

const db = pool.promise();

module.exports = db;
