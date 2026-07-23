import { faMaximize } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
function Viewimagemodal({item}) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <button onClick={handleShow} className='carcardsbtns  px-2 py-1  fs-lg-4  fs-5'>
                <FontAwesomeIcon icon={faMaximize} />
            </button>
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
                    <img src={item?.imgurl}alt="" className='w-100' />
                </Modal.Body>

            </Modal>
        </>
    )
}

export default Viewimagemodal