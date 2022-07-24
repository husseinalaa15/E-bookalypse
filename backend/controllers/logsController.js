const mongoose = require("mongoose");
const fs = require("fs");
const path = require("path");


module.exports.getAllLogs = (req,res,next) => {

    try{
        res.status(200).json(fs.readFileSync(path.join(__dirname,`../logs/access${req.params.date}.log`)).toString());
    }
    catch (err){
        next(err)
    }
    
};