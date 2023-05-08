import React, { useState } from 'react';
import BreadCrumb from '../components/BreadCrumb';
import Meta from '../components/Meta';
import ProductCard from '../components/ProductCard';
import ReactStars from "react-rating-stars-component";
import ReactImageZoom from 'react-image-zoom';
import Color from '../components/Color';
import Container from '../components/Container';



const SingleProduct = () => {
  const [orderedProduct, setorderedProduct] = useState(true);
  const props = {width: 400, height: 600, zoomWidth: 600, img: "https://images.unsplash.com/photo-1497377825569-02ad2f9edb81?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1789&q=80"};
  const copyToClipboard = (text) => {
    console.log('text', text)
    var textField = document.createElement('textarea')
    textField.innerText = text
    document.body.appendChild(textField)
    textField.select()
    document.execCommand('copy')
    textField.remove()
  }

  return (
    <>
      <Meta title={"Product Name"} />
      <BreadCrumb title={"Product Name"} />

      <Container class1="main-product-wrapper py-5 home-wrapper-2">
          <div className="row">
            <div className="col-6">
              <div className="main-product-image">
                <div>
                  <ReactImageZoom {...props} />
                </div>
              </div>
              <div className="other-product-images d-flex flex-wrap gap-15">
                <div><img src="https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80" className='img-fluid' alt="" /></div>
                <div><img src="https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80" className='img-fluid' alt="" /></div>
                <div><img src="https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80" className='img-fluid' alt="" /></div>
                <div><img src="https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80" className='img-fluid' alt="" /></div>
              </div>
            </div>
            <div className="col-6">
              <div className="main-product-details">
                <div className='border-bottom'>
                  <h3 className='title'>iphone 13. Explore New World of Technology</h3>
                </div>
                <div className="border-bottom py-3">
                  <p className="price">
                    $800
                  </p>
                  <div className="d-flex align-items-center gap-10">
                    <ReactStars
                      count={5}
                      size={24}
                      value={5}
                      edit={false}
                      activeColor="#ffd700"
                    />
                    <p className='mb-0 t-review'>(2 Reviews) </p>
                  </div>
                  <a className='review-btn' href="#review">Write a Review</a>
                </div>
                <div className=" py-3">
                  <div className='d-flex gap-10 align-items-center my-2'>
                    <h3 className='product-heading'>Type : </h3> <p className='product-data'>Watch</p>
                  </div>
                  <div className='d-flex gap-10 align-items-center my-2'>
                    <h3 className='product-heading'>Brand : </h3> <p className='product-data'>Apple</p>
                  </div>
                  <div className='d-flex gap-10 align-items-center my-2'>
                    <h3 className='product-heading'>Category : </h3> <p className='product-data'>Pro Series</p>
                  </div>
                  <div className='d-flex gap-10 align-items-center my-2'>
                    <h3 className='product-heading'>Tags : </h3> <p className='product-data'>Watch</p>
                  </div>
                  <div className='d-flex gap-10 align-items-center my-2'>
                    <h3 className='product-heading'>Availability : </h3> <p className='product-data'>In Stock</p>
                  </div>
                  <div className='d-flex gap-10 flex-column mt-2 mb-3'>
                    <h3 className='product-heading'>Size : </h3>
                    <div className="d-flex flex-wrap gap-15">
                      <span className="badge border-1 bg-white text-dark border-secondary border">S</span>
                      <span className="badge border-1 bg-white text-dark border-secondary border">M</span>
                      <span className="badge border-1 bg-white text-dark border-secondary border">L</span>
                      <span className="badge border-1 bg-white text-dark border-secondary border">XL</span>


                    </div>
                  </div>
                  <div className='d-flex gap-10 flex-column mt-2 mb-3'>
                    <h3 className='product-heading'>Color : </h3> <Color />
                  </div>
                  <div className='d-flex align-items-center gap-15 flex-row mt-2 mb-3'>
                    <h3 className='product-heading'>Quantity : </h3>
                    <div className="">
                      <input type="number" name="" min={1} max={10} className='form-control' style={{ width: "70px" }} id="" />
                    </div>
                    <div className='d-flex align-items-center gap-30 ms-5'>
                      <button className="button border-0" type='submit'>Add to Cart</button>
                      <button className="signup button">Buy It Now</button>
                    </div>
                  </div>
                  <div className="d-flex align-items-center gap-15">
                    <div><a href=""><i className="fs-5 me-2 fa-solid fa-shuffle"></i>  Add to Compare</a></div>
                    <div> <a href=""><i className="fs-5 me-2 fa-regular fa-heart"></i> Add to Wishlist</a></div>
                  </div>
                  <div className='d-flex gap-10 flex-column my-3'>
                    <h3 className='product-heading'>Shipping & Returns :</h3> <p className='product-data'>Free Shipping and returns available on all orders! <br />We ship all US domestic orders within <b>5-10 business days!</b></p>
                  </div>
                  <div className='d-flex gap-10 align-items-center my-2'>
                    <h3 className='product-heading'>Copy Product Link :</h3> 
                    <a href="javascript:void(0)" onClick={()=>{copyToClipboard("https://youtu.be/-dz0BauvdnA")}}>
                    https://youtu.be/-dz0BauvdnA
                    </a>
                  </div>


                </div>
              </div>
            </div>
          </div>
        </Container>

      <Container class1="description-wrapper py-5 home-wrapper-2">
          <div className="row">
            <div className="col-12">
              <h4>Desricption</h4>
              <div className="bg-white p-3">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis ratione voluptas iste et, quod sed, totam possimus cupiditate similique explicabo, quam omnis nostrum illum fugiat eos quas ullam doloremque aspernatur!
                </p>
              </div>
            </div>
          </div>
      </Container>

      <Container class1="reviews-wrapper home-wrapper-2">
          <div className="row">
            <div className="col-12">
              <h3 id='review'>Reviews</h3>
              <div className="review-inner-wrapper">
                <div className="review-head d-flex justify-content-between align-items-end">
                  <div>
                    <h4 className='mb-2'>Customer Reviews</h4>
                    <div className='d-flex gap-10 '>
                      <ReactStars
                        count={5}
                        size={24}
                        value={5}
                        edit={false}
                        activeColor="#ffd700"
                      />
                      <p className='mb-0'>Based on 2 Reviews</p>
                    </div>
                  </div>
                  {orderedProduct && <div>
                    <a href="" className='text-dark text-decoration-underline'> Write a Review</a>
                  </div>}
                </div>
                <div id='review' className="review-form py-4">
                  <h4>Write a Review</h4>
                  <form action="" className='d-flex flex-column gap-15'>
                    <div> <ReactStars
                      count={5}
                      size={24}
                      value={4}
                      edit={true}
                      activeColor="#ffd700"
                    /></div>
                    <div>
                      <textarea name="" className='w-100 form-control' id="" cols="30" rows="4" placeholder='Comments...'></textarea>
                    </div>
                    <div className='d-flex justify-content-end'>
                      <button className='button border-0'>Submit</button>
                    </div>
                  </form>
                </div>
                <div className="reviews mt-4">
                  <div className="review">
                    <div className="d-flex gap-10 align-items-center">
                      <h6 className='mb-0'>Stanley Smith</h6>
                      <ReactStars
                        count={5}
                        size={24}
                        value={4}
                        edit={false}
                        activeColor="#ffd700"
                      />
                    </div>
                    <p className='mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit eius dignissimos exercitationem quos ipsam provident praesentium! Distinctio nisi vero fugiat quia ratione placeat doloremque veniam natus numquam officiis. Autem, quisquam!</p>
                  </div>
                </div>
              </div>
            </div>
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


          </div>
      </Container>

    </>
  )
}

export default SingleProduct