import React from 'react';
import { Card, Container, ListGroup, ListGroupItem} from 'react-bootstrap';
import { GoLocation } from 'react-icons/go'
import './styles.css';

const Cuartel = () => {
    return (
        <Container className="cardContainer">
        <Card style={{ width: '18rem' }} className="cardCuartel">
            <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3287.521432446663!2d-58.74213074872215!3d-34.51501498038666!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bc9806d33760b7%3A0x46aed4dd6ff08e1f!2sBomberos%20Voluntarios%20de%20Jos%C3%A9%20C.%20Paz!5e0!3m2!1ses!2sar!4v1646501532590!5m2!1ses!2sar" 
                style={{ border:0 }} 
                allowFullScreen="" 
                loading="lazy"
                className="cardMap">
            </iframe>
            <Card.Body>
            <Card.Title>Cuartel Central</Card.Title>
            <ListGroup className="list-group-flush">
                <ListGroupItem>Pasaje San Agustín 703</ListGroupItem>
                <ListGroupItem className="phone">02320-422222</ListGroupItem>
            </ListGroup>
            </Card.Body>
        </Card>
        </Container>
    )
}

export default Cuartel;