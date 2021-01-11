import React from 'react';

function menuBar(props) {
    return (
        <ul className="navbar-nav mr-auto">
        <li className="nav-item active">
            <a className="nav-link" href="/link">Home <span className="sr-only">(current)</span></a>
        </li>
        <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Dropdown
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
            <a className="dropdown-item" href="/movies">Action</a>
            <a className="dropdown-item" href="/series">Another action</a>
            <div className="dropdown-divider"></div>
            <a className="dropdown-item" href="/qualcosa">Something else here</a>
            </div>
        </li>
        </ul>  
    )
}

export default menuBar;