import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className="nav-wrapper blue darken-3">
            <div className="container">
                <a href="/" className="brand-logo">
                    Lumi Global News
                </a>
                <ul className="right">
                    <li><Link to="/">World News </Link></li>
                    <li><Link to="/tech"> Tech </Link></li>
                    <li><Link to="/nigeria"> Nigeria </Link></li>
                    <li><Link to="/about"> About</Link></li>
                </ul>
            </div>
            
        </nav>
    )
}

export default Navbar