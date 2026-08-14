import React, { useEffect, useState } from 'react'
import Header from './Header'
import { Link, useParams } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRotateLeft } from '@fortawesome/free-solid-svg-icons'
import { getallcardetailsApi } from '../service/allApi'


function Singlecardetails() {
    const { id } = useParams();
    console.log(id);

    const [allcardetails, setAllcardetails] = useState([])


    const getallcars = async () => {
        const result = await getallcardetailsApi()
        console.log(result);
        setAllcardetails(result.data)
    }
    console.log(allcardetails);

    const singlecardetails =  allcardetails?.find(item => item.id == id)


    useEffect(() => {
        getallcars()
    }, [])


    return (
        <>
            <Header />
            <div className='singlecardetailsherosection d-flex justify-content-center align-items-center' style={{}}>
                <div className="container-fluid ">
                    <div className="row">
                        <div className="col-8  ps-2 text-light" style={{ fontWeight: "bold" }}>
                            <h1 className=' ps-lg-5 ps-2'>{singlecardetails?.carname}</h1>
                            <h3 className='ps-lg-5 ps-2'>{singlecardetails?.category}</h3>
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
                                <img src={singlecardetails?.imgurl} alt="" className='w-100 shadow' />
                            </div>
                            <div className="col-md-6 d-flex flex-column justify-content-center align-items-center">
                                <h2 className='' style={{ fontWeight: "bold" }} >{singlecardetails?.carname}</h2>
                                <h3 className='singlecardetailstext'> <span style={{ fontWeight: "bold" }}>Brand:</span> {singlecardetails?.brand} </h3>
                                <h3 className='singlecardetailstext'><span style={{ fontWeight: "bold" }}>Category:</span> {singlecardetails?.category}</h3>
                                <h3 className='singlecardetailstext'><span style={{ fontWeight: "bold" }}>Horsepower:</span> {singlecardetails?.horsepower}</h3>
                                <h3 className='singlecardetailstext'><span style={{ fontWeight: "bold" }}>Top Speed:</span> {singlecardetails?.topspeed}</h3>
                                <h3 className='singlecardetailstext'><span style={{ fontWeight: "bold" }}>Engine:</span> {singlecardetails?.engine}</h3>
                            </div>
                        </div>
                        <p className='mt-4 singlecardetailstext2'>{singlecardetails?.description}</p>
                    </div>
                    <div className="col-md-1"></div>
                </div>
            </div>

            <Link to={'/cardetails'}><button className=' me-3 mb-3 btn btn-secondary py-lg-3 py-2 px-lg-3 px-2 fs-4' style={{ float: "right" }}><FontAwesomeIcon icon={faRotateLeft} /></button></Link>
        </>
    )
}

export default Singlecardetails