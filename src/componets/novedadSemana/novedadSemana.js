import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./novedadSemana.css"


function NovedadSemana({name, img, description}) {
  return (
    <div className="contenedorPadre">
    <Container className="top3">
      <Row>
        <Col > {name}<hr/> <img src={img} alt={name}/> <p>{description}</p></Col>
        {/* <Col> {name}<hr/> <img src={img}/> <p>{description}</p></Col>
        <Col> {name}<hr/> <img src={img}/> <p>{description}</p></Col> */}
      </Row>
     
    </Container>
    </div>
  );
}

export default NovedadSemana;
