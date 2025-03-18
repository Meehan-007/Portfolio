import React from 'react';  
import coverImage3 from "../assets/Resume/resume.jpg"; 
import resume from "../assets/Resume/resume.pdf"



function ResumeForm() {

    return ( 
       <div className='column center margintop'> 
        <img src={coverImage3} alt="Resume"/> 
      <a href={resume} download="Resume.pdf">  <button type='submit'className='margintop reghover'> Download </button> </a> 

        </div>

    );
} 

export default ResumeForm; 