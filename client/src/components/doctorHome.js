import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import KannayaClinics from './KannayaClinics';
import css from './patientHome.module.css';

function DoctorHome(props) {
    const l = useLocation() ;
    const navigate = useNavigate() ;
    const {gmail} = l.state ;

    const [patients,changePatients] = useState([]) ;
    const [appointment,changeAppointment] = useState([]) ;

    useEffect(()=> {
        const x = async () => {
            const result = await axios.get('http://localhost:3001/doctor-home',{params: {gmail:gmail}}) ;
            changePatients(result.data.patients)
            changeAppointment(result.data.appointments)
            console.log(result.data.patients) ;
        }
        x()
    },[]) ;


    return (
        <div className={css.main}>
             <div className={css.main}>
            <div className={css.Info}>
                <KannayaClinics />
            </div>
            <div className={css.submain}>
            {
                patients.map((patient,index) => <div className={css.doctor} >
                <h3> Name : {patient.name} </h3>
                <h4> Symptoms : {appointment[index].symptoms}</h4>
                <div className={css.sub}>
                    <h4> DOB : {patient.dob.substring(0,10)}</h4>
                    <h4> Blood Group : {patient.blood_group} </h4>
                    </div>
                </div>)
            }
            </div>
        </div>
        </div>
    );
}

export default DoctorHome;