
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
    <Link to="mailto: Meehan.007@hotmail.com"> <div class="icon"> <img src={greenmail} alt="mail icon"/> </div> </Link>
          <Link to="https://www.linkedin.com/in/patrick-meehanux/" target="_blank">  <div class="icon"> <img src={greenlinkedin} alt="linkedin"/> </div> </Link> 
        </div>
  </nav>
    
  );
}

export default Nav;