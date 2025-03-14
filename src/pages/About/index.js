import React from 'react'; 
import coverImage from "../../assets/Aboutpage/0.jpeg"; 
import coverImage1 from "../../assets/Aboutpage/1.jpeg"; 
import coverImage2 from "../../assets/Aboutpage/2.jpeg";

// fix alignments with diff photo sizes and the space between 
// change text and photo content 

function About() {
  return (
    <section>
      
      <main className='container'>  
      <h1 className='text-center my-2'>Who am I?</h1> 
      <img src={coverImage} className='my-5' style={{ width: "100%" }} alt="Sea view" />  

         <div className='flex-row space-around my-5'>
             <p> As an experienced Full-Stack Developer, I specialize in designing and building robust applications utilizing the MERN stack. Additionally, I possess strong expertise in developing exceptional user experiences for various web-based products.

With over 1,000 hours of experience in tutoring students, I have honed my skills in effectively communicating complex technical concepts in a simplified and digestible manner. My comprehensive knowledge of web development bootcamps allows me to provide a high level of support and guidance to my students, ensuring their success in achieving their goals.

Overall, my combination of technical expertise and teaching experience positions me as a valuable asset to any team seeking a dedicated Full-Stack Developer with a passion for educating and empowering others.</p>  
         </div> 

      </main> 

    </section>
  );
}

export default About;
