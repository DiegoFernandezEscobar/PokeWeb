import Cartas from "./cartas"
import charmander from "./imgPokemon/charmander.png"
import charmeleon from "./imgPokemon/charmeleon.png"
import charizard from "./imgPokemon/charizard.png"

const ContenedorCartas = ()=>{

// video 1h .02 min
    return(
<div className="d-flex justify-content-around" >
<Cartas img={charmander} name="Charmander" description="Prefiere las cosas calientes. Dicen que cuando llueve le sale vapor de la punta de la cola." />
<Cartas img={charmeleon} name="Charmeleon" description="Este Pokémon de naturaleza agresiva ataca en combate con su cola llameante y hace trizas al rival con sus afiladas garras." />
<Cartas img={charizard} name="Charizard" description="Escupe un fuego tan caliente que funde las rocas. Causa incendios forestales sin querer." />

</div>

    )
}


export default ContenedorCartas