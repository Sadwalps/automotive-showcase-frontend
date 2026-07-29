import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { Button } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';

function Likecarconfirm() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
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
                    <input type="text" className='form-control py-lg-2 py-1 text-center' placeholder='Car Name' />
                    <input type="text" className='form-control py-lg-2 py-1 text-center mt-2' placeholder='Car Brand' />
                    <input type="text" className='form-control py-lg-2 py-1 text-center mt-2' placeholder='Category' />
                    <div>
                        <div className="row">
                            <div className="col-lg-6 col-md-6 col-12"> <input type="text" className='form-control py-lg-2 py-1 text-center mt-2' placeholder='Horsepower' /></div>
                            <div className="col-lg-6 col-md-6 col-12"> <input type="text" className='form-control py-lg-2 py-1 text-center mt-2' placeholder='Top Speed' /></div>
                        </div>
                    </div>
                    <input type="text" className='form-control py-lg-2 py-1 text-center mt-2' placeholder='Engine' />
                    <input type="text" className='form-control py-lg-2 py-1 text-center mt-2' placeholder='Car Image Url' />
                </Modal.Body>
                <Modal.Footer className='bg-dark'>

                    <Button variant="light" >
                        Confirm
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default Likecarconfirm