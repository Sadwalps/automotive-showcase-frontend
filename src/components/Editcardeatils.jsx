import { faPencil } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function Editcardeatils({ item }) {
    const [show, setShow] = useState(false);
    const [editcardetails, setEditcardetails] = useState({
        carname: item?.carname,
        brand: item?.brand,
        category: item?.category,
        horsepower: item?.horsepower,
        topspeed: item?.topspeed,
        engine: item?.engine,
        imgurl: item?.imgurl
    })
    console.log(editcardetails);

    const handleShow = () => setShow(true);
    const handleClose = () => {
        setShow(false);
    }

    const handleCancel = () => {
        setEditcardetails({
            carname: item?.carname,
            brand: item?.brand,
            category: item?.category,
            horsepower: item?.horsepower,
            topspeed: item?.topspeed,
            engine: item?.engine,
            imgurl: item?.imgurl
        })
    }
    
    return (
        <>
            <button className='btn p-1  ' id='editbtn' >
                <FontAwesomeIcon icon={faPencil} onClick={handleShow} />
            </button>

            {/* modal for add car details (for admins) */}
            <Modal show={show} onHide={handleClose} className='m-0' size='lg' centered>
                <Modal.Header closeButton className='bg-dark w-100'>
                    <Modal.Title className='text-light w-100'><h2 className='text-center'>Edit Car Details</h2></Modal.Title>
                </Modal.Header>
                <Modal.Body className='bg-dark'>
                    <input value={editcardetails.carname} onChange={(e) => setEditcardetails({ ...Editcardeatils, carname: e.target.value })} type="text" className='form-control py-lg-2 py-1 text-center' placeholder='Car Name' />
                    <input value={editcardetails.brand} onChange={(e) => setEditcardetails({ ...Editcardeatils, brand: e.target.value })} type="text" className='form-control py-lg-2 py-1 text-center mt-2' placeholder='Car Brand' />
                    <input value={editcardetails.category} onChange={(e) => setEditcardetails({ ...Editcardeatils, category: e.target.value })} type="text" className='form-control py-lg-2 py-1 text-center mt-2' placeholder='Category' />
                    <div>
                        <div className="row">
                            <div className="col-lg-6 col-md-6 col-12"> <input value={editcardetails.horsepower} onChange={(e) => setEditcardetails({ ...Editcardeatils, horsepower: e.target.value })} type="text" className='form-control py-lg-2 py-1 text-center mt-2' placeholder='Horsepower' /></div>
                            <div className="col-lg-6 col-md-6 col-12"> <input value={editcardetails.topspeed} onChange={(e) => setEditcardetails({ ...Editcardeatils, topspeed: e.target.value })} type="text" className='form-control py-lg-2 py-1 text-center mt-2' placeholder='Top Speed' /></div>
                        </div>
                    </div>
                    <input value={editcardetails.engine} onChange={(e) => setEditcardetails({ ...Editcardeatils, engine: e.target.value })} type="text" className='form-control py-lg-2 py-1 text-center mt-2' placeholder='Engine' />
                    <input value={editcardetails.imgurl} onChange={(e) => setEditcardetails({ ...Editcardeatils, imgurl: e.target.value })} type="text" className='form-control py-lg-2 py-1 text-center mt-2' placeholder='Car Image Url' />
                </Modal.Body>
                <Modal.Footer className='bg-dark'>
                    <Button variant="secondary" onClick={handleCancel} >
                        Cancel
                    </Button>
                    <Button variant="light">
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default Editcardeatils