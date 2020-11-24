import React from 'react';
import './footer.css';



const Footer = () => {
  return ( 
    <div id="footer">
      <p id="c">© {new Date().getFullYear()} Blake Brunson</p>
    </div>
   );
}
 
export default Footer;