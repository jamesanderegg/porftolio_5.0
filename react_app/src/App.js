import React, { useState }  from "react";

import "./App.css";
import Navbar from "./Components/Navbar";
import Section from "./Components/Section";
import projectsMap from "./utilities/projectsMap";
import pageData from "./utilities/pageDate";
import SidePanel from "./Components/SidePanel/SidePanel";
import Backdrop from "./Components/Backdrop/Backdrop";
import styled from 'styled-components';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Footer from "./Components/Footer/Footer";


const ProjectWrapper = styled.div`
    margin: 0;
    
`;

function App() {
  const [sidePanelOpen, setSidePanelOpen] = useState(false);

  const sidePanelClickHandler = () => {
    setSidePanelOpen((prevState) => {
      console.log("previous SIDEPANEL:", prevState);
      return !prevState;
    });
  };
  const backDropClickHandler = () => {
    setSidePanelOpen(false);
  };

  const checkIndex = (index) => {
    if (index % 2) {
      return false;
    } else {
      return true;
    }
  };

  let backdrop;
  if (sidePanelOpen) {
    backdrop = <Backdrop click={backDropClickHandler} />;
  }
 
  return (
    <Router>
      <Switch>
        {projectsMap.map((project)=>(
          <Route path={`/${project.id}`} key={`route-${project.id}`}>
          <ProjectWrapper>
            {project.component}
          </ProjectWrapper>
          </Route>
        ))}
        <Route path="/">
          <div className="App">
            <Navbar
              pageData={pageData}
              sidePanelClickHandler={sidePanelClickHandler}
            />
            <SidePanel
              pageData={pageData}
              show={sidePanelOpen}
              click={backDropClickHandler}
            />
            {backdrop}
            {pageData.map((item, index) => {
              return (
                <Section
                  title={item.name}
                  subtitle=""
                  dark={checkIndex(index)}
                  id={item.id}
                  component={item.component}
                  key={`section-${item.name}${index}`}
                />
              );
            })}
            <Footer />
          </div>
        </Route>
      </Switch>
     
      
    </Router>
  );
}

export default App;
