import { Link, Route, BrowserRouter, Routes  } from "react-router-dom";
import { useState } from 'react';
import Home from './home/home.js';
import Projects from './projects/projects.js';
import ScrollToTop from './ScrollToTop';

import './app.css';
import logo from './img/logo.png';

import Discord from './projects/detail/CoronaDiscord.js';
import DaegunRun from './projects/detail/DaegunRun.js';
import CoronaVisualizing from './projects/detail/CoronaVisuallizing.js';
import Koreaweather from "./projects/detail/KoreaWeather.js";


const ProjectNav = () => {
  return (
    <div className="project_box">
      <Link to="/projects/projects" className='project_txt'>Projects</Link>
      <Link to="/projects/discord" className='project_txt'>Corona Discord Bot</Link>
      <Link to="/projects/daegun" className='project_txt'>DaegunRun</Link>
      <Link to="/projects/visual" className='project_txt'>Corona visualizing</Link>
      <Link to="/projects/weather" className='project_txt'>Korea Weather</Link>
    </div>
  )
}

const Nav = () => {
  const [TOF, MouseOver] = useState(false);
  const [TOF2, MouseOver2] = useState(false);
  const overmouse = () => {
    MouseOver ((current) => !current);
  };

  const overmouse2 = () => {
    if (TOF) {
      MouseOver2((current) => !current)
    }
  }

  return (
    <div className ='divverticallinks' >
    <div className='divlinks'> 
      <li className='listyle'> 
      <Link to="/home" className='linkstyle'><img src={logo} className='logoimg1' alt = "face"/> </Link>
      </li> 
      <li className='listyle' onMouseEnter={overmouse} onMouseLeave={overmouse}>
        <Link to="/projects" className='linkstyle'>Projects</Link>
        <div onMouseEnter={overmouse2} onMouseLeave={overmouse2}>
          {TOF || TOF2? <ProjectNav /> : null} 
        </div>
      </li>  
    </div>
     <hr />
    </div>
    
  )
}


function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <ScrollToTop />
        {true? <Nav /> : null} 
      <Routes>
        <Route index element={<Home />} />
        <Route path="home" element={<Home />} component={() => <redirect to='/home' />}/>
        <Route path="projects"> 
          <Route path="projects" element={<Projects />} />
          <Route path="discord" element={<Discord />} />
          <Route path="daegun" element={<DaegunRun />} />
          <Route path="visual" element={<CoronaVisualizing />} />
          <Route path="weather" element={<Koreaweather />} />
        </Route>
      </Routes>
      
    </BrowserRouter>
    
  );
}

export default App;
