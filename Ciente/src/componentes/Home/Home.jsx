import Tarjetas from "../Tarjetas/Tarjetas";

function Home({pokemons,pokemonsAll,pokemonApi}){
return(
    <div>
        <div>
            <button onClick={() => pokemonsAll()}>Pokemons</button>
            <button onClick={() => pokemonApi()} >Api Pokemons</button>
            <button>Creados</button>
        </div>
        
    <Tarjetas pokemons={pokemons}/>

    </div>
)
}
export default Home;