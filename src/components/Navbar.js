import React from 'react';
import { Link } from "react-router-dom";

export default function Navbar(){
    return (
        <nav className='navbar bg -blue'>
            < div className='container-fluid'>
                <ul className='navbar-nav'>
                    < li className='nav-item'>
                        <Link className='nav-link' to="/">Home </Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}