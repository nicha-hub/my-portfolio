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
        <WaitUpdate
            desc = {t('page_waiting_update_desc',{page: t('page_waiting_update_my_past_projects')})}
            btnLinkOut = {t('go_to_linkedin')}
            btnLinkOutOnclick = {()=>{window.open( `https://www.linkedin.com/in/nicha-kaewrod-a2288631a/details/projects/`, "_blank");}}
        />
    </div>;
};

export default Project;