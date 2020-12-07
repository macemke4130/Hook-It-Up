import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <>
            <div id="side-bar">
                <Link className="nav-btn" to="/">
                    Home
                </Link>
                <Link className="nav-btn" to="/ReadMe">
                    Read Me
                </Link>
                <Link className="nav-btn" to="/Contact">
                    Contact
                </Link>
                <div id="copy">
                    Copyright Dumpster Fire
                </div>
            </div>
        </>
    );
}

export default Nav;