const joi = require('joi');
const { getSchools } = require('../model/school.model');
const {schoolService,fetchingSchoolService} = require("../services/schoolService")
//Add school controller

const addSchool = async(req,res)=>{
    // console.log("Received request body:", req.body); // Log the request body to check its content

    const schema = joi.object({
        name: joi.string().required(),
        address: joi.string().required(),
        latitude: joi.number().required(),
        longitude: joi.number().required(),
    });

    try {
        await schema.validateAsync(req.body);
        const result = await schoolService(req.body);
        // console.log("results here ",result)
        return res.status(200).json({message:"School added successfully!",schoolId:result.insertId});
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
}
// for fetching the schoolList

const listSchool = async(req, res) => {
    const { latitude, longitude } = req.query;
    // console.log("params",req?.query)
    // if (!latitude || !longitude) {
    //     return res.status(400).json({ error: "Latitude and longitude are required" });
    // }

    try {
        const schools = await fetchingSchoolService({ latitude: parseFloat(latitude), longitude: parseFloat(longitude) });
        // console.log("schools",schools)
        return res.json(schools); // Always return after sending a response
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};


module.exports = {addSchool,listSchool}