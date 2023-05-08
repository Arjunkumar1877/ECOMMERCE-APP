import React from 'react'
import ReactStars from "react-rating-stars-component";
import { Link, useLocation } from 'react-router-dom';


const ProductCard = (props) => {

  const {grid} = props;

  let location = useLocation();
  return (

  <>
    <div className={` ${location.pathname === "/store" ? `gr-${grid}` : "col-3"}`}>
    <Link to=':id' className='product-card position-relative'>
        <div className="wishlist-icon position-absolute">
            <button className='border-0 bg-transparent'><i className="fa-regular fa-heart" style={{color: "red"}}></i></button>
        </div>
      <div className="product-image">
        <img src="img/ipnone2.avif" alt="product-img" className='img-fluid'/>
        <img src="img/iphone1.avif" alt="product-img" className='img-fluid'/>
      </div>
      <div className="product-details">
        <h6 className="brand">iphone</h6>
        <h5 className="product-title">Welcome to the new world of colours and Technologies</h5>
        <ReactStars
    count={5}
    size={24}
    value={3}
    edit={false}
    activeColor="#ffd700"
  />
  <p  className={`description ${grid === 12 ? "d-block" : "d-none"}`}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime sunt, molestias voluptas, cumque vero aliquid temporibus alias quasi necessitatibus quaerat odio distinctio minima facilis blanditiis nesciunt? Amet magni delectus exercitationem.</p>
        <p className="price">$100.00</p>
      </div>
      <div className="action-bar position-absolute">
        <div className="d-flex flex-column gap-15">
            <button className='border-0 bg-transparent'>
            <i className="fa-solid fa-shuffle"></i>
            </button>
            <button className='border-0 bg-transparent'>
            <i className="fa-regular fa-eye"></i>
            </button>
            <button className='border-0 bg-transparent'>
            <i className="fa-solid fa-bag-shopping"></i>
            </button>
        </div>
      </div>
    </Link>
    </div>

    <div className={` ${location.pathname === "/store" ? `gr-${grid}` : "col-3"}`}>
    <Link className='product-card position-relative'>
        <div className="wishlist-icon position-absolute">
            <button className='bg-transparent border-0'><i className="fa-regular fa-heart" style={{color:"red"}}></i></button>
        </div>
      <div className="product-image mg-fluid">
        <img src="img/ipnone2.avif" alt="product-img" className='img-fluid' />
        <img src="img/iphone1.avif" alt="product-img" className='img-fluid' />
      </div>
      <div className="product-details">
        <h6 className="brand">iphone</h6>
        <h5 className="product-title">Welcome to the new world of colours and Technologies</h5>
        <ReactStars
    count={5}
    size={24}
    value={3}
    edit={false}
    activeColor="#ffd700"
  />
        <p className={`description ${grid === 12 ? "d-block" : "d-none"}`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, rerum. Culpa exercitationem doloremque voluptatem error ratione veritatis sunt cum voluptas aliquid? Ducimus, quis? Ratione in accusamus, odio unde qui autem.</p>
        <p className="price">$100.00</p>
      </div>
      <div className="action-bar position-absolute">
        <div className="d-flex flex-column gap-15">
            <button className='border-0 bg-transparent'>
            <i className="fa-solid fa-shuffle"></i>
            </button>
            <button className='border-0 bg-transparent'>
            <i className="fa-regular fa-eye"></i>
            </button>
            <button className='border-0 bg-transparent'>
            <i className="fa-solid fa-bag-shopping"></i>
            </button>
        </div>
      </div>
    </Link>
    </div>
  </>
  )
}

export default ProductCard
