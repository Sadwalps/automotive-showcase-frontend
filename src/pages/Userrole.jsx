import { faBlackTie } from '@fortawesome/free-brands-svg-icons'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

function Userrole() {
    return (
        <>



            <div className=' container-fluid bg-dark'>
                <div className="row">
                    <div className="col-md-2"></div>

                    <div className="userrolepage col-md-8 d-flex flex-column justify-content-center align-item-center">
                        <h1 className='text-light text-center mb-5'>Select Your Role</h1>
                        <div className='container-fluid'>
                            <div className="row ">
                                <div className="col-lg-6 col-md-6 col-sm-6 col-12 d-flex  justify-content-center mt-1"> <button className='d-flex flex-column btn btn-warning p-lg-4 p-2'>
                                <FontAwesomeIcon icon={faBlackTie} className='fa-6x' />
                                <h2>Admin</h2>
                            </button></div>
                                <div className="col-lg-6 col-md-6 col-sm-6 col-12 d-flex  justify-content-center mt-lg-1 mt-md-1 mt-sm-1 mt-4" > <button className='d-flex flex-column btn btn-info p-lg-4 p-2 '>
                                <FontAwesomeIcon icon={faUser} className='fa-6x ' />
                                <h2>User</h2>
                            </button></div>
                            </div>
                           
                           
                        </div>


                    </div>
                    <div className="col-md-2"></div>
                </div>

            </div>

        </>
    )
}

export default Userrole