import React from 'react'
import Header from './Header'

function Cardetails() {
  return (
    <>
    <Header/>
    <div className='cardetailsherosection' style={{}}>
     <div className="container-fluid">
      <div className="row">
        <div className="col-8 pt-5 ps-2 text-light" style={{fontWeight:"bold"}}>
          <h1 className='pt-5 ps-lg-5 ps-2'>All Cars</h1>
          <h3 className='ps-lg-5 ps-2'>Search your favorate cars</h3>
        </div>
        <div className="col-4">
        </div>
      </div>
     </div>
    </div>

    <div className='container-fluid pt-lg-5 pt-3'>
      <div className="row">
        <div className="col-md-6">
          <img src="https://tse3.mm.bing.net/th/id/OIP.JRE3ZGj58ZPQShbvEq9leAHaEK?r=0&rs=1&pid=ImgDetMain&o=7&rm=3" alt="" className='w-100 ' style={{minHeight:"30vh"}} />
        </div>
        <div className="col-md-6">
          <h1>Lamborghini centenario</h1>
          <h3></h3>
        </div>
      </div>

    </div>
    </>
  )
}

export default Cardetails