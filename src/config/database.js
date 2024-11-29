const mysql2 = require('mysql2');
require('dotenv').config();

const connections = mysql2.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
    ssl: {
        rejectUnauthorized: true, // Ensure the client checks the server certificate
    }
})

module.exports = connections.promise();