import React, { useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../../images/icons/logo.png'
import search from '../../images/icons/search-solid.svg'
import './NavBar.css'
import { Link } from 'react-router-dom'
import { userContext } from '../../App';
const NavBar = () => {
    const [loggedin, setLoggedin] = useContext(userContext);
    return (
        <div>
            <div className='MenuBarContainer'>
                <Navbar className='NavBarContainer'>
                    <Container>
                        <Navbar.Brand href="/home"><img style={{ width: '80px' }} src={logo} alt="" /></Navbar.Brand>
                        <Nav className="me-auto">
                            <Link to="/home">Home</Link>
                            <Link to="/bookings">Bookings</Link>
                            <Link to="/contact">Contact</Link>
                            <Link to="/dashboard">Dashboard</Link>
                            {
                                !loggedin.email && <Link to="/login">Login</Link>
                            }
                            <Link style={{ color: 'orange' }} to="/profile">{loggedin.name}</Link>
                        </Nav>
                        <input className='input' type="text" name="" placeholder='Search' id="" />
                        <Link to='/Search'> <img className='search' src={search} alt="" /></Link>
                    </Container>
                </Navbar>
            </div>
        </div>
    );
};

export default NavBar;