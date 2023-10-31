import { useState } from 'react';

function BuscadorPrincipal({onSearch}){

    const [nombre, setnombre] = useState("");

    function handleChange(event) {
       setnombre(event.target.value)
    }
 
    return (
       <div>
          <input type='search' placeholder="nombre" value={nombre} onChange={handleChange}/>
          <button onClick={() => {onSearch(nombre)}}>Agregar</button>
       </div>
    );
}

export default BuscadorPrincipal;
