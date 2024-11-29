const db = require('../config/database');

// Add a new school
exports.addSchool = async ({ name, address, latitude, longitude }) => {
    const [result] = await db.query(
        'INSERT INTO schools (name, address, latitude, longitude) VALUES (?, ?, ?, ?)',
        [name, address, latitude, longitude]
    );
    return result;
};

// Fetch all schools
exports.getSchools = async () => {
    const [schools] = await db.query('SELECT * FROM schools');
    return schools;
};
