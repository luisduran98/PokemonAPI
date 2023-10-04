const express = require('express');
const server = express();
const PORT = 3001;
const {sequelize} =  require("./db/db")

async function main(){
    try{
    await sequelize.authenticate();
    console.log("base de datos conectada");
    server.listen(PORT, () => {console.log('estoy en el puerto:' + PORT)});
    }catch(error){
        throw new Error("no se conecto a la base de datos")
    }
}

main();

