import React, { useState } from 'react'
import coverImage1 from "../../assets/Aboutpage/1.jpeg"; 





function projectcard() { 

    return (
    

<section className="main1"> 
    


    <div className="homemobile2"> 
        <img src={coverImage1}/> 
    </div>
    
    <div className="hometext2"> 
        <h1> ANXIOUS FOODIE </h1>

     <p> Anxious Foodie is a food app designed to help people identify 
         best sellers and to help reduce decisions from hundreds of food choices to a few.
        </p> 
        <button type="submit"> View Project </button>
    </div> 
        
    
    </section> 
    
    ) 
 } 

 export default projectcard;