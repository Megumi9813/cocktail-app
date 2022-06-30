import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../assets/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faClipboardList, faBars, faTimes} from '@fortawesome/free-solid-svg-icons'

function Nav({numberOfItems}) {
    function openMenu() {
        document.body.classList += " menu-open"
    }
    function closeMenu() {
        document.body.classList.remove("menu-open")
    }

  return (
      <>
        <nav>
            <div className="nav_wrapper">
                <div className="logo_container">
                    <Link to="/">
                        <img src={Logo} alt="" className='logo'/>
                    </Link>
                </div>
                <ul className="links">
                    <li className='link'>
                        <Link to="/">Home</Link>
                    </li>
                    <li className='link'>
                        <Link to="/cocktails">Cocktails</Link>
                    </li>
                    <button className='btn_menu' onClick={openMenu}>
                        <FontAwesomeIcon icon={faBars} />
                    </button>
                    <li className='list-icon'>
                        <Link to="/mylist" className='myList'>
                            <FontAwesomeIcon icon={faClipboardList} />
                        </Link>
                        {
                            numberOfItems > 0 && <span className='myList-length'>{numberOfItems}</span>
                        }
                    </li>
                </ul>
                <div className="menu_backdrop">
                    <button className='btn_menu btn_menu-close' onClick={closeMenu}>
                        <FontAwesomeIcon icon={faTimes} />
                    </button>
                    <ul className='menu_links'>
                        <li className='menu_list' onClick={closeMenu}>
                            <Link to="/" className='menu_link'>
                                Home
                            </Link>
                        </li>
                        <li className='menu_list' onClick={closeMenu}>
                            <Link to="/cocktails" className='menu_link'>
                                Cocktails
                            </Link>
                        </li>
                        <li className='menu_list' onClick={closeMenu}>
                            <Link to="/mylist" className='menu_link'>
                                My List
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
      </>
  )
}

export default Nav