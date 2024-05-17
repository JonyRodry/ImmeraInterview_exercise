import React, { useState, useCallback, useEffect} from "react";
import Container from 'react-bootstrap/Container';
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

import slides from "./slider.js"
import "./slider.styles.scss"

function Slider(){

    const [current, setCurrent] = useState(0);
    const len = slides.length;

    // Caso o currente seja o primeiro, vai para o ultimo do array
    // Senão, vai para o anterior
    const leftHandle = () => {
      setCurrent(current - 1 < 0 ? len - 1 : current - 1);
    };
    
    // Caso o currente seja o ulitmo, vai para o primeiro do array
    // Senão, vai para o seguinte
    const rightHandle = useCallback(() => {
        setCurrent(current + 1 > len - 1 ? 0 : current + 1);
      }, [current, len]);

    // Mudar o slide automaticamente de 5 em 5 segundos
    useEffect(() => {
      const interval = setTimeout(() => {
        rightHandle();
      }, 5000);
      return () => clearTimeout(interval);
    }, [rightHandle])
    
    return(
        <Container className="slider" fluid="true">
            {slides.map((slide, index) => {
                return(
                    <div key={index}>{current === index && 
                        <div className="item-slide">
                            <FaArrowLeft className="leftBtn" onClick={leftHandle} />
                            <p>{slide.name}</p> 
                            <p>{slide.description}</p> 
                            <FaArrowRight className="rightBtn" onClick={rightHandle} /> 
                        </div>}
                    </div>
                );
            })}
        </Container>
    )
}

export default Slider;