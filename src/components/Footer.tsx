import './Footer.css'


export function Footer() {

  return (
    <footer className="footer-container">
      <div className="footer-bg">
        <div>
          <div className="footer-logo-name-container">
            <img className="logo-footer-img" src="icon/logo.png" />
            <p className="footer-workhub-p">WorkHub</p>
          </div>

          <p className="modern-coworking-p">Modern coworking spaces that help you do your best work.</p>

          <div className="soc-med-container">
            <img className="soc-med-img" src="icon/facebook.png" />
            <img className="soc-med-img" src="icon/linkedin.png" />
            <img className="soc-med-img" src="icon/instagram.png" />
            <img className="soc-med-img" src="icon/twitter.png" />
          </div>

          <p className="footer-copyright-p">&copy; 2026 WorkLoft. All rights reserved.</p>
        </div>

        <div>
          <p className="footer-title-link-p">COMPANY</p>

          <p className="footer-link-p">About Us</p>
          <p className="footer-link-p">Careers</p>
          <p className="footer-link-p">Press</p>
          <p className="footer-link-p">Contact</p>
        </div>

        <div>
          <p className="footer-title-link-p">SPACES</p>

          <p className="footer-link-p">Locations</p>
          <p className="footer-link-p">Meeting Rooms</p>
          <p className="footer-link-p">Amenities</p>
          <p className="footer-link-p">Refer a Friend</p>
        </div>

        <div>
          <p className="footer-title-link-p">RESOURCES</p>

          <p className="footer-link-p">Blog</p>
          <p className="footer-link-p">Guides</p>
          <p className="footer-link-p">Events</p>
          <p className="footer-link-p">Help Center</p>
        </div>

        <div>
          <p className="footer-title-link-p">LEGAL</p>

          <p className="footer-link-p">Terms of Service</p>
          <p className="footer-link-p">Privacy Policy</p>
          <p className="footer-link-p">Cookie Policy</p>
        </div>

        <div>
          <p className="footer-title-link-p">STAY IN THE LOOP</p>

          <p className="footer-get-updates-p">Get updates on new locations,</p>
          <p className="footer-events-and-p">events, and offers.</p>

          <div>
            <input type="text" className="footer-enter-email" placeholder="Enter your email" />
            <button className="footer-subscribe-button">Subscribe</button>
          </div>
        </div>
      </div>
    </footer>
  )
}