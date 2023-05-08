import React from 'react';
import { Link } from 'react-router-dom';

function BlogCard() {
  return (

      <div className="blog-card">
        <div className="card-image">
          <img src="img/ios1.avif" className='img-fluid w-100' alt="blog" style={{width: "250px"}}/>
        </div>
        <div className="blog-content">
          <p className="date">3 Mar, 2023</p>
          <h5 className="title">A peaceful life is always beautiful..</h5>
          <p className="desc">Lorem ipsum dolor sit amet consectetur .</p>
          <Link className='button' to='/blog/:id'>Read More</Link>
        </div>
      </div>
   
  )
} 

export default BlogCard
