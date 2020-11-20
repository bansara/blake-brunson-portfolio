import React from 'react';
import './press.css';
import { links } from './pressData';

const Press = () => {
  
  return ( 
    <div className='press-container'>
      <div className="press-col">
        <h2>
          <span>PRESS</span>
        </h2>
        <div className="press-col-container">
          <div className="press-col">
            {
              links.map((l, i) => {
                if(i < links.length / 2){
                  return (
                    <p key={i}>
                      <a href={l.href} target='_blank' rel='noreferrer' className='press-link'>{l.name}</a>
                    </p>
                  ) 
                } else {
                  return null
                }
              })
            }
          </div>
          <div className="press-col">
            {
              links.map((l, i) => {
                if(i >= links.length / 2){
                  return (
                    <p key={i}>
                      <a href={l.href} target='_blank' rel='noreferrer' className='press-link'>{l.name}</a>
                    </p>
                  ) 
                } else {
                  return null
                }
              })
            }
          </div>
        </div>

      </div>
    </div>
   );
}
 
export default Press;