import React from 'react';
import './work.css';
import interior from '../images/interior.jpg';
import interior2 from '../images/interior2.jpg';
import interior3 from '../images/interior3.jpg';
import interior4 from '../images/interior4.jpg';
import interior5 from '../images/interior5.jpg';
import interior6 from '../images/interior6.jpg';
import interiorA from '../images/interiorA.jpg';
import interiorB from '../images/interiorB.jpg';

const Work = () => {
  const interiors = [
    interior, interiorA, interior2, interiorB, interior3, interior4, interior5, interior6
  ]
  return ( 
    <div className="work">
      {
        interiors.map((src, i) => (
          <div className={`project ${i % 2 === 0 ? 'no-border' : ''}`} key={i}>
            <img src={src} alt="interior design by Blake Brunson"/>
            <div className={`info ${i % 3 !== 0 ? 'no-name' : ''}`}>
              <h2>
                Project Name
              </h2>
            </div>
          </div>
        ))
      }
    </div>
   );
}
 
export default Work;