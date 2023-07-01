import React from 'react'
import '../Styles/footer.css'

export default function Footer() {
  return (
    <footer>
        <h1>The Wonderland</h1>
        <div>
            <div className='footer-elements'>
                <h2>Reservation Office</h2>
                <div>
                    <i class="fa fa-map-marker"/>
                    <p>123, Lorem Street, Mumbai <br />
                       Maharashtra - 400 001
                    </p>
                </div>
                <div>
                    <i class="fa fa-phone"/>
                    <p>
                        <a href="tel:+91-9876543210">+91 9876543210</a>
                    </p>
                </div>
                <div>
                    <i class="fa fa-envelope"/>
                    <p>
                        <a href="mailto:hello@thewonderland.com">hello@thewonderland.com</a>
                    </p>
                </div>
            </div>
            <div div className='footer-elements'>
                <h2>Office Hours</h2>
                <p>
                    Monday to Friday <br />
                    10:00 am to 6:00 pm
                </p>
                <p>
                    Saturday <br />
                    10:00 am to 2:00 pm
                </p>
            </div>
            <div div className='footer-elements'>
                <h2>Get Social</h2>
                    <div className='social'>
                        <a href="https://www.facebook.com/">
                            <i class="fa fa-facebook"/>
                            Facebook
                        </a>
                    </div>
                    <div className='social'>
                        
                        <a href="https://www.twitter.com/">
                            <i class="fa fa-twitter"/>
                            Twitter
                        </a>
                    </div>
                    <button>Connect with us</button>
                </div>
        </div>
    </footer>
  )
}
