import React from 'react'
import Header from '../components/Header'
import Carousel from 'react-bootstrap/Carousel';


function Home() {
  return (
    <>
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
              <button className='btn btn-danger px-lg-5 px-2 py-2'>Add Car</button>
            </Carousel.Caption>
          </Carousel.Item>
          {/* carousel item 2 */}
          <Carousel.Item interval={500}>
            <div className='carouselimage2'>
            </div>
            <Carousel.Caption>
              <h5 className='carouselmainheading'>Built for Car Lovers</h5>
              <h6 className='carouselsubheading'>Browse iconic cars, compare performance, and save the ones you love</h6>
              <button className='btn btn-warning px-lg-5 px-2 py-2'>Add Car</button>
            </Carousel.Caption>
          </Carousel.Item>
          {/* carousel item 3 */}
          <Carousel.Item>
            <div className='carouselimage3'>
            </div>

            <Carousel.Caption>
              <h5 className='carouselmainheading'>Discover Your Dream Car</h5>
              <h6 className='carouselsubheading'>Explore detailed specs, save favorites, and build your ultimate garage</h6>
              <button className='btn btn-primary px-lg-5 px-2 py-2'>Add Car</button>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>

      {/* section 2 */}
      <div className='container-fluid mt-lg-4 mt-2 mb-lg-5 mb-3'>
        <div className="row">
          <div className="col-md-2"></div>
          <div className="col-md-8">
            <div className="row">
              <div className="col-md-4 homecarmaincard">
                <div className='homecarcard' >
<img src="https://tse3.mm.bing.net/th/id/OIP.l9bZFUj96uX7vw8YQuUcqgHaEK?r=0&rs=1&pid=ImgDetMain&o=7&rm=3" alt="" className='w-100' />
                </div>
                <div className='bg-danger homecarhovercard w-100'>
                   <h2>sdkla</h2>
                </div>
              </div>
              <div className="col-md-4"></div>
              <div className="col-md-4"></div>
            </div>
          </div>
          <div className="col-md-2"></div>
        </div>

      </div>
    </>
  )
}

export default Home