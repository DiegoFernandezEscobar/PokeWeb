import React, { useEffect, useState } from "react"

const BuscadorPokemon = () => {

    const [id, setId] = useState(1)
    const [pokemon, setPokemon] = useState(null)
console.log(pokemon);
    // console.log(id)

    const handleSiguiente = () => {
        setId(id + 1)
    }

    const handleAnterior = () => {
        if (id > 1) {
            setId(id - 1)
        }
    }

    
    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
            .then((resp) => resp.json())
            .then((data) => {
                // console.log(data);
                setPokemon(data)
                
            })
        
    }, [id])


    return (
        <div className="container my-5">
            <h2>Mira todos los Pokemon</h2>
            <hr/>

            {
                pokemon 
                    ? 
                        <div>
                             
                            <h3>{pokemon.name}</h3>
                            <img src={pokemon.sprites.front_default} alt={pokemon.name}/>
                        </div>
                        
                    : null
            }
            
            <button 
                onClick={handleAnterior} 
                className="btn btn-outline-primary"
                disabled={id === 1}
            >
                Anterior
            </button>
            
            <button 
                onClick={handleSiguiente} 
                className="btn btn-primary mx-2"
            >
                Siguiente
            </button>


        </div>
    )
}

export default BuscadorPokemon