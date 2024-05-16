import React, { useState, useEffect, useRef } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';  
import { Link } from "react-router-dom";

import logo from "../../assets/logo.jpg";
import lupa from "../../assets/lupa.png";

import "./navbar.styles.scss"

function Navbar(){

    const ref = useRef(null);

    // Função do Btn: false - para abrir o input || true -  para pesquisar
    const[estadoBtn, setEstadoBtn] = useState(false);

    // Display do input: false - input fechado || true - input aberto
    const[displayInput, setDisplayInput] = useState(false);

    // Valor para i
    const[valueInput, setValueInput] = useState("")

    // Verifica quando se carrega fora do input
    useEffect(() => {
        const handleOutSideClick = (event) => {
            if (!ref.current?.contains(event.target) && displayInput === true) {
                console.log("ENTREI");
                setDisplayInput(false);
                setEstadoBtn(false);
            }
        };
        window.addEventListener("mousedown", handleOutSideClick);
        return () => {
            window.removeEventListener("mousedown", handleOutSideClick);
        };
    }, [ref, displayInput]);
    
    const handleChange = (event) => {
        setValueInput(event.target.value);
    };

    const handleKey = (event) => {
        if (event.key === 'Enter') {
            console.log("Search: " + valueInput)
            setDisplayInput(false);
            setEstadoBtn(false);
            setValueInput("");
        }
    };

    function changeState(){
        if(estadoBtn === false){
            setDisplayInput(true);
            setEstadoBtn(true)
        }
        else{
            console.log("Search: " + valueInput)
            setDisplayInput(false);
            setEstadoBtn(false);
            setValueInput("");
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
                    <Link to="/">Page 1</Link>
                    <Link to="/page2">Page 2</Link>
                </Col>
                <Col md='4' className="navbar-searchBar">
                    <button id="btn-searchBar">
                        <div className="div-img" onClick={() => changeState()}>
                            <img
                                src={lupa}
                                width="20px"
                                height="20px"
                                alt="lupaIcon"
                            />
                        </div>
                        {displayInput && (
                            <input id="input-searchBar" placeholder="Search ..." onChange={handleChange} onKeyDown={handleKey} ref={ref}></input>  
                        )}
                        </button>
                </Col>
            </Row>
        </Container>
    )
}

export default Navbar;