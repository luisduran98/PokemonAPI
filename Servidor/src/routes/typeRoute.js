const {Router} = require("express");
const typeRouter = Router();
const getTypes = require("../controllers/getTypes");
const postType = require("../controllers/postType");
typeRouter.get("/",getTypes);
typeRouter.post("/",postType);

module.exports = typeRouter;