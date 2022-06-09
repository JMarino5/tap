import { NavLink } from 'react-router-dom';
import React from 'react';

import '../css/header.css';

//The header remains the same throughout the site.

const Header = () => {

    return (
        <React.Fragment>
        <div className='Header'>
            <nav>
                <NavLink className='headerItem' to ='/about'>About</NavLink>
                <NavLink className='headerItem' to ='/submissions'>Submissions</NavLink>
                <NavLink className='headerItem' to ='/catalogue'>Catalogue</NavLink>
                <NavLink className='headerItem' to ='/contact'>Contact</NavLink>
                <NavLink className='headerItem' to ='/lr'>MPage</NavLink>
            </nav>
        </div>
        </React.Fragment>
    )
}

export {
    Header,
}

