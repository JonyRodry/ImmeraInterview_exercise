import React, { useEffect, useState } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';  
import { FaPlus, FaMinus, FaSortAmountDown, FaSortAmountDownAlt  } from "react-icons/fa";

import "./api.styles.scss"

function API(){
    
    const _ = require("lodash");
    const [data, setData] = useState([]);
    const [source, setSource] = useState([]);
    let [numRows, setNumRows] = useState(4);
    const [typeButton, setTypeButton] = useState("Show More");
    const [show, setShow] = useState(false);
    let [filtered, setFiltered] = useState([])
    let yearsData = [];

    useEffect( () => {
        if(data.length === 0){
            fetch("https://datausa.io/api/data?drilldowns=Nation&measures=Population")
                .then((res) => res.json())
                .then((json) => {
                    setData(json.data);
                    setFiltered(json.data);
                    setSource(json.source);
                });
        }
    });

    function handleChange(e){
        let value = e.target.value;
        let newArray = [];

        if(value === "All Years"){
            setFiltered(data);
            setNumRows(4);
            if(filtered.length > 4){
                setTypeButton("Show More")
            }
        }
        else{
            data.map((item) => {
                if(item.Year === value){
                    newArray.push(item);
                }}
            );
            setFiltered(newArray);
            setNumRows(4);
            if(filtered.length > 4){
                setTypeButton("Show More")
            }
        }
    }

    function getYears(){
        data.map((item) => {
            if(yearsData.includes(item.Year) === false){
                yearsData.push(item.Year);
            }}
        );
    }

    function changeNumRows(){
        if(typeButton === "Show More"){
            setNumRows(numRows += 4);
            
            if(numRows >= filtered.length){
                setTypeButton("Show Less")
            }
        }
        else{
            setNumRows(4);
            setTypeButton("Show More")
        }
    }

    function handleExpandClick(index){
        setShow(show === index ? null : index);
    }

    function sort(){
        let sorted =  _.orderBy(filtered, ['ID Year'], ['desc']);
        setFiltered(sorted);
    }

    function sortDown(){
        let sorted =  _.orderBy(filtered, ['ID Year'], ['asc']);
        setFiltered(sorted);
    }

    getYears();

    return(
        <Container className="api-container" fluid="true">
            <Row className="api-row">
                <Col md='6' className="api-col">
                    <h1>Population</h1>
                </Col>
                <Col md='6' className="api-col right">
                    <FaSortAmountDown onClick={sort}></FaSortAmountDown>
                    <FaSortAmountDownAlt onClick={sortDown} id="icon2"></FaSortAmountDownAlt>
                    <select className="api-filter-select" onChange={handleChange}>
                        <option defaultValue={"All Years"}>Filter Year</option>
                            <option value="All Years"> All Years</option>
                            {yearsData.map((option, index) => (
                                <option key={index} value={option}>{option}</option>
                            ))}
                    </select>
                </Col>
            </Row>
            {filtered.slice(0, numRows).map((item, index) => (
                <>
                    <Row key={index} className="list-row" id={"row"+index%2}>
                        <Col md='6' className="list-col">
                            {item.Year}
                        </Col>
                        <Col md='6' className="list-col right">
                            <button onClick={() => handleExpandClick(index)} className="button-expand">
                                {show === index ? <FaMinus/> : <FaPlus/>}
                            </button>
                        </Col>
                    </Row>
                    {show === index &&
                        <Row className="list-row" id={"row"+index%2}>
                        <Col md='4'className="list-hide-col ">
                            <strong>Country</strong> 
                            <br/>
                            Name: {item.Nation}
                        </Col>
                        <Col md='4'className="list-hide-col center">
                            <strong>Population</strong> 
                            <br/>
                            {item.Population}
                        </Col>
                        <Col md='4'className="list-hide-col right">
                        <strong>Source</strong> 
                        <br/>
                        {source[0].annotations.source_name}
                        </Col>
                        </Row>
                    }    
                </>
            ))}
            <Row>
                {filtered.length > 4 &&
                    <button className="api-btn" onClick={changeNumRows}>{typeButton}</button>
                }
            </Row>
            
        </Container>
    )
}

export default API;