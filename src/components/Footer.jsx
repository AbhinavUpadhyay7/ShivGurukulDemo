import { Link } from 'react-router-dom'
import { Facebook, Instagram, Youtube, Mail, Phone, MapPin, ArrowUpRight } from 'lucide-react'
import { organization } from '../data/siteData'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-main">
        <div className="footer-about">
          <Link to="/" className="footer-brand">Shiv Rekha Gurukul</Link>
          <p>Education can open doors, build confidence and create brighter possibilities. We believe every child deserves the opportunity to learn.</p>
          <div className="social-links">
            <a href="#facebook" aria-label="Facebook"><Facebook size={17}/></a>
            <a href="#instagram" aria-label="Instagram"><Instagram size={17}/></a>
            <a href="#youtube" aria-label="YouTube"><Youtube size={17}/></a>
          </div>
        </div>
        <div>
          <h4>Quick Links</h4>
          <div className="footer-links">
            <Link to="/about">About Us</Link><Link to="/programs">Our Programs</Link><Link to="/gallery">Gallery</Link><Link to="/get-involved">Get Involved</Link>
          </div>
        </div>
        <div>
          <h4>Our Focus</h4>
          <div className="footer-links"><a href="/programs">Free Education</a><a href="/programs">Learning Support</a><a href="/programs">Child Development</a><Link to="/contact">Contact Us</Link></div>
        </div>
        <div>
          <h4>Contact Details</h4>
          <div className="footer-contact"><span><MapPin size={16}/>{organization.address}</span><span><Phone size={16}/>{organization.phone}</span><span><Mail size={16}/>{organization.email}</span></div>
          <Link to="/contact" className="footer-more">Get in touch <ArrowUpRight size={14}/></Link>
        </div>
      </div>
      <div className="footer-bottom"><div className="container footer-bottom-inner"><span>© {new Date().getFullYear()} Shiv Rekha Gurukul. All rights reserved.</span><span>Made with care for a brighter tomorrow.</span></div></div>
    </footer>
  )
}
