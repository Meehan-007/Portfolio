import About from './components/About';
import './index.css'; 
import Nav from './components/nav'; 
import ContactForm from './components/contact'; 
import Personalsig from './components/hallmark-sig';
import React, { useState } from 'react';

function App() { 

  const [contactSelected, setContactSelected] = useState(false);
  

  return (
    <div>
     <Nav 
     contactSelected={contactSelected}
  setContactSelected={setContactSelected}
     ></Nav>

     {!contactSelected ? (
  <>
    <About></About> 
    <Personalsig className="full"></Personalsig>
  </>
) : (
    <ContactForm></ContactForm>
  )}
    </div>
  );
}

export default App;
