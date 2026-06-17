import React from 'react'
import { Link } from 'react-router-dom'

function Pagenotfound() {
    return (
        <>
            <div className='d-flex flex-column justify-content-center align-items-center' style={{ height: "100vh" }}>
                <h1 id='pagenotfoundmainheading'>Oops!</h1>
                <h5 id='pagenotfoundsubheading'>404 - Page Not Found</h5>
                <Link to={'/'}><button className='btn btn-primary mt-2 px-lg-4 px-3  py-2'>Back to home</button></Link>
            </div>
        </>
    )
}

export default Pagenotfound