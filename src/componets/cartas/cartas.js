import "./cartas.css"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
// importo el useState que me permite crear un estado 
import {useState, useEffect} from "react"

//  Componente de Presentacion

function Cartas({name, description, img}) {
// declaro la variable contador y su fn que va a ser modificada, tambien establezco que dentro del useState el valor inicial es 0 
const [contador, setContador] = useState(0)

let handleSumar = ()=>{
// ingreso la modificacion del contador dentro del estado 
    setContador(contador + 1)
}

let handleRestar = ()=>{
    if (contador > 0) {
        setContador(contador - 1)
    }
}

// Al pasarle contador en el array esto se montara en OnMount y en cada cambio de la prop
useEffect(()=>{
  
  //Desmonto el componente
  return()=>{

  }
},[contador])

  return (
      <div className='cartaUnica'>
    <Card style={{ width: '13rem' }}>
      <Card.Img variant="top" src={img} />
        <Card.Title className='top3Titulo'>{name}</Card.Title>
      <Card.Body>
        <Card.Text>
          {description}
        </Card.Text>
        <p>Ahora puedes agregar la carta al carrito!</p>
        <div class="d-flex justify-content-around" >
        <Button className="btnHandleSuma" onClick={handleRestar} variant="danger"> - </Button>
        <span>{contador}</span>
        <Button className="btnHandleSuma" onClick={handleSumar} variant="success"> + </Button>
        </div>
      </Card.Body>
    </Card>
      </div>
  );
}

export default Cartas;