import React from 'react';
import { Container, Navbar, Row, Col } from 'react-bootstrap';
import Logo from '../../assets/img/logo.jpg';
import insta from '../../assets/img/instagram.png'
import face from '../../assets/img/facebook.png'
import './styles.css';

const FooterComp = () => {
    return(
        <div className='footer'>
            <Container className='footerContainer'>
                <Row className="footerRow">
                    <Col className="col">
                        <img
                            alt="logo"
                            src={Logo}
                            className="d-inline-block"
                        />
                    </Col>
                    <Col className="footerText col">
                        2022 © | INOBV 234 | BOMBEROS VOLUNTARIOS DE JOSÉ C. PAZ
                    </Col>
                    <Col className="socialMedia col">
                        <a target="_blank" href="https://www.facebook.com/Bomberos-Voluntarios-de-Jose-C-Paz-102897258064797/">
                            <img className='socialImage' src={face} alt="" />
                        </a>
                        <a target="_blank" href="https://www.instagram.com/bomberosvoluntariosdejosecpaz/">
                            <img className='socialImage' src={insta} alt="" />
                        </a>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default FooterComp;