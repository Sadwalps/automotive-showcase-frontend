import React, { useContext, useEffect } from 'react'
import Header from '../components/Header'
import Carousel from 'react-bootstrap/Carousel';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp, faCar, faFire, faFlag, faMaximize, faRightLong, faSquarePollHorizontal } from '@fortawesome/free-solid-svg-icons';
import Viewimagemodal from '../components/Viewimagemodal';
import Footer from '../components/Footer';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Link } from 'react-router-dom';
import { loginResponseContext } from '../context/ContextShare';

function Home() {
  const { loginResponse } = useContext(loginResponseContext)
  const [show, setShow] = useState(false);
  const [carDetails, setCarDetails] = useState({
    carname: "",
    brand: "",
    category: "",
    horepower: "",
    topspeed: "",
    engine: "",
    imgurl: ""
  })
  console.log(carDetails);

  const handleClose = () => {
    setShow(false);
    handleCancel()
  }
  const handleShow = () => setShow(true);

  const handleCancel = () => {
    setCarDetails({
      carname: "",
      brand: "",
      category: "",
      horepower: "",
      topspeed: "",
      engine: "",
      imgurl: ""
    })
  }

  return (
    <>
      {/* section 1 */}
      <div style={{ position: "sticky", top: "1px", zIndex: "2" }}>
        <Header />
      </div>
      <div className='text-primary fs-1' style={{}}>

        <Carousel >
          {/* carousel item 1 */}
          <Carousel.Item interval={1000} >
            <div className='carouselimage1'>
            </div>
            <Carousel.Caption style={{ textAlign: "top" }}>

              <h5 className='carouselmainheading'>Discover Your Dream Car</h5>
              <h6 className='carouselsubheading'>Explore detailed specs, save favorites, and build your ultimate garage</h6>
              {loginResponse == true ? <button onClick={handleShow} className='btn btn-danger px-lg-5 px-2 py-2'>Add Car</button> :
                <Link to={'/userrole'}> <button className='btn btn-info px-lg-5 px-3 py-2 fs-5'>  start  <FontAwesomeIcon icon={faRightLong} className='ms-2 ' /> </button></Link>}
            </Carousel.Caption>
          </Carousel.Item>
          {/* carousel item 2 */}
          <Carousel.Item interval={500}>
            <div className='carouselimage2'>
            </div>
            <Carousel.Caption>
              <h5 className='carouselmainheading'>Built for Car Lovers</h5>
              <h6 className='carouselsubheading'>Browse iconic cars, compare performance, and save the ones you love</h6>
              {loginResponse == true ? <button onClick={handleShow} className='btn btn-warning px-lg-5 px-2 py-2'>Add Car</button> :
                <Link to={'/userrole'}> <button className='btn btn-info px-lg-5 px-3 py-2 fs-5'>  start  <FontAwesomeIcon icon={faRightLong} className='ms-2 ' /> </button></Link>}
            </Carousel.Caption>
          </Carousel.Item>
          {/* carousel item 3 */}
          <Carousel.Item>
            <div className='carouselimage3'>
            </div>

            <Carousel.Caption>
              <h5 className='carouselmainheading'>Discover Your Dream Car</h5>
              <h6 className='carouselsubheading'>Explore detailed specs, save favorites, and build your ultimate garage</h6>
              {loginResponse == true ? <button onClick={handleShow} className='btn btn-primary px-lg-5 px-2 py-2'>Add Car</button> :
                <Link to={'/userrole'}> <button className='btn btn-info px-lg-5 px-3 py-2 fs-5'>  start  <FontAwesomeIcon icon={faRightLong} className='ms-2 ' /> </button></Link>}
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>

        {/* modal for add car details (for admins) */}
        <Modal show={show} onHide={handleClose} className='m-0' size='lg' centered>
          <Modal.Header closeButton className='bg-dark w-100'>
            <Modal.Title className='text-light w-100'><h2 className='text-center'>Add Car Details</h2></Modal.Title>
          </Modal.Header>
          <Modal.Body className='bg-dark'>
            <input value={carDetails.carname} onChange={(e) => setCarDetails({ ...carDetails, carname: e.target.value })} type="text" className='form-control py-lg-2 py-1 text-center' placeholder='Car Name' />
            <input value={carDetails.brand} onChange={(e) => setCarDetails({ ...carDetails, brand: e.target.value })} type="text" className='form-control py-lg-2 py-1 text-center mt-2' placeholder='Car Brand' />
            <input value={carDetails.category} onChange={(e) => setCarDetails({ ...carDetails, category: e.target.value })} type="text" className='form-control py-lg-2 py-1 text-center mt-2' placeholder='Category' />
            <div>
              <div className="row">
                <div className="col-lg-6 col-md-6 col-12"> <input value={carDetails.horepower} onChange={(e) => setCarDetails({ ...carDetails, horepower: e.target.value })} type="text" className='form-control py-lg-2 py-1 text-center mt-2' placeholder='Horsepower' /></div>
                <div className="col-lg-6 col-md-6 col-12"> <input value={carDetails.topspeed} onChange={(e) => setCarDetails({ ...carDetails, topspeed: e.target.value })} type="text" className='form-control py-lg-2 py-1 text-center mt-2' placeholder='Top Speed' /></div>
              </div>
            </div>
            <input value={carDetails.engine} onChange={(e) => setCarDetails({ ...carDetails, engine: e.target.value })} type="text" className='form-control py-lg-2 py-1 text-center mt-2' placeholder='Engine' />
            <input value={carDetails.imgurl} onChange={(e) => setCarDetails({ ...carDetails, imgurl: e.target.value })} type="text" className='form-control py-lg-2 py-1 text-center mt-2' placeholder='Car Image Url' />
          </Modal.Body>
          <Modal.Footer className='bg-dark'>
            <Button variant="secondary" onClick={handleCancel}>
              Cancel
            </Button>
            <Button variant="light" onClick={handleClose}>
              Add
            </Button>
          </Modal.Footer>
        </Modal>
      </div>

      {/* section 2 */}
      <div className='container-fluid mt-lg-4 mt-2 mb-lg-5 mb-3'>
        <div className="row">
          <div className="col-md-2"></div>
          <div className="col-md-8">
            <div className="row">
              <div className="col-md-4 d-flex justify-content-center   homecarmaincard">
                <div className='homecarcard ' >
                  <img src="https://tse3.mm.bing.net/th/id/OIP.l9bZFUj96uX7vw8YQuUcqgHaEK?r=0&rs=1&pid=ImgDetMain&o=7&rm=3" alt="" className='w-100' />
                </div>
                {/* card that appears only when we mouse hover on it */}
                <div className='homecarhovercard d-flex    flex-column justify-content-center align-items-center'>

                  <div className='d-flex justify-content-center gap-3'>
                    <Viewimagemodal />
                    <button className='homecarhovercardbtns  px-2 py-1 fs-lg-4  fs-5'>
                      <FontAwesomeIcon icon={faAngleUp} />
                    </button>
                  </div>

                </div>
              </div>
              <div className="col-md-4"></div>
              <div className="col-md-4"></div>
            </div>
          </div>
          <div className="col-md-2"></div>
        </div>

      </div>

      {/* section 3 */}
      <div className='mt-lg-5 mt-3 mb-lg-5 mb-3 pt-lg-5 pt-3 pb-lg-5 pb-2 container-fluid ' style={{ backgroundColor: "rgb(230, 226, 226)" }}>
        <div className="row">
          <div className="col-md-1"></div>
          <div className="col-md-10">
            {/* row for the contents */}
            <div className="row lg-mt-5 lg-mb-5 mt-1 mb-1 pt-lg-4 pt-1 pb-lg-4 pb-1">
              <div className="col-lg-3 col-md-6 col-12 d-flex justify-content-center align-items-center flex-column mt-2">
                <FontAwesomeIcon icon={faSquarePollHorizontal} className='fa-4x mb-2 featurelogos' />
                <h2 className='' style={{ fontWeight: "bold" }}>
                  Result Driven
                </h2>
                <p className='text-center'>Engineered to deliver outstanding performance, percision, and reliability on every journey.Build to achieve expectional results whether on city roads or open highways. </p>
              </div>
              <div className="col-lg-3 col-md-6 col-12 d-flex justify-content-center align-items-center flex-column mt-2">
                <FontAwesomeIcon icon={faCar} className='fa-4x  mb-2 featurelogos' />
                <h2 className='' style={{ fontWeight: "bold" }}>
                  Proven Technology
                </h2>
                <p className='text-center'>Equipped with advanced automotive technology tested for safety, efficiency, and durability. Every feature is designed to enhance the driving experience and ensure dependable performance.</p>
              </div>
              <div className="col-lg-3 col-md-6 col-12 d-flex justify-content-center align-items-center flex-column mt-2">
                <FontAwesomeIcon icon={faFlag} className='fa-4x  mb-2 featurelogos' />
                <h2 className='' style={{ fontWeight: "bold" }}>
                  Winning Culture
                </h2>
                <p className='text-center'>Created with a legacy of innovation, excellence, and a passion for driving. Designed to inspire confidence and set new standards in the automotive world.</p>
              </div>
              <div className="col-lg-3 col-md-6 col-12 d-flex justify-content-center align-items-center flex-column mt-2">
                <FontAwesomeIcon icon={faFire} className='fa-4x  mb-2 featurelogos' />
                <h2 className='' style={{ fontWeight: "bold" }}>
                  Top Performance
                </h2>
                <p className='text-center'>Powered to provide impressive speed, responsive handling, and smooth acceleration. Built for drivers who demand exceptional performance without compromising comfort.</p>
              </div>
            </div>
          </div>
          <div className="col-md-1"></div></div>
      </div>

      < Footer />
    </>
  )
}

export default Home