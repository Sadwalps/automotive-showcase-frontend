import React, { useEffect } from 'react'
import { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { getallcardeatilsApi } from '../service/allApi';
import Editcardeatils from '../components/Editcardeatils';

function Cardetails() {
    const [show, setShow] = useState(false);
    const [allcars, setAllcars] = useState([])
    const [adminStatus, setAdminStatus] = useState("")

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const getallcars = async () => {
        const result = await getallcardeatilsApi()
        console.log(result);
        setAllcars(result.data)
    }
    console.log(allcars);

    useEffect(() => {
        getallcars()
    }, [])

    useEffect(() => {
        if (sessionStorage.getItem("admin")) {
            setAdminStatus(sessionStorage.getItem("admin"))
        }
    }, [])

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
                {allcars.length > 0 ? <div className="row">
                    <div className="col-md-1"></div>
                    <div className="col-md-10">
                        <div className="row">
                            {allcars?.map((item) => (<div className="col-lg-4 col-md-6 col-12">
                                <Card style={{ width: '100%', border: "0px", marginTop: "10px", marginBottom: "20px" }}>
                                    <Card.Img variant="top" src={item?.imgurl} />
                                    <Card.Body>
                                        <Card.Title style={{ fontWeight: "bold" }}>{item?.carname}</Card.Title>
                                    </Card.Body>
                                    <div className='d-flex justify-content-between'>
                                        <button onClick={handleShow} className='cardetailsbuttons'>View image</button>
                                        {!adminStatus?<button className='btn p-1  ' id='likebtn' >
                                            <FontAwesomeIcon icon={faHeart} />
                                        </button>:
                                        <Editcardeatils item={item} />
                                       }
                                        <Link to={'/singlecardetails'}>
                                            <button className='cardetailsbuttons'>View details</button></Link>
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
                            </div>))}
                        </div>
                    </div>
                    <div className="col-md-1"></div>
                </div> :
                    <div className='d-flex justify-content-center align-items-center' style={{ height: "40vh" }}>
                        <h1 className='text-primary' style={{ fontWeight: "bold" }} >Page is Empty!!!</h1>
                    </div>
                }
            </div>
            < Footer />
        </>
    )
}

export default Cardetails