import React from 'react'
import Header from './Header'

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

            <div className="container-fluid mt-lg-5 mt-3 pt-lg-5 pt-3 mb-lg-5 mb-3 pb-lg-5 pb-3">
                <div className="row">
                    <div className="col-md-1"></div>
                    <div className="col-md-10">
                        <div className="row">
                            <div className="col-md-6">
                                <img src="https://tse2.mm.bing.net/th/id/OIP._wCQkgQoiNaHD28LRIR4DQHaEK?r=0&rs=1&pid=ImgDetMain&o=7&rm=3" alt="" className='w-100 shadow' />
                            </div>

                            <div className="col-md-6 d-flex flex-column justify-content-center align-items-center">
                                <h2 className=''>lamborghini huracan</h2>
                                <h3 className='singlecardetailstext'>Brand:lamborghini</h3>
                                <h3 className='singlecardetailstext'>Category:lamborghini</h3>
                                <h3 className='singlecardetailstext'>Horsepower:lamborghini</h3>
                                <h3 className='singlecardetailstext'>Top Speed:lamborghini</h3>
                                <h3 className='singlecardetailstext'>Engine:lamborghini</h3>


                            </div>
                        </div>
                        <p className='mt-4 singlecardetailstext2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae vitae velit minus numquam dolores maiores quam, deleniti cum, dignissimos accusantium inventore doloribus a nemo repellat ipsa voluptas. Quis, iusto rerum!</p>
                    </div>
                    <div className="col-md-1"></div>
                </div>
            </div>
        </>
    )
}

export default Singlecardetails