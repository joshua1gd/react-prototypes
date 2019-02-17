import React from 'react';
import {NavLink} from 'react-router-dom';

export default (props) => (
    <ul className="nav nav-tabs mt-3">
        <li className="nav-item">
            <NavLink exact to='/' className='nav-link'>Welcome</NavLink>
        </li>
        <li className='nav-item'>
           <NavLink to='/our-macarons' className='nav-link'>Our Macarons</NavLink>
        </li>
        <li className='nav-item'>
            <NavLink to='/gifts-parties' className='nav-link'>Gifts & Parties!</NavLink>
        </li>
        <li className='nav-item'>
            <NavLink to='/contact' className='nav-link'>Contact</NavLink>
        </li>
    </ul>
);