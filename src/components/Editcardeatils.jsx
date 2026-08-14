import { faPencil } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useContext } from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { editcardetailsApi } from '../service/allApi';
import { editResponseContext } from '../context/ContextShare';

function Editcardeatils({ item }) {
    const { setEditResponse } = useContext(editResponseContext)
    const [show, setShow] = useState(false);
    const [editcardetails, setEditcardetails] = useState({
        carname: item?.carname,
        brand: item?.brand,
        category: item?.category,
        horsepower: item?.horsepower,
        topspeed: item?.topspeed,
        engine: item?.engine,
        imgurl: item?.imgurl,
        description: item?.description
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
            imgurl: item?.imgurl,
            description: item?.description
        })
    }

    const handleEdit = async (id) => {
        const { carname, brand, category, horsepower, topspeed, engine, imgurl, description } = editcardetails
        console.log(carname, brand, category, horsepower, topspeed, engine, imgurl,description);
        if (!carname || !brand || !category || !horsepower || !topspeed || !engine || !imgurl || !description) {
            alert(`Fill the form completely`)
        } else {
            const result = await editcardetailsApi(id, editcardetails)
            console.log(result);

            if (result.status >= 200 && result.status < 300) {
                alert(`car details successfully updated`)
                setEditResponse(result)
                setTimeout(() => {
                    handleClose()
                }, 1000)
            } else {
                alert(`Something went wrong`)
            }
        }
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
                    <input onChange={(e) => setEditcardetails({ ...editcardetails, carname: e.target.value })} value={editcardetails.carname} type="text" className='form-control py-lg-2 py-1 text-center' placeholder='Car Name' />
                    <input value={editcardetails.brand} onChange={(e) => setEditcardetails({ ...editcardetails, brand: e.target.value })} type="text" className='form-control py-lg-2 py-1 text-center mt-2' placeholder='Car Brand' />
                    <input value={editcardetails.category} onChange={(e) => setEditcardetails({ ...editcardetails, category: e.target.value })} type="text" className='form-control py-lg-2 py-1 text-center mt-2' placeholder='Category' />
                    <div>
                        <div className="row">
                            <div className="col-lg-6 col-md-6 col-12"> <input value={editcardetails.horsepower} onChange={(e) => setEditcardetails({ ...editcardetails, horsepower: e.target.value })} type="text" className='form-control py-lg-2 py-1 text-center mt-2' placeholder='Horsepower' /></div>
                            <div className="col-lg-6 col-md-6 col-12"> <input value={editcardetails.topspeed} onChange={(e) => setEditcardetails({ ...editcardetails, topspeed: e.target.value })} type="text" className='form-control py-lg-2 py-1 text-center mt-2' placeholder='Top Speed' /></div>
                        </div>
                    </div>
                    <input value={editcardetails.engine} onChange={(e) => setEditcardetails({ ...editcardetails, engine: e.target.value })} type="text" className='form-control py-lg-2 py-1 text-center mt-2' placeholder='Engine' />
                    <input value={editcardetails.imgurl} onChange={(e) => setEditcardetails({ ...editcardetails, imgurl: e.target.value })} type="text" className='form-control py-lg-2 py-1 text-center mt-2' placeholder='Car Image Url' />
                    <textarea value={editcardetails.description} onChange={(e) => setEditcardetails({ ...editcardetails, description: e.target.value })} name="" id="" className='form-control py-lg-2 py-1 text-center mt-2' placeholder='Description About The Car'></textarea>
                </Modal.Body>
                <Modal.Footer className='bg-dark'>
                    <Button variant="secondary" onClick={handleCancel} >
                        Cancel
                    </Button>
                    <Button variant="light" onClick={() => handleEdit(item?.id)}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default Editcardeatils