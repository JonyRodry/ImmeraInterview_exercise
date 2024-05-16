import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';  

import "./footer.styles.scss"

function Footer(){
    
    return(
        <Container className="footer" fluid="true">
            <Row className="footer-company">
                <h1>Company</h1>
            </Row>
            <Row className="footer-links">
                <Col md='3'className="col-links">
                    <h5>Lorem Ipsum</h5>
                    <br></br>
                    <ul className="list-links">
                        <li><h5>Lorem Ipsum</h5></li>
                        <li><h5>Lorem Ipsum</h5></li>
                        <li><h5>Lorem Ipsum</h5></li>
                        <li><h5>Lorem Ipsum</h5></li>
                    </ul>
                </Col>
                <Col md='3'className="col-links">
                    <h5>Lorem Ipsum</h5>
                    <br></br>
                    <ul className="list-links">
                        <li><h5>Lorem Ipsum</h5></li>
                        <li><h5>Lorem Ipsum</h5></li>
                        <li><h5>Lorem Ipsum</h5></li>
                        <li><h5>Lorem Ipsum</h5></li>
                    </ul>
                </Col>
                <Col md='3'className="col-links right">
                    <h5>Lorem Ipsum</h5>
                    <br></br>
                    <ul className="list-links">
                        <li><h5>Lorem Ipsum</h5></li>
                        <li><h5>Lorem Ipsum</h5></li>
                        <li><h5>Lorem Ipsum</h5></li>
                        <li><h5>Lorem Ipsum</h5></li>
                    </ul>
                </Col>
                <Col md='3'className="col-links right">
                    <h5>Lorem Ipsum</h5>
                    <br></br>
                    <ul className="list-links">
                        <li><h5>Lorem Ipsum</h5></li>
                        <li><h5>Lorem Ipsum</h5></li>
                        <li><h5>Lorem Ipsum</h5></li>
                        <li><h5>Lorem Ipsum</h5></li>
                    </ul>
                </Col>
            </Row>

        </Container>
    )
}

export default Footer;