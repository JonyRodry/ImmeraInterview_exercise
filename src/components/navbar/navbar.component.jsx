import React, { useState } from "react";
import Container from 'react-bootstrap/Container';
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

import logo from "../../assets/logo.jpg";
import lupa from "../../assets/lupa.png";

import "./navbar.styles.scss"

function Navbar(){

    // Função do Btn: false - para abrir o input || true -  para pesquisar
    const[estadoBtn, setEstadoBtn] = useState(false);

    // Display do input: false - input fechado || true - input aberto
    const[displayInput, setDisplayInput] = useState(false);

    // Valor para i
    const[valueInput, setValueInput] = useState("")
    
    const handleChange = (event) => {
        setValueInput(event.target.value);
    };

    const handleKey = (event) => {
        if (event.key === 'Enter') {
            console.log("Search: " + valueInput)
            updateStates(3);
        }
    };

    function updateStates(num){
        setEstadoBtn(!estadoBtn);
        setDisplayInput(!displayInput);
        if(num === 3){
            setValueInput("");
        }
    }

    function changeState(){
        if(estadoBtn === false){
            updateStates(2);
        }
        else{
            console.log("Search: " + valueInput)
            updateStates(3);
        }
    }
    
    return(
        <Container className="navbar" fluid="true">
            <Row className="navbar-row">
                <Col md='4' className="navbar-logo">
                    <Link to="/">
                        <img
                        src={logo}
                        width="150px"
                        height="100%"
                        alt="logo"
                        />
                    </Link>
                </Col>
                <Col md='4' className="navbar-options">
                    <Link>Page 1</Link>
                    <Link>Page 2</Link>
                </Col>
                <Col md='4' className="navbar-searchBar">
                    <button id="btn-searchBar">
                        <img
                            src={lupa}
                            width="20px"
                            height="20px"
                            onClick={() => changeState()}
                            alt="lupaIcon"
                        />
                        {displayInput && (
                            <input id="input-searchBar" placeholder="Search ..." onChange={handleChange} onKeyDown={handleKey}></input>  
                        )}
                        </button>
                </Col>
            </Row>
        </Container>
    )
}

export default Navbar;