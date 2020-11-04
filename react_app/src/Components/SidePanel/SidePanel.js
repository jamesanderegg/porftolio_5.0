import React from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';
import  './SidePanel.css';

const SidePanel = ({show, click, pageData})=> {

    const scrollToTop = () => {
        scroll.scrollToTop();
      };

    let panelClasses = 'side-panel';
    if(show) {
        panelClasses = 'side-panel open';
    }
    return (
    <nav className= {panelClasses} >
        <ul>
            
            <h2 onClick={scrollToTop}>Scroll to top</h2>
            {pageData.map((item, index) => (<li className="side-item" key={`side-${item.name}${index}`}>
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
    </nav>
    );
}

export default SidePanel;