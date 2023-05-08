import React from 'react'
import ReactStars from "react-rating-stars-component";
import { Link } from 'react-router-dom';


const SpecialProduct = () => {
    return (
        <div className="col-6">
            <div className="special-product-card">
                <div className="d-flex justify-content-between">
                    <div>
                        <img src="img/ios7.avif" className='img-fluid' alt="" style={{borderRadius: "10px",width:'270px'}} />
                    </div>
                    <div className='special-product-content'>
                        <h5 className="brand">iphone 14 pro</h5>
                        <h6>Fragrant which give a life of plesent World... </h6>
                        <ReactStars
                            count={5}
                            size={24}
                            value={3}
                            edit={false}
                            activeColor="#ffd700"
                        />
                        <p className="price"><span className="red-p">  $100</span>&nbsp;  <strike>   $200</strike></p>
                        <div className="discount-till d-flex align-items-center">
                            <p className='mb-0'>
                                <b>
                                    5 days
                                </b></p>
                            <div className="d-flex gap-10 align-items-center">
                                <span className='badge rounded-circle p-3 bg-danger'>1</span>:
                                <span className='badge rounded-circle p-3 bg-danger'>1</span>:
                                <span className='badge rounded-circle p-3 bg-danger'>1</span>
                            </div>
                        </div>
                        <div className="prod-count my-3">
                            <p>Product: 5</p>
                            <div className="progress">
                                <div className="progress-bar" role="progressbar" style={{ width: "25px" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>
                        <Link className='button'>Add to cart</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SpecialProduct
