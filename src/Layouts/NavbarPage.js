import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import Exit_Icon from '../Icons/exit.png'
import { useNavigate } from 'react-router-dom'
import '../Components/Style/Navbar.css'

const NavbarPage = () => {
    const navigate = useNavigate()
    const handleLogout = () => {
        return navigate("/login")
    };
    const goUserPage = () => {
        return navigate("/user")
    }
    const goProductPage = () => {
        return navigate("/products")
    }
    const goCategoriesPage = () => {
        return navigate("/categories")
    }
    const goAboutMePage = () => {
        return navigate("/about")
    }
    const goHomePage = () => {
        return navigate("/")
    }
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand>
                    <img
                        src={Exit_Icon}
                        alt="Exit Icon"
                        onClick={handleLogout}
                        style={{ cursor: 'pointer', width: '30px', marginRight: '10px' }}
                    />
          Tongre
        </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto justify-content-center" style={{width:"100%"}}>
                        <Nav.Link onClick={goHomePage}>Home</Nav.Link>
                        <Nav.Link onClick={goProductPage}>Products</Nav.Link>
                        <Nav.Link onClick={goCategoriesPage }>Categories</Nav.Link>
                        <Nav.Link onClick={goUserPage}>Users</Nav.Link>
                        <Nav.Link onClick={goAboutMePage}>About me</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavbarPage;
