import React from 'react';
import { Link } from "react-router-dom";

export default function Navbar(){
    return (
        <nav className=' navbar-expand-lg bg-light'>
            < div className='container-fluid'>
                <ul className="nav nav-pills mb-3" id="pills-tabContent" role="tablist">
                    < li className="nav-item" role="presentation">
                     <button className='"nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true"'><Link className='nav-link ' to="/">Home </Link></button>
                    </li>
                    < li className='nav-item" role="presentation'>
                        <button className='"nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-games" aria-selected="false"'><Link className='nav-link ' to="/games">Games</Link></button>
                    </li>
                    < li className='nav-item" role="presentation'>
                    <button className='"nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-developer" aria-selected="false"'><Link className='nav-link ' to="/developer">Developer</Link></button>
                    </li>
                </ul>
            </div>
        </nav>
    )
}