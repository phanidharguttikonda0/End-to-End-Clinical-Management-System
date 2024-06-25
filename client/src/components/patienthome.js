import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import KannayaClinics from './KannayaClinics';
import css from './patientHome.module.css';
function Patienthome(props) {

    const navigate = useNavigate() ;
    const [doctors,changeDoctors] = useState([]) ;

    const l = useLocation() ;
    const {gmail} = l.state ;

    useEffect(()=> {
        const x = async () => {
            const result = await axios.get('http://localhost:3001/patient-home') ;
            changeDoctors(result.data)
            console.log(result.data) ;
        }
        x()
    },[]) ;
    
    return (
        <div className={css.main}>
            <div className={css.Info}>
                <KannayaClinics />
            </div>
            <div className={css.submain}>
            {
                doctors.map(doctor => <div className={css.doctor} onClick={() => {
                    const fun = async () => {
                        const val = await axios.post("http://localhost:3001/patient-home/appointment/", {gmail: gmail, doctor_id: doctor.doctor_id}) ;
                        console.log(val.data);
                        if ( val.data) navigate('book-op', {state : {doctor: doctor, gmail : gmail}}) ;
                        else alert("Already Appointment booked")
                    }
                    fun() ;
                }
                }> 
                <h3> Name : {doctor.name} </h3>
                <div className={css.sub}>
                    <h4> Specilization : {doctor.specialization}</h4>
                    <h4> Experiance : {doctor.experience} </h4>
                    </div>
                </div>)
            }
            </div>
        </div>
    );
}

export default Patienthome;