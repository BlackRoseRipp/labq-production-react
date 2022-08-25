import React from 'react';
import './ListLink.css';

function ListLink(props) {
    const { icon, arrow, primary, to } = props


    return (
        <a className='nav-link' aria-current='page' href={to}>
            {icon ? (
                <span className='nav-icon' style={{ color: '#02063D', minWidth: 36 }}>
                    {icon}
                </span>
            ) : null}
            {primary}
        </a>
    )
}

export default ListLink