import "../../estilos/Pagina principal/estilos.css";
function PaginaPrincipal({handleClick}){
return(
    <div className="page">
        <button className="button" onClick={handleClick}>Entrar</button>
    </div>
)
}

export default PaginaPrincipal;