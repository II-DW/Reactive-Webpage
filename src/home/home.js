//import pythonimage from './img/python.png';
import './home.css';
import logo from '../img/logo.png';
import {useScrollFadeIn} from '../animation.js';
import React from 'react';
import logo2 from '../img/logo.svg';
import github from '../img/github.svg';
import { Link } from "react-router-dom";


const Home = () => {
    const animatedItem = {
        0: useScrollFadeIn('up', 1, 0, 20),
        1: useScrollFadeIn('up', 1, 0.1, 70),
        2: useScrollFadeIn('up', 1, 0.2, 50),
        3: useScrollFadeIn('up', 1, 0.3, 50),
        4: useScrollFadeIn('up', 1, 0.4, 50),
        5: useScrollFadeIn('up', 1, 0.4, 50),
        6: useScrollFadeIn('up', 1, 0.4, 50),
        7: useScrollFadeIn('up', 1, 0.4, 50),
        8: useScrollFadeIn('up', 1, 0.4, 80),
        9: useScrollFadeIn('up', 1, 0.4, 25),
        10: useScrollFadeIn('up', 1, 0.4, 50),
        11: useScrollFadeIn('up', 1, 0.4, 50),
      };
    return (
        <div >

            <div className='divPortFolio' >
                <img src={logo} className='logoimg' alt = "face" {...animatedItem[0]}/>
                <span className='logotxt' {...animatedItem[1]}>Welcome To My PortFlio</span>
            </div>
            
            <div classNmae='page2'>
                <div className='divPortFolio2' >
                    <div className='box' {...animatedItem[2]}>
                        <Link to="/projects" className='links'><span className='boxtxt'>Projects</span></ Link>
                        <hr className='boxline' />
                        <Link to="https://github.com/II-DW/Predict_Bot" className='links'><span className='boxtxt2'>● Discord Corona predict bot</span> <br /> </ Link>
                        <Link to="https://github.com/II-DW/DaegunRun" className='links'><span className='boxtxt2'>● DaegunRun</span> <br /> </ Link>
                        <Link to="https://github.com/II-DW/CoronaVisualizing" className='links'><span className='boxtxt2'>● Corona Visualizing GUI</span><br /> </ Link>
                        <Link to="https://github.com/II-DW/TemperaturePredict" className='links'><span className='boxtxt2'>● Korea Wather Predict</span><br /> </ Link>
                        <Link to="https://github.com/II-DW/AiChatBot" className='links'><span className='boxtxt2'>● Ai Chat Bot (developing) </span></ Link>
                    </div>

                    <div className='box'{...animatedItem[3]}>
                        <span className='boxtxt'>Launguages</span>
                        <hr className='boxline' />
                        <span className='boxtxt2'>● Python</span> <br />
                        <span className='boxtxt2'>● C</span> <br />
                        <span className='boxtxt2'>● JavaScript (studying)</span><br />
                        <span className='boxtxt2'>● Java (studying)</span><br />
                        <span className='boxtxt2'>● R (studying)</span>
                    </div>

                    <div className='box' {...animatedItem[4]}>
                        <span className='boxtxt'>Field</span>
                        <hr className='boxline' />
                        <span className='boxtxt2'>● AI</span>
                        <span className='boxtxt2'>● App</span>
                        <span className='boxtxt2'>● Web</span>
                    </div>
                </div>
            </div>
            <div className='page3'> 
                <img src={logo2} className="App-logo" alt = "face" {...animatedItem[5]}/>
                <span className='reacttxt' {...animatedItem[6]}> This webpage is written by react.js</span>
            </div>
            <div className='enddiv'>
                <span className='Name' {...animatedItem[7]}>Dowon Lee</span>
                <span className='endtxt2' {...animatedItem[8]}> Learn More About Me</span>
                <Link to="https://github.com/II-DW/" {...animatedItem[9]}><img src={github} alt = "face" className='githubimg'></img></Link>
                <span className='endtxt' {...animatedItem[10]}>Illustrated by Lee Yunji </span>
                <span className='endtxt3' {...animatedItem[11]}>Copyright © From Lee Dowon </span>
            </div>
        </div>
    )
}

export default Home;