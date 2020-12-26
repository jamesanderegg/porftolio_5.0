import React from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';
import ToggleButton from '../Components/SidePanel/ToggleButton';

export default function Navbar({pageData, sidePanelClickHandler}){
    
    const scrollToTop = () => {
        scroll.scrollToTop();
      };

    return(
<nav className="nav" id="navbar">
        <div className="nav-content">
          
          <ToggleButton click={sidePanelClickHandler}/>
          <h1 className="nav-name" onClick={scrollToTop}>James Anderegg</h1>
          <ul className="nav-items">
              {pageData.map((item, index) => (<li className="nav-item" key={`nav-${item.name}${index}`}>
                  <Link
                    activeClass="active"
                    to={item.id}
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    >
                    {item.name}</Link>
                  </li>))}
          </ul>
        </div>
      </nav>
    )
}