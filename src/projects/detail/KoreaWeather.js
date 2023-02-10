// Moudule Import
import './Detail.css'
import { Link } from "react-router-dom";
import React from 'react';
import {useScrollFadeIn} from '../../animation.js';
import github from '../../img/github.svg';


// IMAGE Import
import AImage from '../../img/artificial-intelligence.png'; 
import cloud from '../../img/cloudy.png';
import pythonImg from '../../img/python.png';
import pandas from '../../img/pandas_white.svg';
import prophet from '../../img/prophet.svg';
import weather from '../../img/weather.png'


const Koreaweather = () => {
    const animatedItem = {
        0: useScrollFadeIn('up', 2, 0.2, 70),
        1: useScrollFadeIn('up', 2, 0.4, 70),

        8: useScrollFadeIn('up', 2, 0.6, 70),
        9: useScrollFadeIn('up', 2, 0.8, 70),

        11: useScrollFadeIn('up', 2, 0.2, 40),
        12: useScrollFadeIn('up', 2, 1.0, 50),
        13: useScrollFadeIn('up', 2, 1.0, 100),
        
        14: useScrollFadeIn('up', 2, 0.2, 40),
        15: useScrollFadeIn('up', 1, 0.5, 40),
        16: useScrollFadeIn('up', 1, 1.0, 40),
        17: useScrollFadeIn('up', 1, 1.5, 40),

        20: useScrollFadeIn('up', 1, 0.2, 40),
        21: useScrollFadeIn('up', 1, 0.2, 40),

        22: useScrollFadeIn('up', 1, 0.4, 50),
        23: useScrollFadeIn('up', 1, 0.4, 80),
        24: useScrollFadeIn('up', 1, 0.4, 25),
        25: useScrollFadeIn('up', 1, 0.4, 50),
        26: useScrollFadeIn('up', 1, 0.4, 50),
      };
    return (
        <div>
            <div className="FirstPage" >
                <div className='textBox'>
                    <span className='Projecttxt' {...animatedItem[0]}>Korea Weather</span>
                    <br />
                    <span className='Projecttxt' {...animatedItem[1]}>Predict Project</span>
                </div>
                <div className='imgclass' >
                    <Link to='https://www.flaticon.com/free-icon/artificial-intelligence_7406516?term=ai&page=1&position=31&origin=search&related_id=7406516'><img src={AImage} alt='face' className='AiImage' {...animatedItem[8]}/></Link>
                    <span className='blank' />
                    <Link to="https://www.flaticon.com/free-icon/coronavirus_2913465?term=virus&page=1&position=3&origin=search&related_id=2913465"><img src={cloud} alt='face' className='AiImage' {...animatedItem[9]}/></Link>
                </div>
            </div>

            <div className='SecondPage'>
                <span className='LanguageTxt' {...animatedItem[11]}> This Project is written by</span>
                <img src={pythonImg} className="Language" alt = "face" {...animatedItem[12]}/>
                <span className='LanguageTxt2' {...animatedItem[13]}>Python</span>
            </div>

            <div className='ThirdPage'>
                <span className='ModuleTxt' {...animatedItem[14]}>Used Modules</span> 
                <div className='MoudleBigBox'  >         
                    <div className='ModuleBox'{...animatedItem[15]}>
                            <img className='ModuleImage' alt = "face" src={prophet} />
                            <Link to='https://facebook.github.io/prophet/docs/quick_start.html' className='prophettxt'>
                                <span className='moduleTxt'>Prophet</span>
                            </Link>
                        </div>
                        <div className='ModuleBox' {...animatedItem[16]}>
                            <img className='ModuleImage' alt = "face" src={pandas} />
                            <Link to='https://pandas.pydata.org/'>
                                <span className='moduleTxt'>Pandas</span>
                            </Link>
                        </div>
                        <div className='ModuleBox' {...animatedItem[17]}>
                            <img className='ModuleImage' alt = "face" src='https://camo.githubusercontent.com/109927a15915074d15313889468aa9aa688de3b9e38cc4359a01f665d351114e/68747470733a2f2f6d6174706c6f746c69622e6f72672f5f7374617469632f6c6f676f322e737667' />
                            <Link to='https://matplotlib.org/' >
                                <span className='moduleTxt'>Matplotlib</span>
                            </Link>
                        </div>
                </div>
            </div>

            <div className='FourthPage'>
                <div className='description' {...animatedItem[20]}>
                    <span className='Description'>
                        DESCRIPTION
                    </span>
                    <img src={weather} alt='face' className='DescriptionIMG'/>
                </div>

                <div className='descriptionBox' {...animatedItem[21]}>
                    <span className='Corona' >
                    This project is developed to predict future temperature.<br /> <br />

                    Today, the temperature is increasing.<br />
                    So, I developed this program so that see future and react for future. <br /> <br />

                    Datasets come from '
                    <Link to = "https://data.kma.go.kr/normals/index.do" className="cookietxt">기후평년값</Link>' from Korea Meteorological Administration<br /> <br />

                    In result, I can know that our temperature is growing.<br />
                    But, increase about temperature is slow down.<br /> 
                    I can know the various policies from government works.<br /> <br />
                    </span>  
                    <Link to = "https://github.com/II-DW/TemperaturePredict" className="githubtxt">See Code in GItHub</Link>
                </div>
            </div>
            <div className='enddiv'>
                <span className='Name' {...animatedItem[22]}>Dowon Lee</span>
                <span className='endtxt2' {...animatedItem[23]}> Learn More About Me</span>
                <Link to="https://github.com/II-DW/" {...animatedItem[24]}><img src={github} alt = "face" className='githubimg'></img></Link>
                <span className='endtxt' {...animatedItem[25]}>Illustrated by Lee Yunji </span>
                <span className='endtxt3' {...animatedItem[26]}>Copyright © From Lee Dowon </span>
            </div>

        </div>
    )
}

export default Koreaweather;