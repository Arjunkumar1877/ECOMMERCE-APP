import React from 'react';
import BreadCrumb from '../components/BreadCrumb';
import Meta from '../components/Meta';
import Container from '../components/Container';


const Wishlist = () => {
  return (
    <>
      <Meta title={"Wishlist"} />
      <BreadCrumb title={"Wishlist"} />

      <Container class1="wishlist-wrapper home-wrapper-2 py-5">
          <div className="row">
            <div className="col-3">
              <div className="wishlist-card position-relative">
                <i className="fa-solid fa-xmark cross position-absolute img-fluid"></i>
                <div className="wishlist-card-image">
                  <img src="img/watch1.avif" className='img-fluid' alt="watch" />
                </div>
                <div className='py-3 px-3'>
                  <h5 className="title"> A balanced design supported by a reliable mechanism displays</h5>
                  <h6 className='price'>$ 100</h6>
                </div>
              </div>
                   </div>

                   <div className="col-3">
                     <div className="wishlist-card position-relative">
                     <i className="fa-solid fa-xmark cross position-absolute img-fluid"></i>
                        <div className="wishlist-card-image">
                            <img src="img/watch1.avif" className='img-fluid' alt="watch" />
                        </div>
                        <div  className='py-3 px-3'>
                        <h5 className="title"> A balanced design supported by a reliable mechanism displays</h5>
                        <h6 className='price'>$ 100</h6>
                        </div>
                     </div>
                   </div>

                   <div className="col-3">
                     <div className="wishlist-card position-relative">
                     <i className="fa-solid fa-xmark cross position-absolute img-fluid"></i>
                        <div className="wishlist-card-image">
                            <img src="img/watch1.avif" className='img-fluid' alt="watch" />
                        </div>
                        <div  className='py-3 px-3'>
                        <h5 className="title"> A balanced design supported by a reliable mechanism displays</h5>
                        <h6 className='price'>$ 100</h6>
                        </div>
                     </div>
                   </div>

                   <div className="col-3">
                     <div className="wishlist-card position-relative">
                     <i className="fa-solid fa-xmark cross position-absolute img-fluid"></i>
                        <div className="wishlist-card-image">
                            <img src="img/watch1.avif" className='img-fluid' alt="watch" />
                        </div>
                        <div  className='py-3 px-3'>
                        <h5 className="title"> A balanced design supported by a reliable mechanism displays</h5>
                        <h6 className='price'>$ 100</h6>
                        </div>
                     </div>
                   </div>
                </div>
               </Container>
      
    </>
  )
}

export default Wishlist
