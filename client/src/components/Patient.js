import React from 'react';
import css from './patient.module.css';

function Patient(props) {
    return (
        <div className={css.main}>
            <nav>
                <div className={css.logo}>
                    <h2> Kannaya Clinics</h2>
                    <h5> Where Care Meets Compassion</h5>
                </div>
                <div className={css.menu}>
                    <div className={css.m}> Home </div>
                    <div> recent-op's </div>
                    <div> settings </div>
                </div>
            </nav>
            <div className={css.body}></div>
        </div>
    );
}

export default Patient;