import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

// Component
import WaitUpdate from '../components/WaitUpdate';

const Project = () => {
    const { t } = useTranslation();

    useEffect(() => {
    document.title = t('creator_full_name') + ' - ' + t('project_menu');
    }, []);

    return <div className="container">
       <WaitUpdate/>
    </div>;
};

export default Project;