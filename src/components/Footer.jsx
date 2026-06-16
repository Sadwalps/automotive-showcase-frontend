import { faEnvelope, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <>
            <div className='container-fluid pt-lg-5 pt-2 pb-lg-5 pb-2 bg-dark text-light'>
                <div className="row">
                    {/* column 1 */}
                    <div className="col-lg-5  col-12 px-lg-1 px-md-5 px-4  d-flex justify-content-center align-items-center flex-column">
                        <h3 style={{ fontWeight: "bold" }}>Automotive showcase</h3>
                        <p >Find your dream car with detailed specifications, performance insights, and the latest automotive updates. Explore a wide range of vehicles from top brands around the world</p>
                    </div>

                    {/* column 2 */}
                    <div className="col-lg-2 col-md-6 col-12 d-flex justify-content-center align-items-center flex-column">
                        <h3 style={{ fontWeight: "bold" }}>Quick Links</h3>
                        <ul className='ps-0 d-flex justify-content-center align-items-center flex-column' style={{ listStyleType: "none" }}> <Link to={'/'} style={{ textDecoration: "none", color:"white" }}><li className='footerlinks'>Home</li></Link>
                            <Link to={'/cardetails'} style={{ textDecoration: "none", color:"white" }}> <li className='footerlinks' >All Cars</li></Link>
                            <Link to={'/favoritecardetails'} style={{ textDecoration: "none" , color:"white" }}>  <li className='footerlinks'>Favorites</li></Link></ul>
                    </div>

                    {/* column 3 */}
                    <div className="col-lg-2 col-md-6 col-12 d-flex justify-content-center align-items-center flex-column">
                        <h3 style={{ fontWeight: "bold" }}>Popular Brands</h3>
                        <ul className='ps-0 d-flex justify-content-center align-items-center flex-column' style={{ listStyleType: "none" }}><li>Ferrari</li>
                            <li >Lamborghini</li>
                            <li>Bugatti</li>
                        </ul>
                    </div>

                    {/* column 4 */}
                    <div className="col-lg-3 col-12 d-flex justify-content-center align-items-center flex-column">
                        <h3 style={{ fontWeight: "bold" }}>Conatct Info</h3>
                        <ul className='ps-0 d-flex justify-content-center align-items-center flex-column' style={{ listStyleType: "none" }}><li> <FontAwesomeIcon icon={faLocationDot} /> Kerala, Thrissur</li>
                            <li ><FontAwesomeIcon icon={faPhone} /> 91 xxxxxxxxxx</li>
                            <li><FontAwesomeIcon icon={faEnvelope} /> automotiveshowcase.com</li></ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer