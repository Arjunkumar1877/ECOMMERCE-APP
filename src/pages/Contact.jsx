import React from 'react';
import Meta from '../components/Meta';
import BreadCrumb from '../components/BreadCrumb';
import Container from '../components/Container';

const Contact = () => {
  return (
    <>
      <Meta title={"Contact Us"} />
      <BreadCrumb title={"Contact Us"} />

      <Container class1="contact-wrapper py-5 home-wrapper-2">
          <div className="row">
            <div className="col-12">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7860.651758181262!2d76.27240307343477!3d9.90679317166031!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b0873e3c3db01c7%3A0:xc895467a7ffa87b7!2sPerumpadappu%20bus%20stand!5e0!3m2!1sen!2sin!4v1680856558664!5m2!1sen!2sin" width="600" height="450" className='border-0 w-100' allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <div className="col-12 mt-5">
              <div className="contact-inner-wrapper d-flex justify-content-between">
                <div>
                  <h3 className="contact-title mb-4">Contact</h3>
                  <form action="" className='d-flex flex-column gap-15'>
                    <div>
                      <input type="text" className="form-control" placeholder='Name' />
                    </div>
                    <div>
                      <input type="email" className="form-control" placeholder='Email' />
                    </div>
                    <div>
                      <input type="tel" className="form-control" placeholder='Mobile Number' />
                    </div>
                    <div>
                      <textarea name="" className='w-100 form-control' id="" cols="30" rows="4" placeholder='Comments...'></textarea>
                    </div>
                    <div>
                      <button className='button border-0'>Submit</button>
                    </div>
                  </form>
                </div>
                <div>
                  <h3 className="contact-title mb-4">Get In Touch With Us</h3>
                  <div>
                    <ul className='ps-0'>
                      <li className='mb-3 d-flex gap-15 align-items-center'><i style={{ fontSize: "15px" }} className="fa-solid fa-house"></i>
                        <address className='mb-0'>Near St juliana's school Palluruthy, Perumpadappu</address>
                      </li>
                      <li className='mb-3 d-flex gap-15 align-items-center'><i style={{ fontSize: "15px" }} className="fa-solid fa-phone"></i>
                      <a href="tel:+91 8262693186">+91 8262693186</a>
                      </li>
                      <li className='mb-3 d-flex gap-15 align-items-center'><i style={{ fontSize: "15px" }} className="fa-sharp fa-solid fa-envelope"></i>
                      <a href="mailto:arjundevolps177@gmail.com">arjundevops177@gmail.com</a>
                     </li>
                      <li className='mb-3 d-flex gap-15 align-items-center'><i style={{ fontSize: "20px" }} className="fa-solid fa-info"></i>
                      <p className='mb-0'>Monday - Friday 10 AM - 8 PM </p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
    </>
  )
}

export default Contact
