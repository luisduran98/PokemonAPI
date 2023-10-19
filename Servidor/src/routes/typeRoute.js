const {Router} = require("express");
const typeRouter = Router();
const getTypes = require("../controllers/getTypes");

typeRouter.get("/",getTypes);

module.exports = typeRouter;