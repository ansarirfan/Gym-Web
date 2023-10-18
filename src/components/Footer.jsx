import {Link} from 'react-router-dom'
import Logo from '../images/logo.png'
import {BsFacebook} from 'react-icons/bs'
import {FaLinkedin} from 'react-icons/fa'
import {FiTwitter} from 'react-icons/fi'
import {BiLogoInstagram} from 'react-icons/bi'


const Footer = () => {
  return (
   <footer>
    <div className="container footer_container">
        <article>
            <Link to="/" className="logo">
        <img src={Logo} alt="Footer Logo" />
            </Link>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt, ut! Nisi debitis aliquid explicabo tempore commodi asperiores laudantium labore modi. Facere dolorum, 
                 quo qui culpa numquam eius repellendus est nesciunt!</p>
                 <div className="footer_socials">
                    <a href="https://facebook.com" target='_blank' rel='noreferrer  noopener'> <BsFacebook/> </a>
                    <a href="https://linkedin.com" target='_blank' rel='noreferrer  noopener'> <FaLinkedin/> </a>
                    <a href="https://instagram.com" target='_blank' rel='noreferrer  noopener'> <BiLogoInstagram/> </a>
                    <a href="https://twitter.com" target='_blank' rel='noreferrer  noopener'> <FiTwitter/> </a>
                 </div>
        </article>

        <article>
            <h4>Permalink</h4>
            <Link to="/about">About</Link>
            <Link to="/plans">Plans</Link>
            <Link to="/trainers">Trainers</Link>
            <Link to="/gallery">Gallery</Link>
            <Link to="/contact">Contact</Link>
        </article>
        <article>
            <h4>Insights</h4>
            <Link to="/s">Blog</Link>
            <Link to="/s">Case Studies</Link>
            <Link to="/s">Events</Link>
            <Link to="/s">Community</Link>
            <Link to="/s">FAQs</Link>
        </article>
        <article>
            <h4>Get In Touch</h4>
            <Link to="/contact">Contact Us</Link>
            <Link to="/s">Support</Link>
            
        </article>
    </div>

    <div className="footer_copyright">
        <small>2023 Ansari Trainer &copy; All copy right reserved.</small>
    </div>
   </footer>
  )
}

export default Footer
