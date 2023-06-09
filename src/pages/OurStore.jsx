import React, { useState } from 'react'
import BreadCrumb from '../components/BreadCrumb';
import Meta from '../components/Meta';
import ReactStars from "react-rating-stars-component";
import {  HiAdjustmentsVertical,HiPause,HiBars2,HiBars4 } from "react-icons/hi2";
import ProductCard from '../components/ProductCard';
import Color from '../components/Color';
import Container from '../components/Container';



const OurStore = () => {
    const [grid, setGrid] = useState(4);
    
    return (
        <>
            <Meta title={"Our Store"} />
            <BreadCrumb title={"Our Store"} />
            <Container class1="store-wrapper home-wrapper-2 py-5">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-3">
                            <div className='filter-card mb-3'>
                                <h3 className="filter-title">
                                    Shop By Categories
                                </h3>
                                <div>
                                    <ul className='ps-0'>
                                        <li>Watch</li>
                                        <li>Tv</li>
                                        <li>Camera</li>
                                        <li>Laptop</li>
                                    </ul>
                                </div>
                            </div>
                            <div className='filter-card mb-3'>
                                <h3 className="filter-title">
                                    FilterBy
                                </h3>
                                <div>
                                    <h5 className="sub-title">
                                        Availability
                                    </h5>
                                    <div>
                                        <div className="form-check">
                                            <input type="checkbox" className='form-check-label' value='' id='' />
                                            <label htmlFor="" className="form-check-label">In Stock</label>
                                        </div>
                                        <div className="form-check">
                                            <input type="checkbox" className='form-check-label' value="" id="" />
                                            <label htmlFor="" className="form-check-label">Out of Stock (0)</label>
                                        </div>
                                    </div>
                                    <h5 className="sub-title">
                                        Price
                                    </h5>
                                    <div className='d-flex align-items-center gap-10'>
                                        <div className="form-floating">
                                            <input type="email" className="form-control"  id="floatingInput" placeholder="From" />
                                            <label htmlFor="floatingInput">From</label>
                                        </div>
                                        <div className="form-floating">
                                            <input type="email" className="form-control"  id="floatingInput1" placeholder="To" />
                                            <label htmlFor="floatingInput1">To</label>
                                        </div>

                                    </div>
                                    <h5 className="sub-title">
                                        Colors
                                    </h5>
                                    <div>
                                    <Color />
                                    </div>
                                    <h5 className="sub-title">Size</h5>
                                    <div>
                                    <div className="form-check">
                                            <input type="checkbox" className='form-check-label' value='' id='color-1' />
                                            <label htmlFor="color-1" className="form-check-label">
                                               &nbsp; S (2)
                                            </label>
                                        </div>

                                        <div className="form-check">
                                            <input type="checkbox" className='form-check-label' value='' id='color-1' />
                                            <label htmlFor="color-1" className="form-check-label">
                                               &nbsp; M (2)
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='filter-card mb-3'>
                                <h3 className="filter-title">
                                    Product Tag
                                </h3>
                                <div>
                                    <div className="product-tags d-flex flex-wrap align-items-center gap-10">
                                        <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                                            Hedphone
                                        </span>

                                        <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                                            Laptop
                                        </span>

                                        <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                                            Mobile
                                        </span>

                                        <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                                            Wire
                                        </span>


                                    </div>
                                </div>
                            </div>
                            <div className='filter-card mb-3'>
                                <h3 className="filter-title">
                                    Random Product
                                </h3>
                                <div>
                                    <div className="random-products d-flex mb-3 ">
                                        <div className="w-50">
                                            <img src="img/iphone4.avif" className='img-fluid' alt="" />
                                        </div>
                                        <div className="w-50">
                                            <h5>Always Love the World of Technology..</h5>
                                            <ReactStars
                                                count={5}
                                                size={24}
                                                value={3}
                                                edit={false}
                                                activeColor="#ffd700"
                                            />
                                            <b>$700</b>
                                        </div>
                                    </div>

                                    <div className="random-products d-flex ">
                                        <div className="w-50">
                                            <img src="img/iphone4.avif" className='img-fluid' alt="" />
                                        </div>
                                        <div className="w-50">
                                            <h5>Always Love the World of Technology..</h5>
                                            <ReactStars
                                                count={5}
                                                size={24}
                                                value={3}
                                                edit={false}
                                                activeColor="#ffd700"
                                            />
                                            <b>$700</b>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-9">
                            <div className="filter-sort-grid mb-4">
                               <div className="d-flex justify-content-between align-items-center">
                               <div className="d-flex align-items-center gap-10">
                                    <p className="mb-0 d-block" style={{width: "100px"}}>Sort By:</p>
                                    <select name="" id="" className="form-control form-select">
                                        <option value="manual">Featured</option>
                                        <option value="best-selling" selected="selected">Best selling</option>
                                        <option value="title-ascending">Alphabetically, A-Z</option>
                                        <option value="title-descending">Alphabetically, A-Z</option>
                                        <option value="title-ascending">Price, low to high</option>
                                        <option value="title-descending">Price, high to low</option>
                                        <option value="created-ascending">Date, old to new</option>
                                        <option value="created-descending">Date, new to old</option>



                                    </select>
                                </div>
                                <div className="d-flex align-items-center gap-10">
                                     <p className="totalproducts mb-0">21 Products</p>
                                     <div className="d-flex align-items-center gap-10 grid">
                                    <HiAdjustmentsVertical  className='vh' onClick={()=>{
                                        setGrid(3);
                                    }}/>
                                    <HiBars2  className='vh img-fluid' onClick={()=>{
                                        setGrid(4);
                                    }} />
                                    <HiPause className='vh img-fluid'  onClick={()=>{
                                         setGrid(6);
                                    }}/>
                                    <HiBars4  className='vh img-fluid' onClick={()=>{
                                        setGrid(12);
                                    }}/>

                                     </div>
                                </div>
                               </div>
                            </div>
                            <div className="product-list pb-5">
                              <div className="d-flex gap-20 flex-wrap">
                              <ProductCard  grid={grid}/>
                              </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    );
};

export default OurStore
