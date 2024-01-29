import React, { useState } from "react";
import logo from '../images/Logo .svg'
import { Link } from "react-router-dom";

const Nav = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    }

    return (
        <nav className={`navbar ${menuOpen ? "open" : ""}`}>
            <Link to="/" className="logo">
                <img src={logo} alt='logo'/>
            </Link>

            {/*mobile navbar*/}
            <div className="menu-icon" onClick={toggleMenu}>
                <div className="bar" ></div>
                <div className="bar" ></div>
                <div className="bar" ></div>
            </div>

            {/*nav items*/}
            <ul className={`nav-links ${menuOpen ? "visible" : ""} `}>
                <li>
                    <Link href="/">Home</Link>
                </li>
                <li>
                    <Link href="/">About</Link>
                </li>
                <li>
                    <Link href="/">Services</Link>
                </li>
                <li>
                    <Link href="/">Menu</Link>
                </li>
                <li>
                    <Link href="/">Reservation</Link>
                </li>
                <li>
                    <Link href="/">Order Online</Link>
                </li>
                <li>
                    <Link href="/">Login</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Nav;
