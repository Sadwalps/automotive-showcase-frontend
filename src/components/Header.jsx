import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Dropdown from 'react-bootstrap/Dropdown';
function Header() {
  return (
    <>
      <div className="" style={{ background: "grey", opacity: "30px" }}>
        <Navbar expand="lg" className="">
          <Container>
            <Navbar.Brand href="#home" className='text-light' style={{ fontFamily: "cursive", fontWeight: "bold" }}>Automotive showcase</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto">
                <div id='navlinks'>Home</div>
               
                <Dropdown>
                  <Dropdown.Toggle   id='navlinks' className='border-0 mt-1 rounded-0' >
                   Pages
                  </Dropdown.Toggle>

                  <Dropdown.Menu className='bg-dark'>
                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </>
  )
}

export default Header