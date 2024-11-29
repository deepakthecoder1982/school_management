const express = require('express');
const router = express.Router();
const {addSchool,listSchool} = require("../controllers/schoolController")

//routes for school
router.post("/addSchool",addSchool); 
router.get("/listSchools",listSchool);
router.get("/",(req,res)=>{
    res.send("Welcome to the school management app!!")
});
 
module.exports = router;

