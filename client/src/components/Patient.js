import React from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import css from './Main.module.css';

function Patient(props) {

    const location = useLocation() ;
    const {gmail} = location.state ;
    const navigate = useNavigate();

    const homeClick = () => {
        navigate('/patient-home', {state : {gmail: gmail}});
      }
    
      const recentClick = () => {
        navigate('/patient-home/recent-ops', {state : {gmail: gmail}});
      }
    
      const settingsClick = () => {
        navigate('/patient-home/Settings', {state : {gmail: gmail}});
      }

    return (
        <div className={css.main}>
            <nav>
                <div className={css.logo}>
                    <h2> Kannaya Clinics</h2>
                    <h5> Where Care Meets Compassion</h5>
                </div>
                <div className={css.menu}>
                    <div onClick={homeClick}> Home </div>
                    <div onClick={recentClick}> recent-op's </div>
                    <div onClick={settingsClick}> Profile </div>
                </div>
            </nav>
            <div className={css.body}>
            <Outlet />
            </div>
        </div>
    );
}

export default Patient;