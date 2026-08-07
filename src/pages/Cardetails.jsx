import React, { useContext, useEffect } from 'react'
import { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { faAngleUp, faCheck, faHeart, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { deletecardetailsApi, getallcardetailsApi, } from '../service/allApi';
import Editcardeatils from '../components/Editcardeatils';
import { carContext, editResponseContext } from '../context/ContextShare';
import Viewimagemodal from '../components/Viewimagemodal';
import { Button } from 'react-bootstrap';
import Likecarconfirm from '../components/Likecarconfirm';

function Cardetails() {
    const { editResponse } = useContext(editResponseContext)
    const { likedcars } = useContext(carContext)
    const [show, setShow] = useState(false);
    const [allcars, setAllcars] = useState([])
    const [adminStatus, setAdminStatus] = useState("")
    const [deleteStatus, setDeleteStatus] = useState([])

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const getallcars = async () => {
        const result = await getallcardetailsApi()
        console.log(result);
        setAllcars(result.data)
    }
    console.log(allcars);

    const handleDelete = async (id) => {
        console.log(id);

        const result = await deletecardetailsApi(id)
        console.log(result);
        if (result.status >= 200 && result.status < 300) {
            alert(`Car successfully deleted`)
            setDeleteStatus(result)
        } else {
            alert(`Something went wrong`)
        }
    }


    useEffect(() => {
        getallcars()
    }, [editResponse, deleteStatus])

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
                                        <Viewimagemodal item={item} />
                                        {!adminStatus ? (likedcars?.some((liked) => liked?.carname?.toLowerCase() === item?.carname?.toLowerCase()) ? (
                                            <FontAwesomeIcon icon={faCheck} className='text-success fa-2x' />) : (
                                            <Likecarconfirm item={item} />)) : (
                                            <div className='d-flex gap-4'>
                                                <Editcardeatils item={item} />
                                                <button className='btn p-1' id='deletebtn' onClick={() => handleDelete(item?.id)} > <FontAwesomeIcon icon={faTrash} /></button>
                                            </div>
                                        )}
                                        <Link to={`/singlecardetails/${item.id}`}>
                                            <button className='carcardsbtns  px-2 py-1 fs-lg-4  fs-5'>
                                                <FontAwesomeIcon icon={faAngleUp} />
                                            </button></Link>
                                    </div>
                                </Card>
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