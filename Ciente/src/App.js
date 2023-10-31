import {useState, useEffect} from 'react';
import { Route, Routes, useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';
import PaginaPrincipal from './componentes/Bienvenida/PaginaPrincipal';
import Navegador from './componentes/Navegador/Navegador';
import Home from './componentes/Home/Home';
import SobreMi from './componentes/Sobre mi/SobreMi';
function App() {

  //  ESTADOS GLOBALES 
  const [pokemons, setPokemons] = useState([]);
  const [acceso, setAcceso] = useState(false);

  // LOCATION Y NAVIGATE
  const location = useLocation();
  const navigate = useNavigate();
  const homePag = location.pathname === '/';

  // FUNCIONES 
  function handleClick(){
    setAcceso(true);
  }

  const onSearch = (nombre) => {
    return axios(`http://localhost:3001/pokemons/name?nombre=${nombre}`)
      .then((response) => {
        if (response.data) {
          return setPokemons([response.data]);
        } else {
          return 'No hay personajes con este ID';
        }
      })
      .catch((error) => {
        window.alert('¡No hay personajes con este ID!');
      });
  };
  

  const pokemonsAll = () => {
    return axios(`http://localhost:3001/pokemons`, {
      timeout: 10000
    })
      .then((response) => {
        if (response.data) {
          return setPokemons([...response.data]);
        } else {
          return 'No hay personajes con este ID';
        }
      })
      .catch((error) => {
        window.alert('¡No hay personajes con este ID!');
      });
  };
  

  const pokemonApi = () => {
    if (pokemons.length > 1) {
      const newPokemons = pokemons.slice(0, 80);
      return setPokemons([...newPokemons])}
    
      return axios('http://localhost:3001/pokemons', {
      timeout: 10000
    }).then((response) => {
        
        const newPokemons = response.data.slice(0, 80);
        setPokemons([...newPokemons]);

        }).catch((error) => {
        console.error('Error al obtener datos de Pokémon:', error);
      });
    
  };
  

  useEffect(() => {
    if (acceso) {
      navigate('/home');
    }

    return () => {
      setAcceso(false);
    };
  }, [acceso, navigate]);

  return (
    <div >
      {!homePag && < Navegador onSearch={onSearch}/>}
      <Routes>
        <Route path='/' element= {< PaginaPrincipal handleClick={handleClick}/>}/>

        <Route path='/home' element= {<Home pokemons={pokemons} pokemonsAll={pokemonsAll} pokemonApi={pokemonApi}/>}/>
        <Route path='/SobreMi' element={<SobreMi/>}/>
      </Routes>
    </div>
  );
}

export default App;
