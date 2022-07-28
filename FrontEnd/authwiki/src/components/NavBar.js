import { useRef } from "react";
import {FaBars, FaTimes} from 'react-icons/fa'
import {Link} from 'react-router-dom'
import './Navbar.css'


function Navbar () {
    const navRef = useRef()

    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav")
    }

    return(
        <header>
            <div className="logo">
                <h3>AuthWiki</h3>
            </div>
            <nav ref={navRef}>
                <div className="nav-center">
                    <Link to="#">Examples</Link>
                    <Link to="#">Blogs</Link>
                    <Link to="#">Decs</Link>
                    <Link to="#">Integration</Link>
                    <Link to="#">Contact</Link>
                </div>
                <div className="nav-right">
                    <Link to="#" className="login">Login</Link>
                    <Link to="#" className="sign-up">Sign Up</Link>
                <button className="nav-btn nav-close-btn" onClick={showNavbar}>
                    <FaTimes />
                </button>
                </div>
            </nav>
            <button className="nav-btn" onClick={showNavbar}>
                    <FaBars />
                </button>
        </header>
    )
}

export default Navbar