const db = require("../config/database");

//Add school service method

const schoolService = async ({ name, address, latitude, longitude }) => {
    // console.log(name, address, latitude, longitude);
    
    try {
        // Use ? placeholders for parameters
        const query = `
            INSERT INTO schools (name, address, latitude, longitude) 
            VALUES (?, ?, ?, ?)
        `;
        // Execute the query
        const [results] = await db.query(query, [name, address, latitude, longitude]);
        
        // console.log("results", results);
        return results;
    } catch (error) {
        console.error("Error inserting school:", error);
        throw error; // Rethrow to propagate the error
    }
};

const fetchingSchoolService = async ({ latitude, longitude }) => {

    try {
        const [schools] = await db.query('SELECT * FROM schools');
        // console.log("schools in here:", schools);
        if (!latitude || !longitude) {
            return schools;
        }
        return schools.map((school) => {
            return {
                ...school,
                distance: calculateDistance(latitude, longitude, school.latitude, school.longitude),
            };
        }).sort((a, b) => a.distance - b.distance);  // Correct sorting
    } catch (error) {
        console.error("Error fetching schools:", error);
        throw error; // Propagate the error to the controller
    }
};


// function for calculating distance

const calculateDistance = (lat1,lon1,lat2,lon2)=>{
    const toRad = (value)=>{
        return (value*Math.PI)/180;
    }
    const R = 6371; // Earths radius in km;

    const dLat = toRad(lat2-lat1);
    const dLon = toRad(lon2-lon1);

    const a  = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) *
    Math.sin(dLon / 2) * Math.sin(dLon / 2);

    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c; // Distance in km
}

module.exports = {schoolService,fetchingSchoolService}