import React from 'react'; 
import coverImage1 from "../../assets/Aboutpage/1.jpeg"; 
import greenlinkedin from '../../assets/homepage/green.link.svg'; 
import greenmail from '../../assets/homepage/green.mail.svg'

function Personalsig() {
    return ( 
        


              <footer className='column center'>  
                 
                 <div className='flex-row center'><h1 className='text-center'> Let's <span className='primary'> Connect! </span></h1> </div>
                 <div className="space-around flex-row"> 
                    <div className="icon mx-1"> <img src={greenmail}/> </div> 
                    <div className="icon mx-1" style={{ backgroundColor: 'white', borderRadius: '90px' }}> <img src={greenlinkedin}/>  </div>
                </div> 
                 
                </footer>
        
);
}

export default Personalsig;
