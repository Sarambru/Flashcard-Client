import React from 'react'
import { Link } from 'react-router-dom'
// import Navbar from 'react-bootstrap'

import '..//../css/Nav.css'

const Nav = () => (
  <>
    <section className='navbar'>
      <Link to='/' className='nav-item'>Home</Link>
      <Link to='flashcards' className='nav-item'>Flashcards</Link>
      {/* <Link to='projects' className='nav-item'>My Projects</Link> */}
    </section>
    <hr />
  </>
)

export default Nav
