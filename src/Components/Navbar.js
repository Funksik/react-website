import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import './Navbar.css';
import { Button } from './Button';

function Navbar() {

    const [click, setClick] = useState(false);
    const [bigSize, setBigSize] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const handleSize = () => {
        if (window.innerWidth <= 960) {
            setBigSize(false);
        } else {
            setBigSize(true);
        }
    }

    useEffect(() => {
        handleSize()
    }, [])

    window.addEventListener('resize', handleSize);

    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                        {bigSize && "RUNNING ACADEMY"}
                        <i className='navbar-logo-icon'></i>
                    </Link>                    
                    <div className="menu-icon" onClick={handleClick}>
                        <i className={click ? "fas fa-times" : "fas fa-bars"} />
                    </div>
                    <ul className={click ? "nav-menu active" : "nav-menu"}>
                        <li className="nav-item">
                            <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/vlog" className="nav-links" onClick={closeMobileMenu}>
                                Vlog
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/contact" className="nav-links" onClick={closeMobileMenu}>
                                Ceník
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/sign-up" className="nav-links-mobile" onClick={closeMobileMenu}>
                                Přihlášení
                            </Link>
                        </li>
                    </ul>
                    {bigSize && <Button buttonStyle='btn--outline'>PŘIHLÁŠENÍ</Button>}
                </div>
            </nav>
        </>
    )
}

export default Navbar