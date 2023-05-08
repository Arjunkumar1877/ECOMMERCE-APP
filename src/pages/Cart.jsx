import React from 'react';
import BreadCrumb from '../components/BreadCrumb';
import Meta from '../components/Meta';
import ios7 from '../img/ios7.avif';
import { Link } from 'react-router-dom';
import Container from '../components/Container';



const Cart = () => {
  return (
    <>
      <Meta title={"Cart"} />
            <BreadCrumb title={"Cart"} />
            <Container class1="cart-wrapper home-wrapper-2 py-5">
                <div className="row">
                    <div className="col-12">
                        <div className="card-header d-flex py-3 justify-content-between align-items-center" style={{backgroundColor:"whiteSmoke"}}>
                            <h4 className='cart-col-1'>Product</h4>
                            <h4 className='cart-col-2'>Price</h4>
                            <h4 className='cart-col-3'>Quantity</h4>
                            <h4 className='cart-col-4'>Total</h4>
                        </div>

                        <div className="card-date d-flex py-3 mb-2 justify-content-between align-items-center" style={{backgroundColor:"whiteSmoke"}}>
                            <div className='cart-col-1 d-flex gap-15 align-items-center'>
                                <div className='w-25'>
                                    <img src={ios7} alt="product-image" className='img-fluid' />
                                </div>
                                <div className='w-75'>
                                    <p>mghngchngh</p>
                                    <p>Size: </p>
                                    <p>Color: </p>
                                </div>
                            </div>
                            <div className='cart-col-2'>
                                <h5 className="price">$100</h5>
                            </div>
                            <div className='cart-col-3 d-flex align-items-center gap-15'>
                                <div>
                                    <input className='form-control' type="number" name="" min={1}  max={10} id="" />
                                </div>
                                <div><i className="fa-solid fa-trash-can"></i></div>
                            </div>
                            <div className='cart-col-4'>
                            <h5 className="price">$100</h5>
                            </div>
                        </div>

                        <div className="col-12 py-2">
                            <div className="d-flex justify-content-between align-items-baseline">
                            <Link to='/product' className='button'> Continue Shopping </Link>
                            <div>
                                <h4>SubTotal: $ 1000</h4>
                                <p>Taxes and shipping calculated at checkout</p>
                                <Link className='button' to='/checkout'>Checkout</Link>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
    </>
  )
}

export default Cart
