import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
          <a href="#home"><img src={assets.log} alt="" /></a>
          <p>Masala Mingle: Your Global Culinary Hub. Explore a world of flavors, order chef-prepared meals, join virtual cooking classes, and connect with fellow foodies. Easy ordering, fresh ingredients, and delivery tracking make every meal an adventure. Join the Mingle today!</p>
          <div className="footer-social-icons">
            <a href="https://www.facebook.com"><img src={assets.facebook_icon} alt="" /></a>
            <a href="https://www.twitter.com"><img src={assets.twitter_icon} alt="" /></a>
            <a href="https://www.linkedin.com"><img src={assets.linkedin_icon} alt="" /></a>
          </div>
        </div>
        <div className="footer-content-center">
          <h2>Company</h2>
          <ul>
            <li>About</li>
            <li>Careers</li>
            <li>Team</li>
          </ul>
        </div>

        <div className="footer-content-center">
          <h2>Contact us</h2>
          <ul>
            <li>Help & Support</li>
            <li>Partner with us</li>
            <li>Ride with us</li>
          </ul>

          <h2>Legal</h2>
          <ul>
            <li>Terms & Conditions</li>
            <li>Cookie Policy</li>
            <li>Privacy Policy</li>
            <li>Investor Relations</li>
          </ul>
        </div>

      </div>
      <hr />
      <p className="footer-copyright">© 2024 Masala Mingle. All Right Reserved.</p>
    </div>
  )
}

export default Footer
