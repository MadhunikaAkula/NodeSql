const { Client } = require('pg');

const clientdb = new Client({
    user: 'postgres',
    host: 'localhost',
    database: 'Demo',
    password: 'root',
    port: 5432,
});

module.exports = {clientdb}