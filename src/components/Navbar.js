import React from 'react';
import { Link } from "react-router-dom";

export default function Navbar(){
    return (
        <nav className=' navbar-expand-lg bg-light'>
            < div className='container-fluid'>
                <ul className="nav nav-pills mb-3" id="pills-tabContent" role="tablist">
                    < li className="nav-item" role="presentation">
                     <Link className='nav-link ' to="/">Home</Link>
                    </li>
                    < li className='nav-item" role="presentation'>
                    <Link className='nav-link ' to="/games">Games</Link>
                    </li>
                    < li className='nav-item" role="presentation'>
                    <Link className='nav-link ' to="/developer">Developer</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}