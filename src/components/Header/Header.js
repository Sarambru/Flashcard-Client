import React from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import { Link, NavLink } from 'react-router-dom'
import '..//../css/Header.css'

const authenticatedOptions = (
  <>
    <NavLink to='/change-password' className='nav-link'>Change Password</NavLink>
    <NavLink to='/sign-out' className='nav-link'>Sign Out</NavLink>
    <NavLink to='/flashcards' className='nav-link'> My Flashcards</NavLink>
    <NavLink to='/flashcards/study' className='nav-link'>Study</NavLink>
  </>
)

const unauthenticatedOptions = (
  <>
    <NavLink to='/sign-up' className='nav-link'>Sign Up</NavLink>
    <NavLink to='/sign-in' className='nav-link'>Sign In</NavLink>
  </>
)

const alwaysOptions = (
  <>
    <NavLink to='/' className='nav-link'>Home</NavLink>
  </>
)

const Header = ({ user }) => (
  <Navbar id = 'header' expand='md'>
    <Container>
      <Navbar.Brand>
        <Link to='/' style={{ color: '#00ffff', textDecoration: 'none' }}>Studium</Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls='basic-navbar-nav' />
      <Navbar.Collapse id='basic-navbar-nav'>
        <Nav id='nav'className='ms-auto'>
          {user && (
            <span className='navbar-text me-2'>Welcome, {user.email}</span>
          )}
          {alwaysOptions}
          {user ? authenticatedOptions : unauthenticatedOptions}
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
)

export default Header
