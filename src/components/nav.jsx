import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import InstagramIcon from '@material-ui/icons/Instagram';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import './nav.css'

const Nav = () => {
  const [open, setOpen] = useState(false);
  const b1 = useRef(null);
  const b2 = useRef(null);
  const b3 = useRef(null);
  const content = useRef(null);
  const footer = useRef(null);
  const root = document.documentElement;

  const handleOpen = () => {
    // handles mobile nav animation
    if(!open) {
      // slide in menu
      content.current.classList.add('nav-open');
      footer.current.classList.add('nav-open');
      // animate burger to X
      b2.current.style.opacity = '0';
      b1.current.style.transform = 'rotate(45deg) translate(9px, 5px)';
      b3.current.style.transform = 'rotate(-45deg) translate(9px, -5px)';
      // update state
      setOpen(true)
    } else {
      // slide out menuy
      content.current.classList.remove('nav-open');
      footer.current.classList.remove('nav-open');
      // animate X to burger
      b2.current.style.opacity = '1';
      b1.current.style.transform = 'rotate(0deg) translate(0,0)';
      b3.current.style.transform = 'rotate(0deg) translate(0,0)';
      // update state
      setOpen(false)
    }
  }

  const teal = () => {
    root.style.setProperty('--bg', '#425558');
    root.style.setProperty('--text', 'whitesmoke');
    root.style.setProperty('--accent', '#C9C5BA');
  }
  const light = () => {
    root.style.setProperty('--bg', 'white');
    root.style.setProperty('--text', '#222');
    root.style.setProperty('--accent', '#6e6e30');
  }
  const dark = () => {
    root.style.setProperty('--bg', '#222');
    root.style.setProperty('--text', 'whitesmoke');
    root.style.setProperty('--accent', '#647f83');
  }

  return ( 
    <nav>
      <div id="nav-header">
        <div id="burger" onClick={handleOpen}>
          <div id="b1" ref={b1}></div>
          <div id="b2" ref={b2}></div>
          <div id="b3" ref={b3}></div>
        </div>
        <Link to="/">
          <h1 className='logo'>BLAKE BRUNSON</h1>
        </Link>
      </div>
      <div className="nav-content" ref={content}>
        <ul id="nav">
            <Link to="work" onClick={handleOpen}>
              <li>
                Work
              </li>
            </Link>
            <Link to="press" onClick={handleOpen}>
              <li>
                Press
              </li>
            </Link>
            <Link to="bio" onClick={handleOpen}>
              <li>
                Bio
              </li>
            </Link>
        </ul>
      </div>
      <div className="nav-footer" ref={footer}>
        <div className="icons">
          <a href="https://www.instagram.com/blakebrunson/" target="_blank" rel="noreferrer">
            <InstagramIcon />
          </a>
          <a href="mailto:brunson.blake@gmail.com?subject=Website%20Contact" target="_blank" rel="noreferrer">
            <MailOutlineIcon />
          </a>
        </div>
        <p id="c">© {new Date().getFullYear()} Blake Brunson</p>
        <p>
          <span
            onClick={teal}
          >
            Teal&nbsp;&nbsp;&nbsp;
          </span>
          <span
            onClick={light}
          >
            Light&nbsp;&nbsp;&nbsp;
          </span>
          <span
            onClick={dark}
          >
            Dark
          </span>
        </p>
      </div>
    </nav> 
  );
}
 
export default Nav;