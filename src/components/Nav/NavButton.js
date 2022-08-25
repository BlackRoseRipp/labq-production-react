import React from 'react';
import { MdKeyboardArrowDown, MdKeyboardArrowRight } from 'react-icons/md';
import ListLink from './ListLink';
import './NavButton.css';

function NavButton(props) {
    const { icon, dropdownLinks, primary, to } = props

    return (dropdownLinks ? (
        <div className='dropdown'>
            <button 
                className='btn btn-nav-dropdown dropdown-toggle'
                type='button'
                data-bs-hover='dropdown'
                aria-expanded='false'
            >
                {icon}&nbsp;{primary}<span className='ms-auto'><MdKeyboardArrowDown /></span>
            </button>
            <ul className='dropdown-menu'>
                {dropdownLinks.map(link => {
                    return (
                        <li><ListLink to={link.to} primary={link.primary} icon={link.icon}/></li>
                    )
                })}
            </ul>
        </div>
    ) : (
        <a className='nav-link' aria-current='page' href={to}>
            {icon ? (
                <span className='nav-icon' style={{ color: '#02063D', minWidth: 36 }}>
                    {icon}
                </span>
            ) : null}
            {primary}
        </a>
    ))
}

export default NavButton