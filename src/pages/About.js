import '../assets/scss/About.scss';
import imageShowcase from '../assets/images/136579-3.png';
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin,faFacebookF,faGithub } from '@fortawesome/free-brands-svg-icons'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom';

// Component
import '../components/CommonButton';
import CommonButton from '../components/CommonButton';

const About = () => {
    const { t } = useTranslation();
    const navigate = useNavigate();
    const skillList = [
        {
            n: 'PHP',
            ic: 'cc'
        }
    ];

    return (
    <div className="container">
        <div className="section section-1 d-flex">
            <div className="section-1-left">
                <div className="social-box d-flex alt-c">
                    <div className='social-item' onClick={()=>{window.open("https://www.facebook.com/guploy.dekhear", "_blank");}}><FontAwesomeIcon icon={faFacebookF} /></div>
                    <div className='social-item' onClick={()=>{window.open("https://www.linkedin.com/in/nicha-kaewrod-a2288631a", "_blank");}}><FontAwesomeIcon icon={faLinkedin} /></div>
                    <div className='social-item' onClick={()=>{window.open("https://github.com/nicha-hub", "_blank");}}><FontAwesomeIcon icon={faGithub} /></div>
                    <div className='social-item' onClick={()=>{window.open("mailto:nicha.kaewrod@gmail.com");}}><FontAwesomeIcon icon={faPaperPlane} /></div>
                </div>
                <div className="head-box">👋 Hey there, It's Nicha Kaewrod.</div>
                <div className="under-head-box">Welcome to my website! I’m honored that you’ve taken the time to visit. My name is Nicha Kaewrod, and I have 4 years and 5 months of experience as a Full-Stack Developer. I specialize in PHP, Node.js, JavaScript, HTML, CSS, and MySQL for web development, and I have also worked with React Native and Flutter for mobile app development. I'm flexible and always up for learning new stuff.</div>
                <div className="sub-box">"💕To rise above others, one must strive harder than the average person.💕"</div>
                <div className="botton-box d-flex">
                    <CommonButton
                        title = {t('my_resume')}
                        btnMode = {'btn-1'}
                        arrowRight = {true}
                    />
                    <CommonButton
                        title = {'Past Projects'}
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
        <div className="section section-2 d-flex">
            <div className='common-header'>Skills</div>
            <div>
                <div className='sk-box'>
                    <div className='sk-ic'></div>
                    <div className='sk-txt'></div>
                </div>
            </div>
        </div>
    </div>);
};
  
export default About;