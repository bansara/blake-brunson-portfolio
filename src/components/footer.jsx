import React from 'react';
import './footer.css';

const root = document.documentElement;

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

const Footer = () => {
  return ( 
    <div id="footer">
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
   );
}
 
export default Footer;