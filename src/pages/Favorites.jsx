import React from 'react'
import { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleUp } from '@fortawesome/free-solid-svg-icons';
import Viewimagemodal from '../components/Viewimagemodal';
function Favorites() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <Header />
            <div className='favoritecardetailsherosection d-flex justify-content-center align-items-center' style={{}}>
                <div className="container-fluid ">
                    <div className="row">
                        <div className="col-8  ps-2 text-light" style={{ fontWeight: "bold" }}>
                            <h1 className=' ps-lg-5 ps-2'>Favorite Cars</h1>
                            <h3 className='ps-lg-5 ps-2'>Cars that you liked the most</h3>
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
                                        <Viewimagemodal />
                                        <Link >
                                            <button className='carcardsbtns  px-2 py-1 fs-lg-4  fs-5'>
                                                <FontAwesomeIcon icon={faAngleUp} />
                                            </button></Link>
                                    </div>
                                </Card>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-1"></div>
                </div>
            </div>
            < Footer />
        </>
    )
}

export default Favorites