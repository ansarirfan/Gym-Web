import Header from '../../components/Header'
import HeaderImage from '../../images/header_bg_2.jpg'
import {MdEmail} from 'react-icons/md'
import {BiSolidMessageRoundedDots} from 'react-icons/bi'
import {IoLogoWhatsapp} from 'react-icons/io'
import './contact.css'

const Contact = () => {
  return (
    <>
    <Header title="Get In Touch" image={HeaderImage}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit veniam eius nisi eaque sequi id!
    </Header>

    <section className="contact">
       <div className="container contact_container">
        <div className="contact_wrapper">
          <a href="ansaripaniyara007@gmail.com" target='_blank' rel='noreferrer noopener'><MdEmail/> </a>
          <a href="https://m.me/enrest_achiver" target='_blank' rel='noreferrer noopener'> <BiSolidMessageRoundedDots/> </a>
          <a href="https://wa.me/+918423287636" target='_blank' rel='noreferrer noopener'> <IoLogoWhatsapp/> </a>
        </div>
       </div>
    </section>
    </>
  )
}

export default Contact
