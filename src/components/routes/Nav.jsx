import React from 'react'
import { Link } from 'react-router-dom'
// import Navbar from 'react-bootstrap'

import '..//../css/Nav.css'

const Nav = () => (
  <>
    <section className='navbar'>
      <Link to='flashcards/create' className='nav-Item'>+ Create Flashcard</Link>
      {/* <Link to='projects' className='nav-item'>My Projects</Link> */}
    </section>
  </>
)

export default Nav
