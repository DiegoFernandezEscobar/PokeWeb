import './App.css';
import RenderLogo from './componets/CartWidgets';
import PokeNav from './componets/navBar'
import AutoLayoutExample from "./componets/CartWidgets"

function App() {
  return (
    <div className="App">
      {/* // Nav Bar  */}
       <PokeNav/>
       {/* // titulo pagina */}
    <h3 className='top3Titulo'> Enterate del top 3 de esta semana! </h3> 
     {/* // trae dinamicamente un top 3 pokemons */}
     <AutoLayoutExample name="Charizard"/>
     <AutoLayoutExample name="Pikachu"/>
     <AutoLayoutExample name="Squirtle"/>
    {/* seleccionalos por clase */}

    </div>
  );
}

export default App;
