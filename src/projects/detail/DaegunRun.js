// Moudule Import
import './Detail.css'
import { Link } from "react-router-dom";
import React from 'react';
import {useScrollFadeIn} from '../../animation.js';
import github from '../../img/github.svg';


// IMAGE Import
import game from '../../img/games.png'
import pythonImg from '../../img/python.png';
import pandas from '../../img/pandas_white.svg';
import pygame from '../../img/pygame.png'
import daegunrun from '../../img/daegunrun.png';


const DaegunRun = () => {
    const animatedItem = {
        0: useScrollFadeIn('up', 2, 0.2, 70),

        8: useScrollFadeIn('up', 2, 0.8, 70),

        11: useScrollFadeIn('up', 2, 0.2, 40),
        12: useScrollFadeIn('up', 2, 1.0, 50),
        13: useScrollFadeIn('up', 2, 1.0, 100),

        14: useScrollFadeIn('up', 2, 0.2, 40),
        15: useScrollFadeIn('up', 1, 0.5, 40),
        16: useScrollFadeIn('up', 1, 1.0, 40),
        17: useScrollFadeIn('up', 1, 1.5, 40),
        18: useScrollFadeIn('up', 1, 2.0, 40),

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
                    <span className='Projecttxt' {...animatedItem[0]}>Daegun Run</span>
                </div>
                <div className='imgclass' >
                    <Link to='https://www.flaticon.com/free-icon/game-control_4315514?term=game&page=1&position=27&origin=search&related_id=4315514'><img src={game} alt='face' className='AiImage' {...animatedItem[8]}/></Link>
                    
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
                        <img className='ModuleImage' alt = "face" src={pygame} />
                        <Link to='https://www.pygame.org/news'>
                            <span className='moduleTxt'>Pygame</span>
                        </Link>
                    </div>

                    <div className='ModuleBox' {...animatedItem[16]}>
                        <img className='ModuleImage' alt = "face" src={pandas} />
                        <Link to='https://pandas.pydata.org/'>
                            <span className='moduleTxt'>Pandas</span>
                        </Link>
                    </div>

                    <div className='ModuleBox' {...animatedItem[17]}>
                        <img className='ModuleImage' alt = "face" src={'https://seaborn.pydata.org/_static/logo-wide-lightbg.svg'} />
                        <Link to='https://seaborn.pydata.org/'>
                            <span className='moduleTxt'>Seaborn</span>
                        </Link>
                    </div>
                    
                    <div className='ModuleBox' {...animatedItem[18]}>
                        <img className='ModuleImage' alt = "face" src={'https://openpyxl.readthedocs.io/en/stable/_static/logo.png'} />
                        <Link to='https://openpyxl.readthedocs.io/en/stable/'>
                            <span className='moduleTxt'>Openpyxl</span>
                        </Link>
                    </div>
                </div>
            </div>

            <div className='FourthPage'>
                <div className='description' {...animatedItem[20]}>
                    <span className='Description'>
                        DESCRIPTION
                    </span>
                    <img src={daegunrun} alt='face' className='DescriptionIMG'/>
                </div>

                <div className='descriptionBox' {...animatedItem[21]}>
                    <span className='Corona' >
                        This project is developed for school club promotion.<br /> <br />

                        In 2022, I entered high school '대건' (daegun) <br />
                        And I entered school programming club. <br /> 
                        So, I developed this game for promoting club influenced by&nbsp; '
                        <Link to = "https://game.devsisters.com/ko/cookierun/" className="cookietxt">CookieRun</Link>'<br /> <br />
                        This game includes two faces.<br />
                        First, you have to run school facilities like '음악실' (music room). <br /> 
                        Second, you have to combat with my club teacher.<br /> 
                        (the reason why I skipped boss png when I push) <br /> <br />

                        In the end, you have to clear this as fast as you can. <br /> <br />
                    </span>  
                    <Link to = "https://github.com/II-DW/DaegunRun" className="githubtxt">See Code in GItHub</Link>
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

export default DaegunRun;