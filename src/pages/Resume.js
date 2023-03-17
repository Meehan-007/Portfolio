import React from 'react'; 
import coverImage3 from "../assets/Resume/Patrick-Meehan-Resume.jpg"; 



function ResumeForm() {

    return ( 
       <div className='column center margintop'> 
        <img src={coverImage3} alt="Resume"/> 
        <button type='submit'className='margintop'> Download </button>

        </div>

    );
} 

export default ResumeForm; 