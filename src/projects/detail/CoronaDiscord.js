// Moudule Import
import './Detail.css'
import { Link } from "react-router-dom";
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {useScrollFadeIn} from '../../animation.js';
import github from '../../img/github.svg';


// IMAGE Import
import AImage from '../../img/artificial-intelligence.png'; 
import chatIMG from '../../img/live-chat.png';
import coronaIMG from '../../img/virus.png';
import pythonImg from '../../img/python.png';
import prophet from '../../img/prophet.svg';
import pandas from '../../img/pandas_white.svg';
import sklearn from '../../img/scikitleranlogo.png';
import CoronaFig from '../../img/change_point_fig.png';


// fontawesome Setting
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons';

library.add(fab, faCheckSquare, faCoffee)


const Discord = () => {
    const animatedItem = {
        0: useScrollFadeIn('up', 2, 0.2, 70),
        1: useScrollFadeIn('up', 2, 0.2, 70),
        2: useScrollFadeIn('up', 2, 0.2, 70),
        3: useScrollFadeIn('up', 2, 0.4, 70),
        4: useScrollFadeIn('up', 2, 0.4, 70),
        5: useScrollFadeIn('up', 2, 0.4, 70),
        6: useScrollFadeIn('up', 2, 0.4, 70),

        7: useScrollFadeIn('up', 2, 0.6, 70),
        8: useScrollFadeIn('up', 2, 0.8, 70),
        9: useScrollFadeIn('up', 2, 1.0, 70),
        10: useScrollFadeIn('up', 2, 1.2, 70),

        11: useScrollFadeIn('up', 2, 0.2, 40),
        12: useScrollFadeIn('up', 2, 1.0, 50),
        13: useScrollFadeIn('up', 2, 1.0, 100),

        14: useScrollFadeIn('up', 2, 0.2, 40),
        15: useScrollFadeIn('up', 1, 0.5, 40),
        16: useScrollFadeIn('up', 1, 1.0, 40),
        17: useScrollFadeIn('up', 1, 1.5, 40),
        18: useScrollFadeIn('up', 1, 2.0, 40),
        19: useScrollFadeIn('up', 1, 2.5, 40),

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
                    <span className='Projecttxt' {...animatedItem[0]}>Corona</span> <span className='blank2'/>
                    <span className='Projecttxt' {...animatedItem[1]}>Confirmed</span> <span className='blank2'/>
                    <span className='Projecttxt' {...animatedItem[2]}>Case</span> <span className='blank2'/>
                    <br />
                    <span className='Projecttxt' {...animatedItem[3]}>Predict</span> <span className='blank2'/>
                    <span className='Projecttxt' {...animatedItem[4]} >Chat</span> <span className='blank2'/>
                    <span className='Projecttxt' {...animatedItem[5]}>Bot</span> <span className='blank2'/>
                    <span className='Projecttxt' {...animatedItem[6]}>Program</span> <span className='blank2'/>
                </div>
                <div className='imgclass' >
                    <Link to='https://discord.com/' ><FontAwesomeIcon icon="fa-brands fa-discord" className='discordimg' {...animatedItem[7]} /></Link>
                    <span className='blank' />
                    <Link to='https://www.flaticon.com/free-icon/artificial-intelligence_7406516?term=ai&page=1&position=31&origin=search&related_id=7406516'><img src={AImage} alt='face' className='AiImage' {...animatedItem[8]}/></Link>
                    <span className='blank' />
                    <Link to='https://www.flaticon.com/free-icon/live-chat_2840215?term=chat&page=1&position=32&origin=search&related_id=2840215'><img src={chatIMG} alt='face' className='AiImage' {...animatedItem[9]}/></Link>
                    <span className='blank' />
                    <Link to="https://www.flaticon.com/free-icon/coronavirus_2913465?term=virus&page=1&position=3&origin=search&related_id=2913465"><img src={coronaIMG} alt='face' className='AiImage' {...animatedItem[10]}/></Link>
                </div>
            </div>

            <div className='SecondPage'>
                <span className='LanguageTxt' {...animatedItem[11]}> This Project is written by</span>
                <img src={pythonImg} className="Language" alt = "face" {...animatedItem[12]}/>
                <span className='LanguageTxt2' {...animatedItem[13]}>Python</span>
            </div>

            <div className='ThirdPage'>
                <span className='ModuleTxt' {...animatedItem[14]}>Used Modules</span> 
                <div className='MoudleBigBox'  {...animatedItem[15]}>
                    <div className='ModuleBox'>
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
                        <img className='ModuleImage' alt = "face" src={sklearn} />
                        <Link to='https://scikit-learn.org/stable/' >
                            <span className='moduleTxt'>Sklearn</span>
                        </Link>
                    </div>
                    <div className='ModuleBox' {...animatedItem[18]}>
                        <img className='ModuleImage' alt = "face" src='https://camo.githubusercontent.com/109927a15915074d15313889468aa9aa688de3b9e38cc4359a01f665d351114e/68747470733a2f2f6d6174706c6f746c69622e6f72672f5f7374617469632f6c6f676f322e737667' />
                        <Link to='https://matplotlib.org/' >
                            <span className='moduleTxt'>Matplotlib</span>
                        </Link>
                    </div>
                    <div className='ModuleBox' {...animatedItem[19]}>
                        <FontAwesomeIcon icon="fa-brands fa-discord" className='discordimg' />
                        <Link to='https://discordpy.readthedocs.io/en/stable/' >
                            <span className='moduleTxt'>Discord.py</span>
                        </Link>
                    </div>    
                </div>
            </div>

            <div className='FourthPage'>
                <div className='description' {...animatedItem[20]}>
                    <span className='Description'>
                        DESCRIPTION
                    </span>
                    <img src={CoronaFig} alt='face' className='DescriptionIMG'/>
                </div>

                <div className='descriptionBox' {...animatedItem[21]}>
                    <span className='Corona' >
                        This project is developed to predict future.<br /> <br />

                        In 2020, Corona Pandemic is started. <br />
                        Everyone was terrified and felt uneasy. <br /> 
                        So, I developed this program so that people can relaxed. <br /> <br />

                        This program gives a forecast about future corona confirmed case. <br />
                        Through discord, you can get easily forecast. <br / > <br /> 

                        This provides forcast by two modules <br />
                        First, it provides sklearn (polynomial regression). <br /> 
                        Second, it provides by prophet <br /> <br />
                    </span> 
                    <Link to = "https://github.com/II-DW/Predict_Bot" className="githubtxt">See Code in GItHub</Link>
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

export default Discord;