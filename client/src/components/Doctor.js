import React from 'react';

import { Outlet, useNavigate } from 'react-router-dom';
import css from './doctor.module.css';

function Doctor(props) {

    const navigate = useNavigate() ;

    const homeClick = () => navigate('/doctor-home')

    const labClick = () => navigate('lab-reports')

    const manageClick = () => navigate('manage-appointments')

    const infoClick = () => navigate('doctor-info')

    return (
            <div className={css.main}>
            <nav>
                <div className={css.logo}>
                    <h2> Kannaya Clinics</h2>
                    <h5> Where Care Meets Compassion</h5>
                </div>
                <div className={css.menu}>
                    <div onClick={homeClick}> Home </div>
                    <div onClick={labClick}> Lab-Reports </div>
                    <div onClick={manageClick}> Manage-Appointments</div>
                    <div onClick={infoClick}> Info </div>
                </div>
            </nav>
            <div className={css.body}>
                <Outlet />
            </div>
        </div>
    );
}

export default Doctor;