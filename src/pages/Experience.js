import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

// Component
import WaitUpdate from '../components/WaitUpdate';

const Experience = () => {
  const { t } = useTranslation();

  useEffect(() => {
    document.title = t('creator_full_name') + ' - ' + t('experience_menu');
  }, []);

  return <div className="container">
    <WaitUpdate 
      desc = {t('page_waiting_update_desc',{page: t('page_waiting_update_my_experiences')})}
      btnLinkOut = {t('go_to_linkedin')}
      btnLinkOutOnclick = {()=>{window.open( `https://www.linkedin.com/in/nicha-kaewrod-a2288631a/details/experience/`, "_blank");}}
    />
  </div>;
};
  
export default Experience;