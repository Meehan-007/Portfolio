import React from 'react'; 
import coverImage1 from "../../assets/Aboutpage/1.jpeg"; 

function Personalsig() {
    return ( 
        <section>
<div className='altbackground py-1'>  

<div className='container text-center'> 

  <h4 className='my-2'> Here is a quote to convince you I am a man of sophstication</h4>  

  <h6 className='my-2'> "Nitwit! Blubber! Oddment! Tweak!" - <span> Albus Dumbeldore</span></h6>

    <div className='flex-row space-around '>
    <img src={coverImage1} alt="Me on a boat" className="img-thumbnail"/> 
    <img src={coverImage1} alt="Me on a boat" className="img-thumbnail"/>  
    <img src={coverImage1} alt="Me on a boat" className="img-thumbnail"/> 
    </div> 
    </div>
    </div>  



</section>
);
}

export default Personalsig;
