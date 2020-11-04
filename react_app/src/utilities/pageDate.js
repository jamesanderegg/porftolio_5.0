import React from "react";
import About from "../Components/About/About";
import Skills from "../Components/Skills/Skills";
import Projects from "../Components/Projects/Projects"
import Contact from '../Components/Contact/Contact'
import Resume from '../Components/Resume/Resume';

const pageData = [
  { name: "About", component: <About />, id: "about" },
  { name: "Skills", component: <Skills />, id: "skills" },
  { name: "Projects", component: <Projects />, id: "projects" },
  { name: "Contact me", component: <Contact />, id: "contact" },
  { name: "My Resume", component: <Resume />, id: "resume" }

];

export default pageData;
