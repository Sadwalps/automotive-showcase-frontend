import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Dropdown from 'react-bootstrap/Dropdown';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPowerOff } from '@fortawesome/free-solid-svg-icons';
import { useContext } from 'react';
import { loginResponseContext } from '../context/ContextShare';

function Header() {
  const { setLoginResponse } = useContext(loginResponseContext)
  const { loginResponse } = useContext(loginResponseContext)
  console.log(loginResponse);

  const navigate = useNavigate()

  const handlelogout = () => {
    sessionStorage.removeItem("admin")
    sessionStorage.removeItem("user")
    sessionStorage.removeItem("role")
    alert(`Logout successfull`)
    navigate('/')
    setLoginResponse(false)
  }

  return (
    <>
      <div style={{ background: "grey" }}>
        <Navbar expand="lg" className="py-3">
          <Container>
            <Navbar.Brand href='/' className='text-light' style={{ fontFamily: "cursive", fontWeight: "bold" }}>Automotive showcase</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto">
                <Link to={'/'} style={{ textDecoration: "none" }}><div id='navlinks' >Home</div>
                </Link>
                <Dropdown>
                  <Dropdown.Toggle id='navlinks' className='border-0 mt-1 rounded-0 w-100 ' >
                    Pages
                  </Dropdown.Toggle>
                  <Dropdown.Menu className='' style={{ background: "grey", opacity: "30px", border: "0px" }} >
                    <Link to={'/cardetails'} style={{ textDecoration: "none" }}><Dropdown.Item href="#/action-1" id='dropdownoptions'>All Cars</Dropdown.Item></Link>
                    <Link to={'/favoritecardetails'} style={{ textDecoration: "none" }}>  <Dropdown.Item href="#/action-2" id='dropdownoptions'>Favorites</Dropdown.Item></Link>
                  </Dropdown.Menu>
                </Dropdown>
                <button id='navlinks' className='btn border-0 mt-1 rounded-0 '>Add Cars</button>

                {loginResponse == true && <button onClick={handlelogout} id='navlinks' className='btn border-0 mt-1 rounded-0'><FontAwesomeIcon icon={faPowerOff} style={{ fontSize: "17px" }} /></button>}
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </>
  )
}

export default Header