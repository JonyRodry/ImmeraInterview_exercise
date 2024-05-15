import React from "react";

import {Outlet} from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Navbar from "../../components/navbar/navbar.component";

import "./layout.styles.scss"

function Layout() {
  
  return (
    <Container className="layout-container" fluid="true">
        <Navbar></Navbar>
        <Outlet></Outlet>
    </Container>
  );
}

export default Layout;