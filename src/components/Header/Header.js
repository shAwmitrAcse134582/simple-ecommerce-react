import React from 'react';
import logo from '../../images/Logo.svg'
import './Header.css';
import {Link} from 'react-router-dom';

const Header = () => {
    return (
    
          <nav className='header'>
            <img src={logo} alt=""/>
            <div>
                <Link to="/">shop</Link>
                <Link to="/orders">orders</Link>
                <Link to="/inventory">inventory</Link>
                <Link to="/about">about</Link>
            </div>
             
          </nav>
        
    );
};

export default Header;