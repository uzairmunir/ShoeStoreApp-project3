import React from 'react'
import {Link} from 'react-router-dom'
import styles from './navbar.css'
const NavBar = () => {
    return (
        <div className="navbar">
              <h1 className="h1">Shoe Store</h1>
            <ul>
                <li><Link  to="/" className="link">Home</Link></li>
                <li><Link to="/men" className="link">Men</Link></li>
                <li><Link to="/kids" className="link">Kids</Link></li>
                <li><Link to="/women" className="link">Women</Link></li>
                
            </ul>
        </div>
    )
}

export default NavBar
