const { type } = require("../db/db");

const getTypes = async(req,res)=>{
    try {
        const types = await type.findAll();
        res.status(200).json(types)
    } catch (error) {
        res.status(500).json("un problema");
    }
    

}

module.exports = getTypes;