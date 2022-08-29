import React from 'react';
import { MdKeyboardArrowRight } from 'react-icons/md';
import './ListLink.css';

function ListLink(props) {
    const { dropdownLinks, primary, to, style } = props


    return (dropdownLinks ? (
        <div className="dropend">
            <button 
                className='btn btn-link-dropdown dropdown-toggle text-left'
                type='button'
                data-bs-toggle='dropdown'
                aria-expanded='false'
                style={style ? style : {}}
            >
                {primary}<span className='ms-3'><MdKeyboardArrowRight /></span>
            </button>
            <ul className='dropdown-menu child-menu'>
                {dropdownLinks.map(link => {
                    return (
                        <li><ListLink to={link.to} primary={link.primary} icon={link.icon}/></li>
                    )
                })}
            </ul>
        </div>
    ) : (
        <a className='nav-link list-link' aria-current='page' href={to}>
            {primary}
        </a>
    ))
}

export default ListLink