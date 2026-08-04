import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { Button } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';

function Likecarconfirm({ item }) {
    
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
                    
                </Modal.Body>
                <Modal.Footer className='bg-dark'>

                    <Button variant="light"  >
                        Confirm
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default Likecarconfirm