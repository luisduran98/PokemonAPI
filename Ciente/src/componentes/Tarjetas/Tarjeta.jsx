function Tarjeta({
  id,
  nombre,
  vida,
  ataque,
  defensa,
  imagen,
  tipo,
}) {
  
  return (
    <div>
      <h1>{id}</h1>
      <h2>{nombre}</h2>
      <h2>{vida}</h2>
      <h2>{ataque}</h2>
      <h2>{defensa}</h2>
      {tipo.map((element)=> <h2> {element} </h2>)}
      <img src={imagen} alt="error" />
    </div>
  );
}

export default Tarjeta;