const {Router} = require("express");
const homeRouter = Router();
const Home = require("../controllers/Home");

homeRouter.get("/",Home);

module.exports = homeRouter;