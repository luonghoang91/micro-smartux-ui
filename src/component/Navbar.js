import '../basic_style.css';
import React from 'react';

const Navbar = ({navLink}) => (
    <li className="expandable">
        <div className="hitarea collapsable-hitarea" /><span className="folder">{navLink.name}</span>
        <ul>
            {
                navLink.item.map(a => (
                    <li>
                        <span>{a.name}</span>
                    </li>
                ))
            }
            
        </ul>
    </li>
)
export default Navbar;
