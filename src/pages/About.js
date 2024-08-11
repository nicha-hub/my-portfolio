import '../assets/scss/About.scss';
import imageShowcase from '../assets/images/136579-3.png';
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin,faSquareFacebook,faSquareGithub } from '@fortawesome/free-brands-svg-icons'

const About = () => {
    const { t } = useTranslation();

    return (
    <div className="container">
        <div className="section section-1 d-flex">
            <div className="section-1-left">
                <div className="head-box">👋 Hey there, It's Nicha Kaewrod.</div>
                <div className="under-head-box">Welcome to my website! I’m honored that you’ve taken the time to visit. My name is Nicha Kaewrod, and I have 4 years and 5 months of experience as a Full-Stack Developer. I specialize in PHP, Node.js, JavaScript, HTML, CSS, and MySQL for web development, and I have also worked with React Native and Flutter for mobile app development. I'm flexible and always up for learning new stuff.</div>
                <div className="sub-box">"To rise above others, one must strive harder than the average person."</div>
                {/* <div className="social-box d-flex jfc-c alt-c">
                    <div className='social-item'><FontAwesomeIcon icon={faSquareFacebook} /></div>
                    <div className='social-item'><FontAwesomeIcon icon={faLinkedin} /></div>
                    <div className='social-item'><FontAwesomeIcon icon={faSquareGithub} /></div>
                </div> */}
                <div className="botton-box">
                    <div className="btn-1">Download My Resume</div>
                </div>
            </div>
            <div className="section-1-right d-flex">
                <div className="image-showcase">
                    <img src={imageShowcase} />
                </div>
            </div>
        </div>
    </div>);
};
  
export default About;