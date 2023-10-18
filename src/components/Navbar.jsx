import {Link, NavLink} from 'react-router-dom'
import './navbar.css' 
import {links} from '../data'
import Logo from '../images/logo.png'
import{AiOutlineClose} from 'react-icons/ai'
import{FaBars} from 'react-icons/fa'
import { useState } from 'react'

const Navbar = () => {

  const [isNavShow, setIsNavShow] = useState(false);
  return (
    <nav>
        <div className="container nav_container">
        <Link to='/' className="logo" onClick={() => setIsNavShow(false)}>
         <img src={Logo} alt="Nav Logo" />
        </Link>
        <ul className={`nav_links ${isNavShow ? 'show_nav' : 'hide_nav'}`}>
            {
                links.map(({name, path}, index) =>{
                   return(
                    <li key={index}>
              <NavLink to={path} className={({isActive}) => isActive ? 'active-nav' : ''}>  {name} </NavLink>
                    </li>
                   ) 
                })
            }
        </ul>
        <button className="nav_toggle-btn" onClick={() => setIsNavShow(!isNavShow)} >
          {
            isNavShow ? <AiOutlineClose/> :  <FaBars/>
          }
         
        </button>
      </div>
    </nav>
  )
}

export default Navbar
