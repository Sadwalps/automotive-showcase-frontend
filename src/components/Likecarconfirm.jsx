import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { Button } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';

function Likecarconfirm({ item }) {
    const [show, setShow] = useState(false);
    const [likecardetails, setLikecardetails] = useState({
        carname: item?.carname,
        brand: item?.brand,
        category: item?.category,
        horsepower: item?.horsepower,
        topspeed: item?.topspeed,
        engine: item?.engine,
        imgurl: item?.imgurl
    })
    console.log(likecardetails);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleConfirm = async()=>{
        const {carname,brand,category,horsepower,topspeed,engine,imgurl} = likecardetails
        if(!carname || !brand || !category || !horsepower || !topspeed || !engine || !imgurl){
            alert(`Absence of some details`)
        }else{
            alert(`Car liked`)
        }
    }
    return (
        <>
            <button onClick={handleShow} className='btn p-1  ' id='likebtn' >
                <FontAwesomeIcon icon={faHeart} />
            </button>

            {/* modal for confirm like car */}
            <Modal show={show} onHide={handleClose} className='m-0' size='lg' centered>
                <Modal.Header closeButton className='bg-dark w-100'>
                    <Modal.Title className='text-light w-100'><h2 className='text-center'>Confirm Like</h2></Modal.Title>
                </Modal.Header>
                <Modal.Body className='bg-dark'>
                    <input value={likecardetails.carname} readOnly type="text" className='form-control py-lg-2 py-1 text-center' placeholder='Car Name' />
                    <input  value={likecardetails.brand} readOnly  type="text" className='form-control py-lg-2 py-1 text-center mt-2' placeholder='Car Brand' />
                    <input  value={likecardetails.category} readOnly  type="text" className='form-control py-lg-2 py-1 text-center mt-2' placeholder='Category' />
                    <div>
                        <div className="row">
                            <div className="col-lg-6 col-md-6 col-12"> <input  value={likecardetails.horsepower} readOnly  type="text" className='form-control py-lg-2 py-1 text-center mt-2' placeholder='Horsepower' /></div>
                            <div className="col-lg-6 col-md-6 col-12"> <input  value={likecardetails.topspeed} readOnly  type="text" className='form-control py-lg-2 py-1 text-center mt-2' placeholder='Top Speed' /></div>
                        </div>
                    </div>
                    <input  value={likecardetails.engine} readOnly  type="text" className='form-control py-lg-2 py-1 text-center mt-2' placeholder='Engine' />
                    <input  value={likecardetails.imgurl} readOnly  type="text" className='form-control py-lg-2 py-1 text-center mt-2' placeholder='Car Image Url' />
                </Modal.Body>
                <Modal.Footer className='bg-dark'>

                    <Button variant="light" onClick={handleConfirm} >
                        Confirm
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default Likecarconfirm