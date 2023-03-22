
import { capitalizeFirstLetter } from '../../utils/helpers'; 
import React, {useState} from 'react'; 
import { Link } from 'react-router-dom'; 
import greenlinkedin from '../../assets/homepage/green.link.svg'; 
import greenmail from '../../assets/homepage/green.mail.svg'
//need link



function Nav(props) {
  const [activeLink, setActiveLink] = useState('');

  const handleClick = (link) => {
    setActiveLink(link);
  }

  return (
   
      
    <nav className='flex-row align-items-center space-between full'>

<ul className="flex-row"> 
        <Link to="/" className={`mx-2 ${activeLink === '' && 'navActive'}`} onClick={() => handleClick('')}> Projects </Link> 
        <Link to="/resume" className={`mx-2 ${activeLink === 'resume' && 'navActive'}`} onClick={() => handleClick('resume')}>  Resume </Link>
        <Link to="/about" className={`mx-2 ${activeLink === 'about' && 'navActive'}`} onClick={() => handleClick('about')}>  About me </Link>
        <Link to="/contact" className={`mx-2 ${activeLink === 'contact' && 'navActive'}`} onClick={() => handleClick('contact')}>  Contact </Link>
      </ul>

    <div class="space-around flex-row"> 
    <Link to="mailto: Meehan.007@hotmail.com"> <div class="icon mx-1"> <img src={greenmail} alt="mail icon"/> </div> </Link>
          <Link to="https://www.linkedin.com/in/patrick-meehanux/" target="_blank">  <div class="icon mx-1"> <img src={greenlinkedin} alt="linkedin"/> </div> </Link> 
        </div>
  </nav>
    
  );
}

export default Nav;