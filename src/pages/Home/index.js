import React from 'react'; 
import coverImage from "../../assets/Aboutpage/0.jpeg"; 
import coverImage1 from "../../assets/Aboutpage/1.jpeg"; 
import coverImage2 from "../../assets/Aboutpage/2.jpeg";
import Projectcard from '../../components/project-card';
// fix alignments with diff photo sizes and the space between 
// change text and photo content 

function Home() {
  return (
  


<div> 
    

<section className="hero" id="overlay"> 
 
    <div className="hometext"> 
        <h1> Hey, I'm <span style={{ color: '#FFFFFF', fontWeight: 'bold' }}> PATRICK MEEHAN </span></h1>

     <p> I'm a UX Designer who spends way too much time thinking about my user's motivations. 
        I find nothing in life gives me as much pleasure as having an epiphany on a Friday night.
        </p> 
        <button id="alt" type="submit"> Contact Me </button>
    </div> 

</section>

    <section className="main" id="work"> 
        
        <div id="Grove-images"> 
            <img src={coverImage1}/> 
        </div>
        
        <div className="hometext1"> 
            <h1> <span style={{ color: '#2d7fe8' }}> Grove </span> </h1>
    
         <p> Grove is a nonprofit startup trying to solve the problem of keeping politicians 
             more accountable and help local government officials improve communication between their citizens.
            </p> 
            <div className='flex-row'>
            <button id="grovealt" type="submit"> View Website </button> 
            <button className='mx-5' id="grovereg" type="submit"> View Project </button> 
            </div>
        </div>
        
        </section>  

   
      
        <section className="main1"> 
    


    <div className="homemobile2"> 
        <img src={coverImage1}/> 
    </div>
    
    <div className="hometext2"> 
        <h1> ANXIOUS FOODIE </h1>

     <p> Anxious Foodie is a food app designed to help people identify 
         best sellers and to help reduce decisions from hundreds of food choices to a few.
        </p> 
        <div className='flex-row'> 
        <button className='btn-S btn-alt' type="submit"> View Website </button> 
        <button className='btn-S mx-2' type="submit"> View Project </button> 
        </div>
    </div> 
        
    
    </section>  





    <section className="main1 row-reverse"> 
    


    <div className="homemobile2"> 
        <img src={coverImage1}/> 
    </div>
    
    <div className="hometext2"> 
        <h1> ANXIOUS FOODIE </h1>

     <p> Anxious Foodie is a food app designed to help people identify 
         best sellers and to help reduce decisions from hundreds of food choices to a few.
        </p> 
        <div className='flex-row'> 
        <button className='btn-S btn-alt' type="submit"> View Website </button> 
        <button className='btn-S mx-2' type="submit"> View Project </button> 
        </div>
    </div> 
        
    
    </section>  



    <section className="main1"> 
    


    <div className="homemobile2"> 
        <img src={coverImage1}/> 
    </div>
    
    <div className="hometext2"> 
        <h1> ANXIOUS FOODIE </h1>

     <p> Anxious Foodie is a food app designed to help people identify 
         best sellers and to help reduce decisions from hundreds of food choices to a few.
        </p> 
        <div className='flex-row'> 
        <button className='btn-S btn-alt' type="submit"> View Website </button> 
        <button className='btn-S mx-2' type="submit"> View Project </button> 
        </div>
    </div> 
        
    
    </section>  



    <section className="main1 row-reverse"> 
    


    <div className="homemobile2"> 
        <img src={coverImage1}/> 
    </div>
    
    <div className="hometext2"> 
        <h1> ANXIOUS FOODIE </h1>

     <p> Anxious Foodie is a food app designed to help people identify 
         best sellers and to help reduce decisions from hundreds of food choices to a few.
        </p> 
        <div className='flex-row'> 
        <button className='btn-S btn-alt' type="submit"> View Website </button> 
        <button className='btn-S mx-2' type="submit"> View Project </button> 
        </div>
    </div> 
        
    
    </section> 

   
          

            </div>
  );
}

export default Home;
