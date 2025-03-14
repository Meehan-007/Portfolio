
import React, { useState } from 'react';
import './index.css';  
import { HashRouter as Router, Routes, Route } from 'react-router-dom'; 

import About from './pages/About';
import Nav from './components/nav'; 
import ContactForm from './pages/contact'; 
import Personalsig from './components/hallmark-sig'; 
import Resume from './pages/Resume'; 
import Home from './pages/Home' 

import NoMatch from './pages/NoMatch';


function App() { 

  const [contactSelected, setContactSelected] = useState(false);
  

  return ( 
    <Router> 
    <div> 
    <Nav 
     contactSelected={contactSelected}
     setContactSelected={setContactSelected}
     ></Nav> 

    <div className='container'> 
    <Routes>  

    <Route 
        path="/" 
        element={<Home />} 
      />
    
    <Route 
        path="/about" 
        element={<About />} 
      /> 
     
      <Route 
        path="/resume" 
        element={<Resume />} 
      />
      <Route 
        path="/contact" 
        element={<ContactForm />} 
      />  

      <Route 
        path="*" 
        element={<NoMatch />} 
      /> 
 
   
    
  
    </Routes> 
    
    </div>   
    <Personalsig className="full"></Personalsig> 
    </div> 
    </Router>
  );
}

export default App;
