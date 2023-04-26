import React from 'react';
import images from '../../constants/images';
import icon from '../../constants/icon';
import './Footer.css';

function Footer () {

  return (
    <div>
      <div className="footer">
        <div className="container">

          <div className='footer-section'>

            <div className='footer-contact'>
              <h1>Contact Us</h1>
              <span>9 W 53rd St, London, NY 10019, UK</span>
              <span>+1 212-344-1230</span>
              <span>+1 212-555-1230</span>
            </div>

            <div className='footer-logo'>
              <img src={images.footerLogo} alt="logo" />
              <p>"The best way to find yourself is to lose yourself in the <br /> service of others.”</p>

              <div className='footer-icon'>
                <h3><icon.FaFacebookF /></h3>
                <h3><icon.BsTwitter /></h3>
                <h3><icon.FiInstagram /></h3>
              </div>
            </div>

            <div className='footer-hours'>
              <h1>Working Hours</h1>
              <span>Monday-Friday: <br /> 08:00 am -12:00 am</span>
              <span>Monday-Friday: <br /> 08:00 am -12:00 am</span>
            </div>

          </div>

          <div className='footer-title'>
            <p>2022 Pop online. All Rights reserved.</p>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Footer;
