import myImagen from "./2023.jpg";

function SobreMi(){
    return(
        <div>
        <h1>Proyecto de Pokemon Api</h1>
        <p>Creador : Luis Duran</p>
        <p>Descripcion: Soy de Venezuela y vivo en Argentina, Tengo gran motivacion a desarrollar pequeños y grandes proyectos, siempre dispuesto a mejorar </p>
        <img src={myImagen} alt="debo verme yo" width="300px"/>
        </div>
    )
}

export default SobreMi