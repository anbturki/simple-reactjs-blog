import React from 'react'
import {NavLink} from 'react-router-dom'
import './Nav.css'
const Nav = () => {
  return (
    <ul className="nav">
      <li><NavLink to="/">Home</NavLink></li>
      <li><NavLink to="/add-post">Add new post</NavLink></li>
    </ul>
  )
}

export default Nav;