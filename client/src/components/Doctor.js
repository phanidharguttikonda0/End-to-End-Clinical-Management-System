import React from 'react';

import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import css from './doctor.module.css';

function Doctor(props) {

    const location = useLocation() ;
    const {gmail} = location.state ;

    const navigate = useNavigate() ;

    const homeClick = () => navigate('/doctor-home', {state : {gmail: gmail}})

    const labClick = () => navigate('apply-for-leave', {state : {gmail: gmail}})

    const manageClick = () => navigate('manage-appointments', {state : {gmail: gmail}})

    const infoClick = () => navigate('doctor-info', {state : {gmail: gmail}})

    return (
            <div className={css.main}>
            <nav>
                <div className={css.logo}>
                    <h2> Kannaya Clinics</h2>
                    <h5> Where Care Meets Compassion</h5>
                </div>
                <div className={css.menu}>
                    <div onClick={homeClick}> Home </div>
                    <div onClick={labClick}> Apply Leave </div>
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