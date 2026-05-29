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
      <div>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia totam, nobis saepe enim est, maxime, blanditiis quisquam sequi repellendus explicabo praesentium eos provident excepturi. Ad, nemo! Voluptatum iure, recusandae autem velit nostrum dolores aspernatur accusamus saepe officiis veritatis in quam eveniet eos vitae maxime asperiores ratione nihil, consectetur nulla accusantium assumenda? Facere quod blanditiis veniam obcaecati! Quaerat blanditiis iure, id enim illo, similique recusandae sit quam, atque numquam veritatis esse consequatur doloremque quidem dignissimos ab. Exercitationem qui voluptatem corrupti amet tempore! Dolorem quaerat maxime aliquid cupiditate, qui quos doloribus enim fugiat! Asperiores, officia nihil. Enim dolore alias ipsam quae sapiente.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus aliquid dolor, cumque eveniet quod necessitatibus iusto debitis saepe at deserunt, amet sequi, porro ipsum obcaecati magnam atque quas quo tempore doloribus corrupti maxime similique laborum! Ex voluptatibus consectetur enim soluta facilis praesentium amet unde tempore vel dolore? Temporibus unde nulla dolorum maiores vero, tenetur aperiam nam similique aliquam vitae voluptas voluptates dolorem omnis culpa quisquam repudiandae eius deserunt? Nobis unde rem veniam blanditiis, vero quaerat odit dicta dignissimos aspernatur facere doloribus iste est temporibus exercitationem aliquid repellendus eveniet ex alias tempore itaque aperiam cupiditate amet quae? Ipsa aliquam praesentium exercitationem! Quod, expedita dicta? Sequi natus, cupiditate eaque laboriosam nesciunt veritatis excepturi explicabo asperiores vitae unde culpa, enim, beatae pariatur harum mollitia soluta eligendi! Nesciunt iure vero suscipit, illum nulla, nemo impedit quidem reprehenderit ducimus, nam praesentium doloribus quo explicabo modi vel ex accusamus? Necessitatibus distinctio, sequi amet doloribus libero debitis molestias rerum a eos voluptates! Esse velit voluptates natus nam illum accusantium temporibus aspernatur! Veritatis qui nisi optio iure quidem voluptatum dolore tenetur voluptas placeat quasi fugiat non consequuntur harum, vitae, quod maiores quia doloribus temporibus laudantium exercitationem. Reprehenderit facilis quos tenetur consequatur, consectetur porro mollitia vitae minima, facere soluta dolorum quod reiciendis esse. Accusantium at assumenda adipisci labore ullam esse blanditiis aliquid voluptatem animi dolore velit cum aspernatur harum ratione itaque asperiores doloremque, culpa repudiandae ipsam sapiente modi quam, atque natus et. Esse eum aut adipisci expedita cupiditate ullam officia voluptatem facilis quo ipsa, necessitatibus, pariatur doloribus quis aliquid. Eaque quod perspiciatis blanditiis perferendis suscipit qui ea dolor, numquam excepturi veniam consequuntur. Neque quam culpa, earum aperiam ipsa distinctio illo nihil repudiandae eos sit voluptates quasi unde reprehenderit quia fugiat animi accusamus molestias incidunt nobis assumenda molestiae soluta alias suscipit natus? Perferendis iure illum porro quo earum fugiat ducimus vel, placeat labore at illo quod minus qui eaque. Nemo ullam architecto minus recusandae obcaecati quia quis, incidunt, voluptas, error nisi vel vero ea rem facere quidem excepturi. Magni, unde recusandae aperiam nulla ipsa adipisci dolor laudantium quaerat dignissimos, voluptatem nisi est iure sequi consectetur illo ut nam quas accusantium suscipit at, atque esse. Ipsa nihil corporis eum fugiat temporibus iusto modi! Repellat quam sint harum recusandae perferendis possimus culpa, optio aperiam iure nam perspiciatis consequuntur facere vitae blanditiis, necessitatibus delectus. Autem, quis iste ea cupiditate delectus ratione animi? Id fugiat, delectus inventore labore velit tempora neque dicta magnam unde modi veniam, sint possimus ratione commodi, sapiente sed ut. Voluptates quibusdam quisquam cupiditate facere, deleniti reiciendis, repudiandae saepe commodi assumenda laborum suscipit, ipsa optio consectetur laboriosam consequuntur iusto itaque nulla quidem quaerat. Qui deserunt, voluptate, officia provident nam cumque hic possimus eveniet labore quibusdam, perferendis rerum dolores dicta voluptatibus aspernatur omnis laudantium accusantium? Quam excepturi, numquam fugit non aut earum aliquam nobis nemo eum ut ducimus eius aliquid minus vel reprehenderit consectetur saepe, id quis repudiandae et cum. Suscipit ea modi quaerat dolores, cupiditate corrupti neque nam culpa veritatis esse quae ipsam rerum doloribus minus dolorum totam laudantium fugiat sed?
      </div>
    </>
  )
}

export default Home