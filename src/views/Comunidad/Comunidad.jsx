import React from 'react';
import { Container, Card, Row, Col } from 'react-bootstrap';
import banner from '../../assets/img/banner.jpg';
import './styles.css';
import curso from '../../assets/img/curso.png'
import docu from '../../assets/img/docu.png'
import ingreso from '../../assets/img/ingreso.png'

const Comunidad = () => {
    return (
        <div className="comunidadContainer">
            <div className="banner">
                <img src={banner} alt="banner" />
                <h1>COMUNIDAD</h1>
            </div>
            <Container fluid className="comunidad">
                <Row>
                    <Col>
                        <Card style={{ width: '20rem' }}>
                            <Card.Img variant="top" src={docu} />
                            <Card.Body>
                                <Card.Title>SOLICITUD DE CERTIFICADOS DE SERVICIOS</Card.Title>
                                <Card.Text>
                                En caso de que Ud. siendo propietario o inquilino haya sufrido un 
                                siniestro en el cual haya intervenido Bomberos Voluntarios de 
                                José C. Paz podrá solicitar un Certificado/Constancia de Servicio en 
                                el Cuartel Central.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    
                    <Col>
                        <Card style={{ width: '20rem' }}>
                            <Card.Img variant="top" src={curso} />
                            <Card.Body>
                                <Card.Title>VISITAS Y CAPACITACIÓN</Card.Title>
                                <Card.Text>
                                Si sos particular siempre podés pasar por el Cuartel Central 
                                y solicitarle al Cuartelero que te muestre las instalaciones, los móviles 
                                y equipos con los que trabajamos y que te cuente cuales son nuestras tareas 
                                como bomberos.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    
                    <Col>
                        <Card style={{ width: '20rem' }}>
                            <Card.Img variant="top" src={ingreso} />
                            <Card.Body>
                                <Card.Title>INGRESO AL CUERPO ACTIVO</Card.Title>
                                <Card.Text>
                                Si cumple con los requisitos y desea formar parte del Cuerpo Activo para 
                                inscribirse deberá presentarse con DNI en el Cuartel Central
                                y completar el formulario correspondiente en las fechas indicadas para la 
                                preinscripción.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    
                </Row>
            </Container>
        </div>
    )
}

export default Comunidad;