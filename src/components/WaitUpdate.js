import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCogs } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

// Component
import CommonButton from '../components/CommonButton';

const WaitUpdate = () => {
    const { t } = useTranslation();
    const navigate = useNavigate();

    return <div className="container">
        <div style={{marginTop: '50px', marginBottom: '50px'}}>
            <div className='d-flex alt-c jfc-c' style={{fontSize: '250px', color: '#88888880'}}>
                <FontAwesomeIcon icon={faCogs} />
            </div>
            <div style={{textAlign: 'center', fontSize: '60px', fontWeight: '700'}}>{t('oops')}</div>
            <div style={{textAlign: 'center', fontSize: '25px', marginTop: '10px'}}>{t('page_waiting_update')}</div>
            <div className='d-flex alt-c jfc-c' style={{marginTop: '15px'}}>
                <CommonButton
                    title = {t('back_to_about_me')}
                    btnMode = {'btn-1'}
                    onClick = {()=>{navigate('/');}}
                />
            </div>
        </div>
    </div>;
};

export default WaitUpdate;