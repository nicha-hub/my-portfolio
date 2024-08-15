import '../assets/scss/NavBar.scss';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate, useLocation } from 'react-router-dom';
import logoImage from '../assets/images/logo-2.png';

// Component
import '../components/CommonButton';
import CommonButton from '../components/CommonButton';

const NavBar = () => {
    const { t } = useTranslation();

    const navigate = useNavigate();
    const goToAboutPage = (path) => {
        navigate('/'+path);
    };

    const location = useLocation();
    const [activeMenu, setActiveMenu] = useState(location.pathname);

    return (
    <div className="nav-o">
        <div className="nav-i">
            <div className="nav-i-left">
                <div className="nav-logo"><img src={logoImage} /></div>
            </div>
            <div className="nav-i-center">
                <div className={"nav-menu" + (location.pathname == "/"? " active": "")} onClick={()=>{goToAboutPage('')}}>{t('about_menu')}</div>
                <div className={"nav-menu" + (location.pathname == "/experience"? " active": "")} onClick={()=>{goToAboutPage('experience')}}>{t('experience_menu')}</div>
                <div className={"nav-menu" + (location.pathname == "/project"? " active": "")} onClick={()=>{goToAboutPage('project')}}>{t('project_menu')}</div>
            </div>
            <div className="nav-i-right">
                <CommonButton
                    title = {t('my_resume')}
                    btnMode = {'btn-2'}
                    arrowRight = {true}
                    style = {{padding: '7px 20px'}}
                />
            </div>
        </div>
    </div>)
};
  
export default NavBar;