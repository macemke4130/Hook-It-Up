import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <>
            <div id="side-bar">
                <Link className="nav-btn" to="/">
                    Home
                </Link>
                <p>
                    Select from the users to the right to view their individual details.
               </p>
            </div>
        </>
    );
}

export default Nav;