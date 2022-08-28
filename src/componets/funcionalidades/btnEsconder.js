import { useState } from "react"

import ContenedorCartas from "../cartas/contenedorCartas"



const BtnEsconder = () => {

const [esconder, setEsconder] = useState()

const handleEsconder = () =>{
    setEsconder(!esconder)
}

return(
<div>
    <button className="btn btn-warning" onClick={handleEsconder}>Mostrar más cartas.</button>
    {
        esconder ? <ContenedorCartas/> : null
    }
</div>
)

}

export default BtnEsconder