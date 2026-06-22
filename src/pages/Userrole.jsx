import { faBlackTie } from '@fortawesome/free-brands-svg-icons'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

function Userrole() {
  return (
   <>
   <div className='userrolepage conatiner-fluid bg-dark'>
    
    <div className="row">
        <div className="col-md-2"></div>
        <div className="col-md-8 d-flex justify-content-center align-item-center">
            <button className='d-flex flex-column btn btn-warning p-lg-4 p-2'>
                <FontAwesomeIcon icon={faBlackTie}  className='fa-6x'/>
                <h2>Admin</h2>
            </button>
             <button className='d-flex flex-column btn btn-info p-lg-4 p-2'>
                <FontAwesomeIcon icon={faUser} className='fa-6x' />
                <h2>User</h2>
            </button>

        </div>
        <div className="col-md-2"></div>
    </div>
     
   </div>
   </>
  )
}

export default Userrole