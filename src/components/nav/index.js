
import { capitalizeFirstLetter } from '../../utils/helpers'; 
import React, {useState} from 'react'; 
import { Link } from 'react-router-dom'; 
import greenlinkedin from '../../assets/homepage/green.link.svg'; 
import greenmail from '../../assets/homepage/green.mail.svg'
import { MdClose } from "react-icons/md"
import { FiMenu } from "react-icons/fi" 



function Nav(props) {
  const [activeLink, setActiveLink] = useState('');

  const handleClick = (link) => {
    setActiveLink(link);
  }

  const closeMenu = () => {
    setNavbarOpen(false)
  }
  const [navbarOpen, setNavbarOpen] = useState(false) 
  const handleToggle = () => {
    setNavbarOpen(!navbarOpen)
  }   

  return (
   
      
    <nav className='flex-row align-items-center space-between full'> 

<div className="web-none mobile-show"> 

<button className='menubar' onClick={handleToggle}>
  {navbarOpen ? (
    <MdClose style={{ color: "#fff" }} className="icon" />
  ) : (
    <FiMenu style={{ color: "#7b7b7b" }} className="icon" />
  )}
</button> 

<ul className={`menuNav ${navbarOpen ? " showMenu" : ""}`}>  
<div className="column center my-5"> 
<Link
  to="/"
  activeClassName="active-link" 
  className="sidenav my-2"
  onClick={() => closeMenu()}
  exact
>
  Projects
</Link>
<Link
  to="/resume"
  activeClassName="active-link" 
  className="sidenav my-2"
  onClick={() => closeMenu()}
  exact>
  Resume
</Link> 
<Link
  to="/about"
  activeClassName="active-link" 
  className="sidenav my-2"
  onClick={() => closeMenu()}
  exact>
  About Me
</Link>
<Link
  to="/contact"
  activeClassName="active-link" 
  className="sidenav my-2"
  onClick={() => closeMenu()}
  exact>
  Contact
</Link>  
 </div> 
</ul>
  </div> 

<ul className="flex-row mobile-hide"> 
        <Link to="/" className={`mx-1 ${activeLink === '' && 'navActive'}`} onClick={() => handleClick('')}> Projects </Link> 
        <Link to="/resume" className={`mx-1 ${activeLink === 'resume' && 'navActive'}`} onClick={() => handleClick('resume')}>  Resume </Link>
        <Link to="/about" className={`mx-1 ${activeLink === 'about' && 'navActive'}`} onClick={() => handleClick('about')}>  About me </Link>
        <Link to="/contact" className={`mx-1 ${activeLink === 'contact' && 'navActive'}`} onClick={() => handleClick('contact')}>  Contact </Link>
      </ul>

    <div class="space-around flex-row mobile-hide"> 
    <Link to="mailto: Meehan.007@hotmail.com"> <div class="icon mx-1"> <img src={greenmail} alt="mail icon"/> </div> </Link>
          <Link to="https://www.linkedin.com/in/patrick-meehanux/" target="_blank">  <div class="icon mx-1"> <img src={greenlinkedin} alt="linkedin"/> </div> </Link> 
        </div>
  </nav>
    
  );
}

export default Nav;