import React from 'react';
import Movil from '../../components/Movil/Movil';
import { moviles } from './data';
import { Container } from 'react-bootstrap';
import './styles.css';

const Moviles = () => {
    return (
        <Container className="moviles">
            <h1>Moviles</h1>
            <div className="cards">
                {moviles.map((movil) => {
                    return <Movil movil={movil.movil} tipo={movil.tipo} modelo={movil.modelo} unidad={movil.unidad} />
                })}
            </div>
        </Container>
    )
}

export default Moviles;