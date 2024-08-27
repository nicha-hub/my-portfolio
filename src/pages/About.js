import React, { useEffect } from 'react';
import '../assets/scss/About.scss';
import imageShowcase from '../assets/images/136579-3.png';
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin,faFacebookF,faGithub } from '@fortawesome/free-brands-svg-icons'
import { faPaperPlane,faPaperclip } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom';

// Component
import CommonButton from '../components/CommonButton';

// Image skills
import phpImage from '../assets/images/php.png';
import nodejsImage from '../assets/images/node-js.png';
import javascriptImage from '../assets/images/javascript.png';
import htmlImage from '../assets/images/html.png';
import cssImage from '../assets/images/css.png';
import reactImage from '../assets/images/react-native.png';
import flutterImage from '../assets/images/flutter.png';
import mysqlImage from '../assets/images/mysql.png';


const About = () => {
    const { t } = useTranslation();
    const navigate = useNavigate();

    const socialItem = [
        {
            url: 'https://www.facebook.com/guploy.dekhear',
            ic: <FontAwesomeIcon icon={faFacebookF} />
        },
        {
            url: 'https://www.linkedin.com/in/nicha-kaewrod-a2288631a',
            ic: <FontAwesomeIcon icon={faLinkedin} />
        },
        {
            url: 'https://github.com/nicha-hub',
            ic: <FontAwesomeIcon icon={faGithub} />
        },
        {
            url: 'mailto:nicha.kaewrod@gmail.com',
            ic: <FontAwesomeIcon icon={faPaperPlane} />
        }

    ];
    const skillList = [
        {
            n: 'PHP',
            ic: phpImage,
            st: {
                background: 'rgb(101,99,250)',
                background: 'linear-gradient(90deg, rgba(101,99,250,1) 0%, rgba(133,131,244,1) 50%, rgba(179,177,242,1) 100%)'
            }
        },
        {
            n: 'Node.js',
            ic: nodejsImage,
            st: {
                background: 'rgb(0,0,0)',
                background: 'linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(28,70,19,1) 50%, rgba(42,105,29,1) 100%)'
            }
        },
        {
            n: 'JavaScript',
            ic: javascriptImage,
            st: {
                background: 'rgb(237,221,33)',
                background: 'linear-gradient(90deg, rgba(237,221,33,1) 0%, rgba(251,239,99,1) 50%, rgba(251,243,154,1) 100%)'
            }
        },
        {
            n: 'HTML',
            ic: htmlImage,
            st: {
                background: 'rgb(0,0,0)',
                background: 'linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(83,29,5,1) 50%, rgba(131,46,8,1) 100%)'
            }
        },
        {
            n: 'CSS',
            ic: cssImage,
            st: {
                background: 'rgb(0, 0, 0)',
                background: 'linear-gradient(90deg, rgba(0, 0, 0, 1) 0%, rgba(5, 9, 83, 1) 50%, rgba(9, 15, 126, 1) 100%)'
            }
        },
        {
            n: 'React Native',
            ic: reactImage,
            st: {
                background: 'rgb(8, 69, 142)',
                background: 'linear-gradient(90deg, rgba(8, 69, 142, 1) 0%, rgba(10, 81, 167, 1) 50%, rgba(17, 105, 212, 1) 100%)'
            }
        },
        {
            n: 'Flutter',
            ic: flutterImage,
            st: {
                background: 'rgb(7, 93, 112)',
                background: 'linear-gradient(90deg, rgba(7, 93, 112, 1) 0%, rgba(11, 124, 149, 1) 50%, rgba(13, 144, 173, 1) 100%)'
            }
        },
        {
            n: 'MySQL',
            ic: mysqlImage,
            st: {
                background: 'rgb(33,236,237)',
                background: 'linear-gradient(90deg, rgba(33,236,237,1) 0%, rgba(237,159,33,1) 69%, rgba(237,101,33,1) 100%)'
            }
        }
    ];

    useEffect(() => {
        document.title = t('creator_full_name') + ' - ' + t('about_menu');
    }, []);

    return (
    <div className="container">
        <div className="section section-1 d-flex">
            <div className="section-1-left">
                <div className="social-box d-flex alt-c">
                    {socialItem.map((item,i)=>{
                        return <div key={i} className='social-item' onClick={()=>{window.open(item.url, "_blank");}}>{item.ic}</div>;
                    })}
                </div>
                <div className="head-box">{'👋 ' + t('greeting_intro')}</div>
                <div className="under-head-box">{t('intro_about_me')}</div>
                <div className="sub-box">{"\"💕" + t('phrase_intro') + "💕\""}</div>
                <div className="botton-box d-flex">
                    <CommonButton
                        title = {t('my_resume')}
                        btnMode = {'btn-1'}
                        arrowRight = {true}
                        onClick = {()=>{window.open( `${process.env.PUBLIC_URL}/files/resume-nicha.pdf`, "_blank");}}
                    />
                    <CommonButton
                        title = {t('past_projects')}
                        btnMode = {'btn-2'}
                        onClick = {()=>{navigate('/project');}}
                    />
                </div>
            </div>
            <div className="section-1-right d-flex">
                <div className="image-showcase">
                    <img src={imageShowcase} />
                </div>
            </div>
        </div>
        <div className="section section-2">
            <div className='common-header'>{t('my_skills')}</div>
            <div className='sk-group d-flex'>
                {skillList.map((item,i)=>{
                    return <div key={i} className='sk-box'>
                        <div className='sk-clip'><FontAwesomeIcon icon={faPaperclip} /></div>
                        <div className='sk-ic' style={item.st || {}}>
                            <img src={item.ic} />
                        </div>
                        <div className='sk-txt'>{item.n}</div>
                    </div>
                })}
            </div>
        </div>
    </div>);
};
  
export default About;