// Moudule Import
import './Detail.css'
import { Link } from "react-router-dom";
import React from 'react';
import {useScrollFadeIn} from '../../animation.js';
import github from '../../img/github.svg';


// IMAGE Import
import coronavisual from '../../img/data-visualization.png';
import ui from '../../img/user-interface.png';
import coronaIMG from '../../img/virus.png';
import pythonImg from '../../img/python.png';
import pandas from '../../img/pandas_white.svg';
import CoronaV from '../../img/coronavisualizing.png';

const CoronaVisualizing = () => {
    const animatedItem = {
        0: useScrollFadeIn('up', 2, 0.2, 70),
        1: useScrollFadeIn('up', 2, 0.2, 70),

        8: useScrollFadeIn('up', 2, 0.6, 70),
        9: useScrollFadeIn('up', 2, 0.8, 70),
        10: useScrollFadeIn('up', 2, 1.0, 70),

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
                    <span className='Projecttxt' {...animatedItem[0]}>Corona Visualizing</span>
                    <br />
                    <span className='Projecttxt' {...animatedItem[1]}> &nbsp; &nbsp; GUI Program</span>
                </div>
                <div className='imgclass' >
                    <Link to='https://www.flaticon.com/free-icon/data-visualization_3591276?term=visualizing&page=1&position=5&origin=search&related_id=3591276'><img src={coronavisual} alt='face' className='AiImage' {...animatedItem[8]}/></Link>
                    <span className='blank'/>
                    <Link to='https://www.flaticon.com/free-icon/user-interface_2920336?term=user+interface&page=1&position=8&origin=search&related_id=2920336'><img src={ui} alt='face' className='AiImage' {...animatedItem[9]}/></Link>
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
                <div className='MoudleBigBox' >
                    <div className='ModuleBox' {...animatedItem[15]}>
                        <img className='reImage' alt = "face" src={'https://requests.readthedocs.io/en/latest/_static/requests-sidebar.png'} />
                        <Link to='https://requests.readthedocs.io/en/latest/'>
                            <span className='moduleTxt'>requests</span>
                        </Link>
                    </div>

                    <div className='ModuleBox' {...animatedItem[16]}>
                        <img className='ModuleImage' alt = "face" src='https://camo.githubusercontent.com/109927a15915074d15313889468aa9aa688de3b9e38cc4359a01f665d351114e/68747470733a2f2f6d6174706c6f746c69622e6f72672f5f7374617469632f6c6f676f322e737667' />
                        <Link to='https://matplotlib.org/' >
                            <span className='moduleTxt'>Matplotlib</span>
                        </Link>
                    </div>
                    <div className='ModuleBox' {...animatedItem[17]}>
                        <img className='ModuleImage' alt = "face" src={pandas} />
                        <Link to='https://pandas.pydata.org/'>
                            <span className='moduleTxt'>Pandas</span>
                        </Link>
                    </div>

                    <div className='ModuleBox' {...animatedItem[18]}>
                        <img className='ModuleImage' alt = "face" src={'https://seaborn.pydata.org/_static/logo-wide-lightbg.svg'} />
                        <Link to='https://seaborn.pydata.org/'>
                            <span className='moduleTxt'>Seaborn</span>
                        </Link>
                    </div>
                    
                    <div className='ModuleBox' {...animatedItem[19]}>
                        <img className='qtImage' alt = "face" src={'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Python_and_Qt.svg/240px-Python_and_Qt.svg.png'} />
                        <Link to='https://wiki.python.org/moin/PyQt'>
                            <span className='moduleTxt'>PyQt5</span>
                        </Link>
                    </div>

                </div>
            </div>

            <div className='FourthPage'>
                <div className='description' {...animatedItem[20]}>
                    <span className='Description'>
                        DESCRIPTION
                    </span>
                    <img src={CoronaV} className='DescriptionIMG' alt = "face" />
                </div>

                <div className='descriptionBox' {...animatedItem[21]}>
                    <span className='Corona' >
                        This project is developed to see easily statistics.<br /> <br />

                        In 2020, Corona Pandemic is started. <br />
                        But, elderly people can't easily see data about corona. <br /> 
                        So, I developed this program so that elderly people can see data. <br />
                        
                        Datasets come from '
                        <Link to = "https://www.data.go.kr/index.do" className="cookietxt">공공데이터포털</Link>'<br /> <br />

                        I make UI using 'Qt Designer'<br />
                        This UI can receive information like start date, nations.<br /> <br />
                    </span>  
                    <Link to = "https://github.com/II-DW/CoronaVisualizing" className="githubtxt">See Code in GItHub</Link>
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

export default CoronaVisualizing;