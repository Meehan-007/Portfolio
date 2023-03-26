import React from 'react'; 
import { Link } from 'react-router-dom';
import apexCover from "../../assets/homepage/APEX.png"; 
import deepthoughtCover from "../../assets/homepage/deepthought.png"; 
import pizzaCover from "../../assets/homepage/pizza.png"; 
import bookCover from "../../assets/homepage/book.png";  
import weatherCover from "../../assets/homepage/weather.png";  

// fix alignments with diff photo sizes and the space between 
// change text and photo content 

function Home() {
  return (
  


<div> 
    

<section className="hero"> 
  <div id="overlay"> 
    <div className="hometext"> 
        <h1> Hey, I'm <span style={{ color: '#FFFFFF', fontWeight: 'bold' }}> PATRICK MEEHAN </span></h1>

     <p> I am a front-end engineer with experience in UX design, and I have built countless websites using the MERN stack.
        </p> 
       <Link to="/contact">  <button id="alt" type="submit"> Contact Me </button> </Link>
    </div> 
    </div>
</section>

    <section className="main" id="work"> 
        
        <div id="Grove-images"> 
            <img src={apexCover} alt="cover of a smoothie app website"/> 
        </div>
        
        <div className="hometext1"> 
            <h1> <span style={{ color: '#2d7fe8' }}> Apex Smoothies </span> </h1>
    
         <p className='my-2'> Apex Smoothies is a health-focused smoothie bar that wanted an app to expand their presence and branding. 
             I developed an app that allows users to explore the menu and learn about the nutritional information of each smoothie.
            </p> 
            <div className='flex-row my-2'>
           <Link to="https://apex-smoothies.herokuapp.com/" target="_blank" > <button id="grovealt" className='buttonmobile' type="submit"> View Website </button> </Link>
           <Link to="https://github.com/Meehan-007/Apex-Smoothie-" target="_blank" > <button className='mx-5 reghover buttonmobile' id="grovereg" type="submit"> View Project </button> </Link>
            </div>
        </div>
        
        </section>  

   
      
        <section className="main1"> 
    


    <div className="homemobile2"> 
        <img src={bookCover}/> 
    </div>
    
    <div className="hometext2"> 
        <h1> Book App </h1>

     <p className='my-2'> The Book App is a web application that allows users to search for any book using a third-party API from Google. 
         With a simple search, users can find information about any book they want, including the title, author, and description.
        </p> 
        <div className='flex-row my-2'> 
      <Link to="https://book-powers-4us.herokuapp.com/" target="_blank"> <button className='btn-S btn-alt althover' type="submit"> View Website </button> </Link> 
      <Link to="https://github.com/Meehan-007/hw21" target="_blank"> <button className='btn-S mx-2 reghover' type="submit"> View Project </button> </Link> 
        </div>
    </div> 
        
    
    </section>  





    <section className="main1 row-reverse"> 
    


    <div className="homemobile2"> 
        <img src={deepthoughtCover}/> 
    </div>
    
    <div className="hometext2"> 
        <h1> Deep Thoughts </h1>

     <p className='my-2'> Deep Thoughts is a social media application that enables users to share their 
         thoughts with others by creating posts, which can then be reacted to or commented on by other users. 
         This platform allows for the exchange of ideas and opinions in a collaborative environment, 
         facilitating conversations and promoting engagement among its users. 
        </p> 
        <div className='flex-row my-2'> 
        <Link to="https://deep-thoughts-are-real.herokuapp.com/" target="_blank">   <button className='btn-S btn-alt althover' type="submit"> View Website </button> </Link>
        <Link to="https://github.com/Meehan-007/deep-thought-class" target="_blank">  <button className='btn-S mx-2 reghover' type="submit"> View Project </button> </Link>
        </div>
    </div> 
        
    
    </section>  



    <section className="main1"> 
    


    <div className="homemobile2"> 
        <img src={pizzaCover}/> 
    </div>
    
    <div className="hometext2"> 
        <h1> Pizza Hunt </h1>

     <p className='my-2'> This application is a parody app that satirizes the idea of topic-based social media apps. 
         Pizza Hunt allows users to unleash their creativity by designing unconventional pizzas with 
         fun names and sharing them with other users. In this way, users can engage in lighthearted conversations
          about their pizza creations and have fun exploring the endless possibilities of this beloved dish.
        </p> 
        <div className='flex-row my-2'> 
        <Link to="https://pizza-hunt17.herokuapp.com/" target="_blank"> <button className='btn-S btn-alt althover' type="submit"> View Website </button> </Link>
        <Link to="https://github.com/Meehan-007/pizza-hunt" target="_blank"> <button className='btn-S mx-2 reghover' type="submit"> View Project </button> </Link>
        </div>
    </div> 
        
    
    </section>  



    <section className="main1 row-reverse"> 
    


    <div className="homemobile2" id='weather'> 
        <img src={weatherCover}/> 
    </div>
    
    <div className="hometext2"> 
        <h1> Weather App </h1>

     <p className='my-2'> This site allows you to see the weather for this week in any city or town located in the United states.
        </p> 

        <div className='flex-row my-2'> 
       <Link to="https://meehan-007.github.io/week6_hw/" target="_blank"> <button className='btn-S btn-alt althover' type="submit"> View Website </button> </Link>
       <Link to="https://github.com/Meehan-007/week6_hw" target="_blank">  <button className='btn-S mx-2 reghover' type="submit"> View Project </button> </Link>
        </div>
    </div> 
        
    
    </section> 

   
          

            </div>
  );
}

export default Home;
