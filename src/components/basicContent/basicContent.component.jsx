import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'; 

import foto from "../../assets/foto.jpg";

import "./basicContent.styles.scss"

function BasicContent(){
    
    return(
        <Container className="basicContent" fluid="true">
            <Row className="basicContent-row">
                <Col md='5' className="col-text">
                    <h2>Lorem ipsum</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
                        nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
                        volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper
                        suscipit lobortis nisl ut aliquip ex ea commodo consequat.
                        Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse
                        molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero
                    </p>
                    <button className="btn-text">Lorem ipsum</button>
                </Col>
                <Col md='7' className="col-img">
                    <img
                        src={foto}
                        width="100%"
                        height="100%"
                        alt="logo"
                    />
                </Col>
            </Row>
            <Row className="basicContent-row">
                <Col md='7' className="col-img">
                    <img
                        src={foto}
                        width="100%"
                        height="100%"
                        alt="logo"
                    />
                </Col>
                <Col md='5' className="col-text right">
                    <h2>Lorem ipsum</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
                        nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
                        volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper
                        suscipit lobortis nisl ut aliquip ex ea commodo consequat.
                        Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse
                        molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero
                    </p>
                    <button className="btn-text">Lorem ipsum</button>
                </Col>
            </Row>
        </Container>
    )
}

export default BasicContent;