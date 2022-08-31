import React, { useEffect, useState } from "react"


const ItemList = ( ) => {
    const [id, setId] = useState(1)
    const [pokemon, setPokemon] = useState(null)

        useEffect(() => {
            fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
                .then((resp) => resp.json())
                .then((data) => {
                    // console.log(data);
                    setPokemon(data)
                    
                })
            
        }, [id])
        const numbers = [1, 2, 3, 4, 5];
        const doubled = numbers.map((number) => number * 2);
        console.log(doubled);
  
    return (
        <div className="container my-5">
            <h2>Total de cartas disponibles.</h2>
            <hr/>
                {
                   <h2>
                       {doubled}
                   </h2> 
                }
            {/* { pokemon.map((item) => <h3 key={item.id}>{console.log(item)} </h3>)} */}
        </div>
    )
}

export default ItemList