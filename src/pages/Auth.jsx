import { faEnvelope, faKey, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { Link } from 'react-router-dom';
import { adminsignupApi } from '../service/allApi';
function Auth({ signup, admin }) {
    const [authdetails, setAuthdetails] = useState({
        username: "",
        email: "",
        password: ""
    })
    console.log(authdetails);

    const handleCancel = () => {
        setAuthdetails({
            username: "",
            email: "",
            password: ""
        })
    }

    // admin signup
    const handleadminsignup = async () => {
        const { username, email, password } = authdetails
        console.log(username, email, password);
        if (!username || !email || !password) {
            alert(`Fill the form completely`)
        } else {
            const result = await adminsignupApi({ username, email, password })
            if (result.status >= 200 && result.status < 300) {
                alert(`a Signup successfull`)
            } else {
                alert(`Something went wrong`)
            }

        }
    }

    //admin login
    const handleadminlogin = () => {
        const { email, password } = authdetails
        console.log(email, password);
        if (!email || !password) {
            alert(`Fill the form completely`)
        } else {
            alert(`a login successfull`)
        }
    }

    //user signup
    const handleusersignup = () => {
        const { username, email, password } = authdetails
        console.log(username, email, password);
        if (!username || !email || !password) {
            alert(`Fill the form completely`)
        } else {
            alert(`u Signup successfull`)
        }
    }

    //user login
    const handleuserlogin = () => {
        const { email, password } = authdetails
        console.log(email, password);
        if (!email || !password) {
            alert(`Fill the form completely`)
        } else {
            alert(`u login successfull`)
        }
    }


    return (

        <>
            <div className='container-fluid bg-dark ' >
                <div className="row d-flex justify-content-center align-items-center" style={{ minHeight: "100vh" }}>
                    <div className="col-md-3"></div>
                    <div className="col-md-6 ">

                        {/* signup /login main headings */}
                        {signup ? <div>{admin ? <h1 className='text-warning text-center mb-4' style={{ fontWeight: "bold", fontFamily: "fangsong" }}>Signup</h1> :
                            <h1 className='text-info  text-center mb-4' style={{ fontWeight: "bold", fontFamily: "fangsong" }}>Signup</h1>}</div> :
                            <div>{admin ? <h1 className='text-warning  text-center mb-4' style={{ fontWeight: "bold", fontFamily: "fangsong" }}>Login</h1> :
                                <h1 className='text-info  text-center mb-4' style={{ fontWeight: "bold", fontFamily: "fangsong" }}>Login</h1>}</div>}

                        {/* input boxes */}
                        {signup && <InputGroup className="mb-3 ">
                            <InputGroup.Text id="inputGroup-sizing-default" className=''>
                                <FontAwesomeIcon icon={faUser} />
                            </InputGroup.Text>
                            <Form.Control
                                aria-label="Default"
                                aria-describedby="inputGroup-sizing-default"
                                placeholder='username'
                                value={authdetails?.username}
                                onChange={(e) => setAuthdetails({ ...authdetails, username: e.target.value })}
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
                                value={authdetails?.email}
                                onChange={(e) => setAuthdetails({ ...authdetails, email: e.target.value })}
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
                                value={authdetails?.password}
                                onChange={(e) => setAuthdetails({ ...authdetails, password: e.target.value })}
                            />
                        </InputGroup>

                        {/* signup/login butons */}
                        {signup ? <div>
                            {admin ? <button onClick={handleadminsignup} className='btn btn-warning'>Signup</button> :
                                <button onClick={handleusersignup} className='btn btn-info'>Signup</button>} <button onClick={handleCancel} className='btn btn-danger ' style={{ float: "right" }} >Cancel</button></div> :
                            <div>{admin ? <button onClick={handleadminlogin} className='btn btn-warning'>Login</button> :
                                <button onClick={handleuserlogin} className='btn btn-info'>Login</button>} <button onClick={handleCancel} className='btn btn-danger ' style={{ float: "right" }} >Cancel</button></div>}

                        {/* links */}
                        {signup ? <div>{admin ? <h5 className='text-light mt-3'>Already have an account <Link to={'/adminlogin'} className='text-warning'>Login</Link> </h5> :
                            <h5 className='text-light mt-3'>Already have an account <Link to={'/userlogin'} className='text-info'>Login</Link> </h5>}</div> :
                            <div> {admin ? <h5 className='text-light mt-3'>Don't have an account <Link to={'/adminsignup'} className='text-warning' >Signup</Link> </h5> :
                                <h5 className='text-light mt-3'>Don't have an account <Link to={'/usersignup'} className='text-info' >Signup</Link> </h5>}</div>}
                    </div>
                    <div className="col-md-3"></div>
                </div>
            </div>
        </>
    )
}

export default Auth