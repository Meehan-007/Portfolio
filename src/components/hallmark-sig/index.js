import React from 'react';  
import { Link } from 'react-router-dom'; 

import greenlinkedin from '../../assets/homepage/footlinkin.png'; 
import greenmail from '../../assets/homepage/green.mail.svg'

function Personalsig() {
    return ( 
        


              <footer className='column center'>  
                 
                 <div className='flex-row center'><h1 className='text-center'> Let's <span className='primary'> Connect! </span></h1> </div>
                 <div className="space-around flex-row"> 
                    <Link to="mailto: Meehan.007@hotmail.com"><div className="icon mx-1"> <img src={greenmail}/> </div> </Link>
                    <Link to="https://www.linkedin.com/in/patrick-meehanux/" target="_blank">  <div className="icon mx-1"> <img src={greenlinkedin}/>  </div> </Link>
                </div> 
                 
                </footer>
        
);
}

export default Personalsig;
