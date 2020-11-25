import React from 'react';
import './footer.css';



const Footer = () => {
  return ( 
    <div id="footer">
      <p id="c">© {new Date().getFullYear()} Blake Brunson</p>
      <p id="dev">
      Website by
      <a href="https://bansara.dev" target="_blank" rel="noreferrer">&nbsp;Josh Geisler</a>
      </p>
    </div>
   );
}
 
export default Footer;