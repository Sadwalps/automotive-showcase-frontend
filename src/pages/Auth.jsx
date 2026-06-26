import { faEnvelope, faKey, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { Link } from 'react-router-dom';
function Auth({ signup }) {
    return (
        <>
            <div className='container-fluid bg-dark ' >
                <div className="row d-flex justify-content-center align-items-center" style={{ minHeight: "100vh" }}>
                    <div className="col-md-3"></div>
                    <div className="col-md-6 ">
                        {signup ? <div><h1 className='text-warning text-center mb-4' style={{ fontWeight: "bold", fontFamily: "fangsong" }}>Signup</h1>
                            <h1 className='text-info  text-center mb-4' style={{ fontWeight: "bold", fontFamily: "fangsong" }}>Signup</h1></div> :
                            <div><h1 className='text-warning  text-center mb-4' style={{ fontWeight: "bold", fontFamily: "fangsong" }}>Login</h1>
                                <h1 className='text-info  text-center mb-4' style={{ fontWeight: "bold", fontFamily: "fangsong" }}>Login</h1></div>}
                       {signup && <InputGroup className="mb-3 ">
                            <InputGroup.Text id="inputGroup-sizing-default" className=''>
                                <FontAwesomeIcon icon={faUser} />
                            </InputGroup.Text>
                            <Form.Control
                                aria-label="Default"
                                aria-describedby="inputGroup-sizing-default"
                                placeholder='username'
                            />
                        </InputGroup>}

                        <InputGroup className="mb-3">
                            <InputGroup.Text id="inputGroup-sizing-default">
                                <FontAwesomeIcon icon={faEnvelope} />
                            </InputGroup.Text>
                            <Form.Control
                                aria-label="Default"
                                aria-describedby="inputGroup-sizing-default"
                                placeholder='Email'
                            />
                        </InputGroup>

                        <InputGroup className="mb-3">
                            <InputGroup.Text id="inputGroup-sizing-default">
                                <FontAwesomeIcon icon={faKey} />
                            </InputGroup.Text>
                            <Form.Control
                                aria-label="Default"
                                aria-describedby="inputGroup-sizing-default"
                                placeholder='Password'
                            />
                        </InputGroup>

                        {signup ? <div>
                            <button className='btn btn-warning'>Signup</button>
                            <button className='btn btn-info'>Signup</button> <button className='btn btn-danger ' style={{ float: "right" }} >Cancel</button></div> :
                            <div><button className='btn btn-warning'>Login</button>
                                <button className='btn btn-info'>Login</button> <button className='btn btn-danger ' style={{ float: "right" }} >Cancel</button></div>}


                     { signup? <div><h5 className='text-light mt-3'>Already have an account <Link to={'/login'} className='text-warning'>Login</Link> </h5>                     
                        <h5 className='text-light mt-3'>Already have an account <Link to={'/login'} className='text-info'>Login</Link> </h5></div>:
                     <div>  <h5 className='text-light mt-3'>Don't have an account <Link to={'/signup'} className='text-warning' >Signup</Link> </h5>
                        <h5 className='text-light mt-3'>Don't have an account <Link  to={'/signup'} className='text-info' >Signup</Link> </h5></div> }
                    </div>
                    <div className="col-md-3"></div>
                </div>
            </div>
        </>
    )
}

export default Auth