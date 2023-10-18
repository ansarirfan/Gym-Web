import Header from '../../components/Header'
import HeaderImage from '../../images/header_bg_5.jpg'
import {trainers} from '../../data'
import {BsFacebook} from 'react-icons/bs'
import {FaLinkedin} from 'react-icons/fa'
import {FiTwitter} from 'react-icons/fi'
import {BiLogoInstagram} from 'react-icons/bi'
import Trainer from '../../components/Trainer'
import './trainers.css'

const Trainers = () => {
  return (
    <>
     <Header title="Our Trainers" image={HeaderImage}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, eum. Deleniti molestiae numquam illum non.
     </Header>
     <section className="trainers">
      <div className="container trainers_container">
        {
          trainers.map(({id, image, name, job, socials }) =>{
              return <Trainer key={id} image={image} name={name} job={job} socials={
              [
                {icon: <BiLogoInstagram/>, link: socials[0]},
                {icon: <FiTwitter/>, link: socials[1]},
                {icon: <BsFacebook/>, link: socials[3]},
                {icon: <FaLinkedin/>, link: socials[2]}
               
                
              ]
            }>

            </Trainer>
          })
        }
      </div>
     </section>
    </>
  )
}

export default Trainers
