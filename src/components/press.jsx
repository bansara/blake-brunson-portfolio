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
              {
                l.shouldUseOverlay ? (
                  <div className="press-info">
                    <h2>{l.name}</h2>
                  </div>
                ) : null
              }
            </a>
          </div>
        ))
      }
    </div>
   );
}
 
export default Press;