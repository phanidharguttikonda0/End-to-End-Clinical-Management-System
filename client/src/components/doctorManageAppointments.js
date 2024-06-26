import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import css from './doctorManageAppointments.module.css';

function DoctorManageAppointments(props) {
    const l = useLocation() ;
    const {gmail} = l.state ;
    const [patientNames, changeDoctorNames] = useState([]) ;
    const [appointments,changeAppointments] = useState([]) ;

    useEffect(()=> {

        async function main(){
            console.log(gmail)
            const result = await axios("http://localhost:3001/doctor-prevop/",{params:{gmail: gmail}}) ;
            changeDoctorNames(result.data.patientNames) ;
            changeAppointments(result.data.appointments) ;
        } main()
    },[]) ;


    return (
        <div className={css.main}>
            {
                appointments.map((op,index) => <div className={css.prev}> <h3> Name: {patientNames[index]}</h3> 
                <h3> Date : {op.appointment_date.substring(0,10)}</h3>
                <h3> symptoms : {op.symptoms} </h3>
                </div>)
            }
        </div>
    );
}

export default DoctorManageAppointments;