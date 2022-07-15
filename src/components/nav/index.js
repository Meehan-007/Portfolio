
import { capitalizeFirstLetter } from '../../utils/helpers'; 
import React, {useEffect} from 'react'; 



function Nav(props) {
  const {
    
    contactSelected,
    setContactSelected
  } = props; 

  return (
   
      
    <nav className='flex-row align-items-center center full'>
    <ul className="flex-row centerlarge"> 

    
      <li className='mx-5 '> <a href="#projects" onClick={() => setContactSelected(false)}>Projects</a> </li> 
      <li className='mx-5 '>  <a href="#resume" onClick={() => setContactSelected(false)}>Resume</a> </li>
      <li className='mx-5 '> <a href="#about" onClick={() => setContactSelected(false)}>  About me </a> </li>
      <li className={`mx-5 ${contactSelected && 'navActive'}`}> <a href="#contact" onClick={() => setContactSelected(true)}> Contact </a> </li>
      
    </ul>
  </nav>
    
  );
}

export default Nav;