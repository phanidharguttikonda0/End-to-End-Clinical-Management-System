import React, { useContext } from 'react';
import { EmailContext } from './Home';
import home from './Home.module.css';
import image from './logo.png';

function Doctor(props) {
    const email = useContext(EmailContext) ;
    return (
            <div className={home.main}>
            <nav>
                <img src={image} alt='reload' />
                <div className={home.list}>
                    <div className={home.menu}> Patients </div>
                    <div className={home.menu}> Lab-Reports </div>
                    <div className={home.menu}> Manage-Appointments</div>
                    <div className={home.menu}> Info </div>
                </div>
            </nav>
            <div className={home.body}>
                {email}
            </div>
        </div>
    );
}

export default Doctor;