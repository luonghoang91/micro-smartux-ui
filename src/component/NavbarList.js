import React from 'react';
import Navbar from './Navbar';
import '../basic_style.css';
const NavbarList = ({ navLinks }) => {

    return (
        <ul className="filetree treeview">
            {
                 navLinks.map(linka => (
                    <Navbar key={linka.id} navLink={linka} ></Navbar>
                ))
            }
        </ul>
    );
};

export default NavbarList;
