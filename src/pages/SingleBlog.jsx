import React from 'react';
import BreadCrumb from '../components/BreadCrumb';
import Meta from '../components/Meta';
import { Link } from 'react-router-dom';
import {HiOutlineArrowLeft} from 'react-icons/hi'
import Container from '../components/Container';


const SingleBlog = () => {
  return (
    <>
       <Meta title={"Dynamic Blog Name"} />
            <BreadCrumb title={"Dynamic Blog Name"} />

            <Container class1="blog-wrapper home-wrapper-2 py-5">
                    <div className="row">
                        <div className="col-12">
                            <div className="single-blog-card">
                                <Link to='/blogs' className='d-flex align-items-center gap-10'><HiOutlineArrowLeft className='fs-4'/>Go back to Blogs</Link>
                                <h3 className="title">A peaceful life is always beautiful..</h3>
                                <img src="img/ios1.avif" alt="iphone" className='img-fluid' />
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos tempore sit laudantium, qui, assumenda eum voluptas eligendi natus mollitia sunt asperiores corrupti deleniti numquam modi ratione illo minus, dignissimos ullam!</p>
                            </div>
                        </div>
                    </div>
                </Container>
    </>
  )
}

export default SingleBlog
