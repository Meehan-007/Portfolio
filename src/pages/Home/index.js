import React from 'react'; 
import { Link } from 'react-router-dom';
import apexCover from "../../assets/homepage/Apex.png"; 
import deepthoughtCover from "../../assets/homepage/deepthought.png"; 
import bookCover from "../../assets/homepage/book.png";  
import weatherCover from "../../assets/homepage/weather.png";  
import bibleBotCover from "../../assets/homepage/bibleBotCover.png"; 

// fix alignments with diff photo sizes and the space between 
// change text and photo content 

function Home() {



  return (
  


<div> 
    

<section className="hero"> 
  <div id="overlay"> 
    <div className="hometext"> 
        <h1> Hey, I'm <span style={{ color: '#FFFFFF', fontWeight: 'bold' }}> PATRICK MEEHAN </span></h1>

     <p> I am a Full stack developer with experience in UX design, and I have built countless websites and taught hundreds of students to design and develop sites.
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
    
        

<p className='my-2'>
  Apex Smoothies is a small business for which I helped launch a web application. It features multiple menus categorized into specialized sections. Users can easily buy smoothies online with a credit card using Stripe.
</p>
<p className='my-2'>
  I used MySQL to manage all the food items, along with React, Node, and Express. I integrated Stripe's API to handle the checkout process directly on the site, ensuring it is responsive for mobile devices.
</p>
            <div className='flex-row my-2'>
           <Link to="https://apex-smoothie.onrender.com" target="_blank" > <button id="grovealt" className='buttonmobile' type="submit"> View Website </button> </Link>
           <Link to="https://github.com/Meehan-007/Apex-Smoothie-" target="_blank" > <button className='mx-5 reghover buttonmobile' id="grovereg" type="submit"> View Project </button> </Link>
            </div>
        </div>
        
        </section>  

   <section className="main1"> 
    <div className="hometext2"> 
         <img style={{ width: '75%' }} src={bibleBotCover}/>
    </div>

    <div className="hometext2"> 
        <h1> Bible Bot App  {}</h1>

        <p className='my-2'>
  This app allows users to receive texts from random verses in the Bible each day. Bots are used to send everyone messages in the morning.
</p> 
<p className='my-2'>
  This app was built using React, Node, Express, MongoDB
</p>
        <div className='flex-row my-2'> 
      <Link to="https://bible-bot-4ue1.onrender.com/" target="_blank"> <button className='btn-S btn-alt althover' type="submit"> View Website </button> </Link> 
      <Link to="https://github.com/Meehan-007/Bible-bot" target="_blank"> <button className='btn-S mx-2 reghover' type="submit"> View Project </button> </Link> 
        </div>
    </div> 
    </section> 
    
        <section className="main1 row-reverse"> 
    


    <div className="homemobile2"> 
        <img src={bookCover}/> 
    </div>
    
    <div className="hometext2"> 
        <h1> Book App  {}</h1>

        <p className='my-2'>
  The Book App is a web application that allows users to search for any book using a third-party API from Google. With a simple search, users can find information about any book they want. They can create a favorites list, delete books from it, log in, and log out.
</p> 
<p className='my-2'>
  This app was built using React, Node, Express, MongoDB, and GraphQL.
</p>
        <div className='flex-row my-2'> 
      <Link to="https://booksearch-mrbj.onrender.com/" target="_blank"> <button className='btn-S btn-alt althover' type="submit"> View Website </button> </Link> 
      <Link to="https://github.com/Meehan-007/Book-Search" target="_blank"> <button className='btn-S mx-2 reghover' type="submit"> View Project </button> </Link> 
        </div>
    </div> 
        
    
    </section>  





    <section className="main1 "> 
    


    <div className="homemobile2"> 
        <img src={deepthoughtCover}/> 
    </div>
    
    <div className="hometext2"> 
        <h1> Deep Thoughts </h1>

        <p className='my-2'>Deep Thoughts is a social media application that allows users to add friends, react to posts, create posts, create accounts, and delete posts.</p>  

<p className='my-2'>This app was built using React, Node, Express, MongoDB, and GraphQL. It also uses AWS for hosting data in the cloud.</p>

        <div className='flex-row my-2'> 
        <Link to="https://deep-thought-class.onrender.com" target="_blank">   <button className='btn-S btn-alt althover' type="submit"> View Website </button> </Link>
        <Link to="https://github.com/Meehan-007/deep-thought-class" target="_blank">  <button className='btn-S mx-2 reghover' type="submit"> View Project </button> </Link>
        </div>
    </div> 
        
    
    </section>  



    <section className="main1 row-reverse"> 
    


    <div className="homemobile2" id='weather'> 
        <img src={weatherCover}/> 
    </div>
    
    <div className="hometext2"> 
        <h1> Weather App </h1>

        <p className='my-2'>This site allows you to see the weather for this week in any city or town located in the United States.</p> 

<p className='my-2'>This app was built using HTML, CSS, and JavaScript, and it uses a weather API.</p>


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
