import React from 'react'
import Header from './Header'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRotateLeft } from '@fortawesome/free-solid-svg-icons'

function Singlecardetails() {
    return (
        <>
            <Header />
            <div className='singlecardetailsherosection d-flex justify-content-center align-items-center' style={{}}>
                <div className="container-fluid ">
                    <div className="row">
                        <div className="col-8  ps-2 text-light" style={{ fontWeight: "bold" }}>
                            <h1 className=' ps-lg-5 ps-2'>All Cars</h1>
                            <h3 className='ps-lg-5 ps-2'>Search your favorate cars</h3>
                        </div>
                        <div className="col-4">
                        </div>
                    </div>
                </div>
            </div>

            {/* car details section */}
            <div className="container-fluid mt-lg-5 mt-3 pt-lg-5 pt-3 mb-lg-3 mb-1 pb-lg-4 pb-2">
                <div className="row">
                    <div className="col-md-1"></div>
                    <div className="col-md-10">
                        <div className="row">
                            <div className="col-md-6">
                                <img src="https://tse2.mm.bing.net/th/id/OIP._wCQkgQoiNaHD28LRIR4DQHaEK?r=0&rs=1&pid=ImgDetMain&o=7&rm=3" alt="" className='w-100 shadow' />
                            </div>
                            <div className="col-md-6 d-flex flex-column justify-content-center align-items-center">
                                <h2 className='' style={{ fontWeight: "bold" }} >lamborghini huracan</h2>
                                <h3 className='singlecardetailstext'> <span style={{ fontWeight: "bold" }}>Brand:</span> lamborghini </h3>
                                <h3 className='singlecardetailstext'><span style={{ fontWeight: "bold" }}>Category:</span> lamborghini</h3>
                                <h3 className='singlecardetailstext'><span style={{ fontWeight: "bold" }}>Horsepower:</span> lamborghini</h3>
                                <h3 className='singlecardetailstext'><span style={{ fontWeight: "bold" }}>Top Speed:</span> lamborghini</h3>
                                <h3 className='singlecardetailstext'><span style={{ fontWeight: "bold" }}>Engine:</span> lamborghini</h3>
                            </div>
                        </div>
                        <p className='mt-4 singlecardetailstext2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae vitae velit minus numquam dolores maiores quam, deleniti cum, dignissimos accusantium inventore doloribus a nemo repellat ipsa voluptas. Quis, iusto rerum!</p>
                    </div>
                    <div className="col-md-1"></div>
                </div>
            </div>

            <Link to={'/cardetails'}><button className=' me-3 mb-3 btn btn-secondary py-lg-3 py-2 px-lg-3 px-2 fs-4' style={{ float: "right" }}><FontAwesomeIcon icon={faRotateLeft} /></button></Link>
        </>
    )
}

export default Singlecardetails