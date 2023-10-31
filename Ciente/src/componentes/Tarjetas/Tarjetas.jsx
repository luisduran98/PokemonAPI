import Tarjeta from "./Tarjeta"

function Tarjetas({pokemons}) {
   return( 
   <div>
      {pokemons.map((e)=> { 
      return <Tarjeta 
      key = {e.id}
      id = {e.id}
      nombre = {e.nombre}
      imagen = {e.imagen}
      vida = {e.vida}
      ataque = {e.ataque}
      defensa = {e.defensa}
      tipo = {e.tipo}
      />}
      )}
   </div>)
   
}

export default Tarjetas