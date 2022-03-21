import React, { useState } from 'react';
import {Container, Card, Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './styles.css'

const Historia = () => {
    return(
        <Card className="historyCard">
            <Card.Header>Sobre Nosotros</Card.Header>
            <Card.Body>
                <Card.Title>Nuestra historia</Card.Title>
                <Card.Text>
                A partir del 24 de octubre del 2004 hemos sido reconocidos como cuerpo de Bomberos Voluntarios de José C. Paz, dejando de pertenecer al cuerpo de Bomberos Voluntarios de Gral. Sarmiento del que fuimos un destacamento desde el año 1967.
                </Card.Text>
                <Button variant="primary"><Link to={{pathname: '/historia'}}>SEGUIR LEYENDO</Link></Button>
            </Card.Body>
        </Card>
    )
}

export default Historia;