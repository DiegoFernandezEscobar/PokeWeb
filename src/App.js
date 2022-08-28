import './App.css';
import PokeNav from './componets/navBar'
import ContenedorCartas from './componets/cartas/contenedorCartas';
import Datos from './componets/novedadSemana/datosNovedades';
import BtnEsconder from './componets/funcionalidades/btnEsconder';



function App() {
  return (
    <div className="App">
      {/* // Nav Bar  */}
       <PokeNav/>
       {/* // titulo pagina */}
    <h3 className='top3Titulo'> Enterate del top 3 de esta semana! </h3> 
     {/* // trae dinamicamente un top 3 pokemons */}
     <Datos/>
      
    {/* Grilla de productos con botonera para seleccionar cuantos */}
    <h3 className='top3Titulo'>Mira la coleccion de cartas que tenemos disponible para vos! </h3> 
    <div class="d-flex justify-content-around">
<ContenedorCartas/>
    </div>
   <div className='top3Titulo'>
    <BtnEsconder/>
   </div>


    {/* seleccionalos por clase */}

    </div>
  );
}

export default App;
