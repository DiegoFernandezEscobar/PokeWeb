import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function AutoLayoutExample(props) {
  return (
    <Container className="top3">
      <Row>
        <Col> {props.src}{props.name} </Col>
      </Row>
    </Container>
  );
}

export default AutoLayoutExample;