import React from 'react'
import { Link } from 'react-router-dom'
import "../css/Navbar.css"

function NavBar() {
  return (
    <nav className='navbar'> 
    <div className="navbar-brand"> 
    <Link to="/">Rated</Link>
    </div>
    <hr></hr>
    <div className="navbar-links">
        <Link to="/" className="nav-link">Home</Link>
     <br></br>   
        <Link to="/favorites" className="nav-link">Favorites</Link>
    </div>
    </nav>
  )
}

export default NavBar