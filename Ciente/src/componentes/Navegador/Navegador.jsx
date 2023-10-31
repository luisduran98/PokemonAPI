import BuscadorPrincipal from "./BuscadorPrincipal";
import { NavLink } from "react-router-dom";

function Navegador({onSearch}) {
    return (
    <nav>
        <BuscadorPrincipal onSearch={onSearch}/>

        <NavLink to='/SobreMi'>
          <button>Sobre Mi</button>
        </NavLink>  
    </nav>)}

    export default Navegador