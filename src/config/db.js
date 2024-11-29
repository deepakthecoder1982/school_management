const pool = require('./database');

const createSchoolsTable = async () => {
    const createTableQuery = `
        CREATE TABLE IF NOT EXISTS schools (
            id INT AUTO_INCREMENT PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            address VARCHAR(255) NOT NULL,
            latitude FLOAT NOT NULL,
            longitude FLOAT NOT NULL,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        );
    `;

    try {
        const connection = await pool.getConnection();
        await connection.query(createTableQuery);
        console.log('Schools table ensured in the database.');
        connection.release();
    } catch (error) {
        console.error('Error creating schools table:', error.message);
        process.exit(1); // Exit with failure
    }
};

module.exports = createSchoolsTable;
