import React from 'react';
import InstagramIcon from '@material-ui/icons/Instagram';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import './nav.css'

const Nav = () => {
  return ( 
  <nav>
    <h1 className='logo'>BLAKE BRUNSON</h1>
    <div className="nav-content">
      <ul id="nav">
        <li>
          <a href="work">Work</a>
        </li>
        <li>
          <a href="press">Press</a>
        </li>
        <li>
          <a href="about">About</a>
        </li>
      </ul>
    </div>
    <div className="nav-footer">
      <div className="icons">
        <a href="https://www.instagram.com/blakebrunson/" target="_blank" rel="noreferrer">
          <InstagramIcon />
        </a>
        <a href="mailto:brunson.blake@gmail.com?subject=Website%20Contact" target="_blank" rel="noreferrer">
          <MailOutlineIcon />
        </a>
      </div>
      <p id="c">© {new Date().getFullYear()} Blake Brunson</p>
    </div>
  </nav> 
  );
}
 
export default Nav;