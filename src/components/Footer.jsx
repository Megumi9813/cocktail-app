import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../assets/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faList} from '@fortawesome/free-solid-svg-icons'

function Footer() {
  return (
    <footer>
      <Link to="/" className='footer_logo'>
          <img src={Logo} alt=""/>
      </Link>
      <div className="footer_links">
          <Link to="/">Home</Link>
          <Link to="/cocktails">Cocktails</Link>
          <Link to="/mylist">My List</Link>
      </div>
      <div className="copyRight">&copy; GoTo Cocktail.com Allcrights reserved.</div>
    </footer>
  )
}

export default Footer