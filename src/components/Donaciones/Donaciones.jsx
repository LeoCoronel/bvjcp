import React from 'react';
import { Container } from 'react-bootstrap';
import './styles.css';

const Donaciones = () => {
    return(
        <Container>
            <h1>Donaciones</h1>
            <div className="description">
                <p>Puede colaborar con nosotros pagando a través de los siguientes botones de pago.</p>
                <div className="btns">
                    <button>$300</button>
                    <button>$500</button>
                    <button>$1000</button>
                    <button>$2000</button>
                    <button>$5000</button>
                </div>
                <p>Puede pagar también con QR de Mercado Pago y definir el monto que desea abonar.</p>
            </div>
        </Container>
    )
}

export default Donaciones;