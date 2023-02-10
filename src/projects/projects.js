import './project.css';
import {useScrollFadeIn} from '../animation.js';
import CoronaFig from '../img/change_point_fig.png';
import daegunRun from '../img/daegunrun.png';
import coronavisual from '../img/coronavisualizing.png';
import weather from '../img/weather.png'
import github from '../img/github.svg';
import { Link } from "react-router-dom";

const Projects = () => {
    const animatedItem = {
        0: useScrollFadeIn('up', 1, 0, 40),

        1: useScrollFadeIn('up', 1, 0, 20),
        2: useScrollFadeIn('right', 1, 0.1, 30),
        3: useScrollFadeIn('right', 1, 0.2, 30),
        4: useScrollFadeIn('right', 1, 0.3, 30),

        5: useScrollFadeIn('up', 1, 0, 20),
        6: useScrollFadeIn('right', 1, 0.1, 30),
        7: useScrollFadeIn('right', 1, 0.2, 30),
        8: useScrollFadeIn('right', 1, 0.3, 30),

        9: useScrollFadeIn('up', 1, 0, 20),
        10: useScrollFadeIn('right', 1, 0.1, 30),
        11: useScrollFadeIn('right', 1, 0.2, 30),
        12: useScrollFadeIn('right', 1, 0.3, 30),

        13: useScrollFadeIn('up', 1, 0, 20),
        14: useScrollFadeIn('right', 1, 0.1, 30),
        15: useScrollFadeIn('right', 1, 0.2, 30),
        16: useScrollFadeIn('right', 1, 0.3, 30),

        17: useScrollFadeIn('up', 1, 0, 20),
        18: useScrollFadeIn('right', 1, 0.1, 30),
        19: useScrollFadeIn('right', 1, 0.2, 30),
        20: useScrollFadeIn('right', 1, 0.3, 30),

        21: useScrollFadeIn('up', 1, 0.4, 50),
        22: useScrollFadeIn('up', 1, 0.4, 80),
        23: useScrollFadeIn('up', 1, 0.4, 25),
        24: useScrollFadeIn('up', 1, 0.4, 50),
        25: useScrollFadeIn('up', 1, 0.4, 50),
      };
    return (
        <div>

            <div className="project" >
                <span className='projecttxt'{...animatedItem[0]}>
                    PROJECT
                </span>
            </div>

            <div className='project2' >
                <img src={CoronaFig} className='CoronaImg'  alt = "face" {...animatedItem[1]}/>
                <div className='Corona'>
                    <span className='Coronatxt1' style={{color: 'red'}} {...animatedItem[2]}>Corona</span> <br />
                    <span className='Coronatxt1'style={{color: 'red'}} {...animatedItem[3]}>Discord</span><br />
                    <span className='Coronatxt1'style={{color: 'red'}} {...animatedItem[4]}>Bot</span>
                </div>
            </div>

            <div className='project3' >
                <div className='Corona'>
                    <span className='DaegunRuntxt' style={{color: 'red'}} {...animatedItem[6]}>Daegun</span> <br />
                    <span className='DaegunRuntxt'style={{color: 'red'}} {...animatedItem[7]}>Run</span><br />
                    <span className='DaegunRuntxt'style={{color: 'red'}} {...animatedItem[8]}>Game</span>
                </div>
                <img src={daegunRun} className='daegunRunImg' alt = "face" {...animatedItem[5]}/>       
            </div>

            <div className='project2' >
                <img src={coronavisual} className='CoronaImg' alt = "face" {...animatedItem[9]}/>
                <div className='Corona'>
                    <span className='Coronatxt1' style={{color: 'red'}} {...animatedItem[10]}>Corona</span> <br />
                    <span className='Coronatxt1'style={{color: 'red'}} {...animatedItem[11]}>Visual</span><br />
                    <span className='Coronatxt1'style={{color: 'red'}} {...animatedItem[12]}>Gui</span>
                </div>
            </div>

            <div className='project3' >
                <div className='Corona'>
                    <span className='DaegunRuntxt' style={{color: 'red'}} {...animatedItem[14]}>Korea</span> <br />
                    <span className='DaegunRuntxt'style={{color: 'red'}} {...animatedItem[15]}>Weather</span><br />
                    <span className='DaegunRuntxt'style={{color: 'red'}} {...animatedItem[16]}>Predict</span>
                </div>
                <img src={weather} className='daegunRunImg' alt = "face" {...animatedItem[13]}/>
            </div>

            <div className='enddiv'>
                <span className='Name' {...animatedItem[21]}>Dowon Lee</span>
                <span className='endtxt2' {...animatedItem[22]}> Learn More About Me</span>
                <Link to="https://github.com/II-DW/" {...animatedItem[23]}><img src={github} alt = "face" className='githubimg'></img></Link>
                <span className='endtxt' {...animatedItem[24]}>Illustrated by Lee Yunji </span>
                <span className='endtxt3' {...animatedItem[25]}>Copyright © From Lee Dowon </span>
            </div>
            

        </div>
    )
}

export default Projects;