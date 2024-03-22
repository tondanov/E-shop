import React from 'react'
import {FiHeart} from "react-icons/fi"
import {AiOutlineShoppingCart, AiOutlineUserAdd} from "react-icons/ai"
import "./nav.css"

function Nav({handleInputChange}) {
  return (
    <nav>
      <div className='nav-container'>
        <input onChange={handleInputChange} className='search-input' type="text" placeholder='Zadejte název produktu'/>
      </div>
      <div className='profile-container'>
        <a href="#">
          <FiHeart className='nav-icons'/>
        </a>
        <a href="#">
          <AiOutlineShoppingCart className='nav-icons'/>
        </a>
        <a href="#">
          <AiOutlineUserAdd className='nav-icons'/>
        </a>
      </div>
    </nav>
  )
}

export default Nav
