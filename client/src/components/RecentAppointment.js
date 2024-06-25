import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import css from './RecentAppointments.module.css';

function RecentAppointment(props) {
    const l = useLocation() ;
    const {gmail, op} = l.state ;
    const [doctor,changeDoctor] = useState({}) ;
    const navigate = useNavigate() ;

    useEffect(()=> {
        async function main() {
            const value = await axios.get('http://localhost:3001/patient-recentappointments/appointment/', {params: {
                doctor_id : op.doctor_id
            }}) ;
            changeDoctor(value.data) ;
        }
        main() ;
    }, [op.doctor_id])
    return (
        <div className={css.main}>
            <nav className={css.nav}>
                <h3> Appointment Date : {op.appointment_date.substring(0,10)}</h3>
                <h3> Doctor : {doctor.name}</h3>
            </nav>
            <body className={css.body}>
                <h4> Symptoms : {op.symptoms}</h4>
                <h4> Docotr Report : {op.doctor_report}</h4>
                <h4> Appointment fee Paid : {doctor.appointment_fee}</h4>
            </body>
            <footer>
                {
                    op.doctor_report === "Not yet"? "" :<button onClick={() => {
                        navigate('prescription', {state : {gmail: gmail, appointment_id: op.appointment_id}})
                    }}> view Medicine Bill </button>
                }
            </footer>
        </div>
    );
}

export default RecentAppointment;