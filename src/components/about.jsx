import React from 'react';
import './about.css';
import headshot from '../images/headshot.jpg';

const About = () => {
  return ( 
    <div className="about">
      <div className="bio-photo">
        <img src={headshot} id="headshot" alt='Blake Brunson headshot' />
      </div>
      <div className="bio-text">
        <h2>
          ABOUT BLAKE
        </h2>
        <p>
          Blake Brunson joined Miles Redd’s acclaimed design firm in 2010. She has designed and managed projects in Brooklyn, California, and the Bahamas. She graduated from The University of Alabama in 2010 with a degree in Art History. She has been influenced by Redd’s use of color, and sense of traditional modernism, but has come to have her own unique voice. Brunson favors interiors that are deeply detailed but with an edited modern flair.  Brunson has written and produced stories for House Beautiful and Architectural Digest. In 2017, Brunson was named Next Wave Designer by House Beautiful. She has lived in New York City for many years, though Alabama will always be home.
        </p>
      </div>
    </div>
   );
}
 
export default About;