
import { capitalizeFirstLetter } from '../../utils/helpers'; 
import React, {useEffect} from 'react'; 
import { Link } from 'react-router-dom'; 
import greenlinkedin from '../../assets/homepage/green.link.svg'; 
import greenmail from '../../assets/homepage/green.mail.svg'
//need link



function Nav(props) {
  const {
    
    contactSelected,
    setContactSelected
  } = props; 

  return (
   
      
    <nav className='flex-row align-items-center space-between full'>
    <ul className="flex-row"> 

    {/* onClick={() => setContactSelected(false)}> */}
    
      <Link to="/" className='mx-2 '> Projects </Link> 
      <Link to="/resume" className='mx-2 '>  Resume </Link>
      <Link to="/about" className='mx-2 '>  About me </Link>
      <Link to="/contact" className={`mx-2 ${contactSelected && 'navActive'}`}>  Contact </Link>
      
    </ul> 

    <div class="space-around flex-row w-10"> 
            <div class="icon"> <img src={greenmail} alt="mail icon"/> </div> 
            <div class="icon"> <img src={greenlinkedin} alt="linkedin"/> </div>
        </div>
  </nav>
    
  );
}

export default Nav;