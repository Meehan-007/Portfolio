import React from 'react'; 
import coverImage from "../../assets/Aboutpage/0.jpeg"; 
import coverImage1 from "../../assets/Aboutpage/1.jpeg"; 
import coverImage2 from "../../assets/Aboutpage/2.jpeg";

// fix alignments with diff photo sizes and the space between 
// change text and photo content 

function NoMatch() {
  return (
    <section>
      
      <main className='container'>  
      <h1 className='text-center my-2'>Who am I?</h1> 
      <img src={coverImage} className='my-5' style={{ width: "100%" }} alt="Sea view" />  

         <div className='flex-row space-around my-5'> 
             <img src={coverImage1} alt="Sam" className="img-thumbnail"/> 
             <p className='container-small'> PENIS ipsum dolor sit amet, consectetur 
             adipiscing elit, sed do eiusmod tempor incididunt 
             ut labore et dolore magna aliqua. Ut enim ad minim 
             veniam, quis nostrud exercitation ullamco laboris 
             nisi ut aliquip ex ea commodo consequat. Duis aute 
             irure dolor in reprehenderit in voluptate velit esse cillum 
             dolore eu fugiat nulla pariatur. Excepteur sint occaecat 
             cupidatat non proident, sunt in culpa qui officia deserunt mollit anim
              id est laborum.</p>  
         </div> 

         <p>  ipsum dolor sit amet, consectetur 
             adipiscing elit, sed do eiusmod tempor incididunt 
             ut labore et dolore magna aliqua.  Excepteur sint occaecat 
             cupidatat non proident, sunt in culpa qui officia deserunt mollit anim
              id est laborum.</p>  
         

              <div className='flex-row space-around my-5'> 
              
             <p className='container-small'> PENIS ipsum dolor sit amet, consectetur 
             adipiscing elit, sed do eiusmod tempor incididunt 
             ut labore et dolore magna aliqua. Ut enim ad minim 
             veniam, quis nostrud exercitation ullamco laboris 
             nisi ut aliquip ex ea commodo consequat. Duis aute 
             irure dolor in reprehenderit in voluptate velit esse cillum 
             dolore eu fugiat nulla pariatur. Excepteur sint occaecat 
             cupidatat non proident, sunt in culpa qui officia deserunt mollit anim
              id est laborum.</p>  
              <img src={coverImage2} alt="vietnam cliffs" className="img-thumbnail"/>
         </div> 

         <p> Lorem ipsum dolor sit amet, consectetur 
             adipiscing elit, sed do eiusmod tempor incididunt 
             ut labore et dolore magna aliqua. Ut enim ad minim 
             veniam, quis nostrud exercitation ullamco laboris 
             nisi ut aliquip ex ea commodo consequat. Duis aute 
             irure dolor in reprehenderit in voluptate velit esse cillum 
             dolore eu fugiat nulla pariatur. Excepteur sint occaecat 
             cupidatat non proident, sunt in culpa qui officia deserunt mollit anim
              id est laborum.</p>  

       


      </main> 


  

    </section>
  );
}

export default NoMatch;
