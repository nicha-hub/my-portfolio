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
    <WaitUpdate/>
  </div>;
};
  
export default Experience;