import React from 'react'
import Header from './Header'
import { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Footer from './Footer';
import Modal from 'react-bootstrap/Modal';

function Cardetails() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Header />
      <div className='cardetailsherosection d-flex justify-content-center align-items-center' style={{}}>
        <div className="container-fluid ">
          <div className="row">
            <div className="col-8  ps-2 text-light" style={{ fontWeight: "bold" }}>
              <h1 className=' ps-lg-5 ps-2'>All Cars</h1>
              <h3 className='ps-lg-5 ps-2'>Search your favorate cars</h3>
            </div>
            <div className="col-4">
            </div>
          </div>
        </div>
      </div>

      {/* car card's section */}
      <div className='container-fluid pt-lg-5 pt-3'>
        <div className="row">
          <div className="col-md-1"></div>
          <div className="col-md-10">
            <div className="row">
              <div className="col-lg-4 col-md-6 col-12">
                <Card style={{ width: '100%', border: "0px", marginTop: "10px", marginBottom: "20px" }}>
                  <Card.Img variant="top" src="https://tse3.mm.bing.net/th/id/OIP.JRE3ZGj58ZPQShbvEq9leAHaEK?r=0&rs=1&pid=ImgDetMain&o=7&rm=3" />
                  <Card.Body>
                    <Card.Title style={{ fontWeight: "bold" }}>Lamborghini centenario</Card.Title>
                  </Card.Body>
                  <div className='d-flex justify-content-between'>
                    <button onClick={handleShow} className='cardetailsbuttons'>View image</button>
                    <button className='cardetailsbuttons'>View details</button>
                  </div>
                </Card>
                {/* modal for view car image */}
                <Modal
                  show={show}
                  onHide={handleClose}
                  backdrop="static"
                  keyboard={false}
                  size='lg'
                  centered
                >
                  <Modal.Header closeButton>

                  </Modal.Header>
                  <Modal.Body>
                    <img src="https://th.bing.com/th/id/OIP.D4yorbuihRQjUahXKMG0vQHaE8?r=0&o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3" alt="" className='w-100' />
                  </Modal.Body>

                </Modal>
              </div>
              <div className="col-lg-4 col-md-6 col-12">
                <Card style={{ width: '100%', border: "0px", marginTop: "10px", marginBottom: "20px" }}>
                  <Card.Img variant="top" src="https://tse3.mm.bing.net/th/id/OIP.JRE3ZGj58ZPQShbvEq9leAHaEK?r=0&rs=1&pid=ImgDetMain&o=7&rm=3" />
                  <Card.Body>
                    <Card.Title style={{ fontWeight: "bold" }}>Lamborghini centenario</Card.Title>
                  </Card.Body>
                  <div className='d-flex justify-content-between'>
                    <button className='cardetailsbuttons'>View image</button>
                    <button className='cardetailsbuttons'>View details</button>
                  </div>
                </Card>
              </div>
              <div className="col-lg-4 col-md-6 col-12">
                <Card style={{ width: '100%', border: "0px", marginTop: "10px", marginBottom: "20px" }}>
                  <Card.Img variant="top" src="https://tse3.mm.bing.net/th/id/OIP.JRE3ZGj58ZPQShbvEq9leAHaEK?r=0&rs=1&pid=ImgDetMain&o=7&rm=3" />
                  <Card.Body>
                    <Card.Title style={{ fontWeight: "bold" }}>Lamborghini centenario</Card.Title>
                  </Card.Body>
                  <div className='d-flex justify-content-between'>
                    <button className='cardetailsbuttons'>View image</button>
                    <button className='cardetailsbuttons'>View details</button>
                  </div>
                </Card>
              </div>
            </div>
          </div>
          <div className="col-md-1"></div>
          {/* <div className="col-md-6">
          <img src="https://tse3.mm.bing.net/th/id/OIP.JRE3ZGj58ZPQShbvEq9leAHaEK?r=0&rs=1&pid=ImgDetMain&o=7&rm=3" alt="" className='w-100 ' style={{minHeight:"30vh"}} />
        </div>
        <div className="col-md-6">
          <h1>Lamborghini centenario</h1>
          <h3></h3>
        </div> */}
        </div>
      </div>
      < Footer />
    </>
  )
}

export default Cardetails