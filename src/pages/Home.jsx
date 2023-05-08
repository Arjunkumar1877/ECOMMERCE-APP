import React from 'react'
import { Link } from 'react-router-dom';
import Marquee from "react-fast-marquee";
import BlogCard from '../components/BlogCard';
import ProductCard from '../components/ProductCard';
import SpecialProduct from '../components/SpecialProduct';
import Container from '../components/Container';
import { services } from './Utils/Data';

const Home = () => {
  return (
    <>
    <Container class1='home-wrapper-1 py-5'>
    <div className="row">
            <div className="col-6">
              <div className="main-banner position-relative text-white">
              <img src="img/xs1.jpg" className='img-fluid rounded-3' alt="mainBanner" />
                <div className="main-banner-content position-absolute">
                  <h4>SUPERCHARCHED FOR PROS</h4>
                  <h5 style={{color: "black"}}>iphone xs Max</h5>
                  <p>
                    From $899 or $35.74/mo.</p>
                  <Link className='button'>BUY NOW</Link>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="d-flex gap-10 flex-wrap justify-content-between align-items-center">
                <div className="small-banner position-relative ">
                  <img src="img/11pro.avif" className='img-fluid rounded-3' alt="mainBanner" />
                  <div className="small-banner-content position-absolute">
                    <h4 style={{color: 'wheat'}}>SUPERCHARCHED FOR PROS</h4>
                    <h5 style={{color: 'white'}}>iphone 11 Pro Max</h5>
                    <p style={{color: 'white'}}>From $899 <br />  $35.74/mo.</p>
                  </div>
                </div>

                <div className="small-banner position-relative">
                  <img src="img/11pro.avif" className='img-fluid rounded-3' alt="mainBanner" />
                  <div className="small-banner-content position-absolute">
                    <h4 style={{color: 'wheat'}}>SUPERCHARCHED FOR PROS</h4>
                    <h5 style={{color: 'white'}}>iphone 11 Pro Max</h5>
                    <p style={{color: 'white'}}>From $899 <br />  $35.74/mo.</p>
                  </div>
                </div>

                <div className="small-banner position-relative">
                  <img src="img/11pro.avif" className='img-fluid rounded-3' alt="mainBanner" />
                  <div className="small-banner-content position-absolute">
                    <h4 style={{color: 'wheat'}}>SUPERCHARCHED FOR PROS</h4>
                    <h5 style={{color: 'white'}}>iphone 11 Pro Max</h5>
                    <p style={{color: 'white'}}>From $899 <br />  $35.74/mo.</p>
                  </div>
                </div>

                <div className="small-banner position-relative">
                  <img src="img/11pro.avif" className='img-fluid rounded-3' alt="mainBanner" />
                  <div className="small-banner-content position-absolute">
                    <h4 style={{color: 'wheat'}}>SUPERCHARCHED FOR PROS</h4>
                    <h5 style={{color: 'white'}}>iphone 11 Pro Max</h5>
                    <p style={{color: 'white'}}>From $899 <br />  $35.74/mo.</p>
                  </div>
                </div>

              </div>
            </div>
          </div>
    </Container>

    <Container class1='home-wrapper-2 py-5'>
    <div className="row">
            <div className="col-12">
              <div className="services d-flex align-items-center justify-content-between">

              {
                services.map((i,j)=>{
                  return(
                    <div className="d-flex align-items-center gap-15" key={ j }>
                   <img src={i.image} alt="" className='img-fluid' />
                    <div>
                      <h6>{ i.title }</h6>
                      <p className="mb-0">{ i.tagline }</p>
                    </div>
                  </div> 
                  )
                })
              }
               
              </div>
            </div>
          </div>
    </Container>

    <Container class1='home-wrapper-2 py-5'>
    <div className="row">
          <div className="col-12">
            <div className="categories d-flex justify-content-between flex-wrap align-items-center">

           
            <div className='d-flex  align-items-center'>
               <div>
                <h6>Cameras</h6>
                <p>10 Items</p>
                </div>
                <img src="img/images.jpg" alt="" style={{width:"150px"}} />
             </div>



             <div className='d-flex  align-items-center'>
               <div>
                <h6>Cameras</h6>
                <p>10 Items</p>
                </div>
                <img src="img/images.jpg" alt="" style={{width:"150px"}} />
             </div>

            
             <div className='d-flex  align-items-center'>
               <div>
                <h6>Cameras</h6>
                <p>10 Items</p>
                </div>
                <img src="img/images.jpg" alt="" style={{width:"150px"}} />
             </div>

             
             <div className='d-flex  align-items-center'>
               <div>
                <h6>Cameras</h6>
                <p>10 Items</p>
                </div>
                <img src="img/images.jpg" alt="" style={{width:"150px"}} />
             </div>

             
           
            <div className='d-flex  align-items-center'>
               <div>
                <h6>Cameras</h6>
                <p>10 Items</p>
                </div>
                <img src="img/images.jpg" alt="" style={{width:"150px"}} />
             </div>



             <div className='d-flex  align-items-center'>
               <div>
                <h6>Cameras</h6>
                <p>10 Items</p>
                </div>
                <img src="img/images.jpg" alt="" style={{width:"150px"}} />
             </div>

            
             <div className='d-flex  align-items-center'>
               <div>
                <h6>Cameras</h6>
                <p>10 Items</p>
                </div>
                <img src="img/images.jpg" alt="" style={{width:"150px"}} />
             </div>

             
             <div className='d-flex  align-items-center'>
               <div>
                <h6>Cameras</h6>
                <p>10 Items</p>
                </div>
                <img src="img/images.jpg" alt="" style={{width:"150px"}} />
             </div>


            </div>
          </div>
        </div>
    </Container>

    <Container class1='featured-wrapper py-5 home-wrapper-2'>
    <div className="row">
            <div className="col-12">
              <h3 className="section-heading">Featured Collection</h3>
            </div>
           <ProductCard />
           <ProductCard />
           <ProductCard />
           <ProductCard />
           {/* <ProductCard />
           <ProductCard /> */}
          </div>
    </Container>

    <Container class1='famous-wrapper py-5 home-wrapper-2'>
    <div className="row">
          <div className="col-3">
            <div className="famous-card position-relative">
              <img src="img/14proo.avif" alt="" className='img-fluid' style={{borderRadius: '10px'}}  />
             <div className="famous-content position-absolute">
             <h5>Big Screen</h5>
              <h6>iphone 14 pro</h6>
              <p>From $1200 or $35.67/mo for 24 mo.*</p>
             </div>
            </div>
          </div>

          <div className="col-3">
            <div className="famous-card position-relative">
              <img src="img/14proo.avif" alt="" className='img-fluid' style={{borderRadius: '10px'}}  />
             <div className="famous-content position-absolute">
             <h5>Big Screen</h5>
              <h6>iphone 14 pro</h6>
              <p>From $1200 or $35.67/mo for 24 mo.*</p>
             </div>
            </div>
          </div>

          <div className="col-3">
            <div className="famous-card position-relative">
              <img src="img/14proo.avif" alt="" className='img-fluid' style={{borderRadius: '10px'}}  />
             <div className="famous-content position-absolute">
             <h5>Big Screen</h5>
              <h6>iphone 14 pro</h6>
              <p>From $1200 or $35.67/mo for 24 mo.*</p>
             </div>
            </div>
          </div>

          <div className="col-3">
            <div className="famous-card position-relative">
              <img src="img/14proo.avif" alt="" className='img-fluid' style={{borderRadius: '10px'}}  />
             <div className="famous-content position-absolute">
             <h5>Big Screen</h5>
              <h6>iphone 14 pro</h6>
              <p>From $1200 or $35.67/mo for 24 mo.*</p>
             </div>
            </div>
          </div>


        </div>
    </Container>

      <Container class1="special-wrapper py-5 home wrapper">
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading">Special Products</h3>
            </div>
          </div>
          <div className="row">
            <SpecialProduct />
            <SpecialProduct />
            <SpecialProduct />
            <SpecialProduct />
          </div>
      </Container>

      <Container class1="popular-wrapper py-5 home-wrapper-2">
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading">Our Popular Products</h3>
            </div>
          </div>
          <div className="row">
          <ProductCard />
           <ProductCard />
           <ProductCard />
           <ProductCard />
           
          </div>

      </Container>

      <Container class1="marque-wrapper py-5">
        <div className="row">
          <div className="col-12">
            <div className="marquee-inner-wrapper card-wrapper">
            <Marquee>

  <div className="mx-4 w-25">
    <img src="img/brand.png" alt="brand"  style={{width: "100px",color:"blue"}} />
  </div>
  
  <div className="mx-4 w-25">
    <img src="img/brand2.webg" alt="brand"  style={{width: "100px"}} />
  </div>

  <div className="mx-4 w-25">
    <img src="img/brand3.png" alt="brand"  style={{width: "100px"}} />
  </div>
  
  <div className="mx-4 w-25">
    <img src="img/brand4.png" alt="brand"  style={{width: "100px"}} />
  </div>

  <div className="mx-4 w-25">
    {/* <img src="img/brand5.png" alt="brand"  style={{width: "100px"}} /> */}
    <i className="fa-brands fa-apple" style={{fontSize:"80px"}}></i>
  </div>
  
  <div className="mx-4 w-25">
    <img src="img/brand6.webg" alt="brand"  style={{width: "100px"}} />
  </div>

  <div className="mx-4 w-25">
    <img src="img/brand7.jpg" alt="brand"  style={{width: "100px"}} />
  </div>
  
  <div className="mx-4 w-25">
    {/* <img src="img/brand.webg" alt="brand"  style={{width: "100px"}} /> */}
    <i className="fa-brands fa-android" style={{fontSize: "70px",color: "green"}}></i>
  </div>


  
</Marquee>
            </div>
          </div>
        </div>
      </Container>

      
      <Container class1="blog-wrapper py-5 home-wrapper-2">
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading">Our Latest Blogs</h3>
            </div>
          
          </div>
          <div className="row">
            <div className="col-3">
            <BlogCard />
            </div>
            <div className="col-3">
            <BlogCard />
            </div>
            <div className="col-3">
            <BlogCard />
            </div>
            <div className="col-3">
            <BlogCard />
            </div>
          </div>
      </Container>
    </>
  )
}

export default Home
