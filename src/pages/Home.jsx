import React from 'react'
import Header from '../components/Header'
import Carousel from 'react-bootstrap/Carousel';


function Home() {
  return (
    <>
    <Header/>
    <div className='text-primary fs-1' style={{}}>
       <Carousel>
      <Carousel.Item interval={1000}>
        <img className='w-100' src="https://images.hdqwalls.com/download/ferrari-sf90-xx-stradale-95-3440x1440.jpg" alt="" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img className='w-100' src="https://images.hdqwalls.com/download/ferrari-sf90-xx-stradale-95-3440x1440.jpg" alt="" />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
         <img className='w-100' src="https://images.hdqwalls.com/download/ferrari-sf90-xx-stradale-95-3440x1440.jpg" alt="" />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
    </>
  )
}

export default Home