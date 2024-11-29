const express = require("express");
const cors  = require("cors");
const bodyParser = require("body-parser");
const schoolRoutes = require("./routes/schoolRoutes.routes");
const createSchoolsTable = require("./config/db");
const app = express();

//using middlewares
app.use(cors())
app.use(bodyParser.json());

//Routes
// Ensure the table exists before starting the server
createSchoolsTable().then(() => {
    console.log('Database initialized');
    // Routes
    app.use("/api/schools", schoolRoutes);

    const Port = process.env.PORT || 8000;
    app.listen(Port, () => {
        console.log(`Server is listening on port ${Port}`);
    });
}).catch((error) => {
    console.error('Failed to initialize the database:', error.message);
});