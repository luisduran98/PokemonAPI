const {server, PORT} = require("./server")
const {dbPokemon} =  require("./db/db")

async function main(){
    try{
    await dbPokemon.sync();
    console.log("base de datos conectada");
    server.listen(PORT, () => {console.log('estoy en el puerto:' + PORT)});
    }catch(error){
        throw new Error("no se conecto a la base de datos")
    }
}

main();
// {force:true }
// dbPokemon.sync({force:true }).then(()=>{
//     server.listen(PORT, () => {console.log('estoy en el puerto:' + PORT)})
// }).catch((error)=>{throw new Error("no se conecto a la base de datos")})