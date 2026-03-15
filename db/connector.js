require('dotenv').config();
const pg = require('pg');
const { Pool } = pg;

const pool = new Pool({
    connectionString: process.env.DB_URL,
});

//Add table creation

module.exports = pool;