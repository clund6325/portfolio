import React from 'react';
import Fade from 'react-reveal';
import 'react-typed/dist/animatedCursor.css'
import Typed from 'react-typed';
import './Home.scss';


const Hero = () => {
  

  
  return(
    
    <div className='hero-cont' >
    <div className='hero-img'> 
      <div className='center-col'>
         <Fade duration={2000}>
           <h1>Cameron <br></br> Lund</h1>
           <div>
                <Typed
                className='typed-hero'
                strings={[
                  "Design",
                  "Development",
                  "Full-Stack Web Developer"]}
                    typeSpeed={40}
                    backSpeed={50}
                    // loop
                    >
                </Typed>
            </div>

        </Fade>
    </div>
  </div>
  </div>
  
  )
};

export default Hero;




