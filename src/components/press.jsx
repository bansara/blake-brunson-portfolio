import React from 'react';
import './press.css';
import { links } from './pressData';

const Press = () => {
  
  return ( 
    <div className='press-container'>
      {
        links.map((l,i) => (
          <div className="press-link" key={i}>
            <a href={l.href} target="_blank" rel="noreferrer">
              <img src={l.src} alt={`Blake Brunson in ${l.name}`} />
            </a>
          </div>
        ))
      }
    </div>
   );
}
 
export default Press;