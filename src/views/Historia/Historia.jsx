import React from 'react';
import './styles.css';
import { texts } from './data';
import movil1 from '../../assets/img/moviles/movil1.jpg';
import { Container } from 'react-bootstrap';
import Galeria from '../../components/Galeria/Galeria';

const Historia = () => {
    return (
        <>
            <section className="historia">
                <div className="historia__text">
                    { texts.map((para, index) => {
                        return(
                            <p key={`paragraph-${index}`}>{para}</p>
                        )
                    })};
                </div>
                <div className="historia__image">
                    <img src={ movil1 } alt="movil1" />
                </div>
            </section>
            <div className="galeria__container">
                <Galeria />
            </div>
        </>
    )
}

export default Historia;