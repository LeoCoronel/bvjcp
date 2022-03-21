import React from 'react';
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import movil22 from '../../assets/img/moviles/movil22.jpg';
import './styles.css';

const Movil = ({ movil, tipo, modelo, unidad }) => {
    return (
        <Card className="cardMovil">
            <Card.Img variant="top" src={movil22} />
            <Card.Body>
                <Card.Title>{ movil }</Card.Title>
                <Card.Text>
                { tipo }
                </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
                <ListGroupItem>{ modelo }</ListGroupItem>
                <ListGroupItem>{ unidad }</ListGroupItem>
            </ListGroup>
        </Card>
    )
}

export default Movil;