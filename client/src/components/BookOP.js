import axios from 'axios';
import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import css from './BookOP.module.css';

function BookOP(props) {
    const l = useLocation() ;
    const {doctor, gmail} = l.state;
    const [symptoms, changeSymptoms] = useState("") ;
    const navigate = useNavigate() ;

    const bookOp = async () => {
        if (symptoms.length < 10){
            alert('please Enter Your Symptoms') ;
        }else{
            console.log(gmail)
            const value = await axios.post('http://localhost:3001/patient-home/appointment/confirm/', {gmail: gmail,symptoms: symptoms, doctor_id: doctor.doctor_id}) ;
            console.log(value) ;
            navigate('/patient-home', {state: {gmail: gmail}}) ;
        }
    }

    return (
        <div className={css.main}>
            <div className={css.info}>
                <div className={css.header}>
                    <h3> Name : {doctor.name}   </h3>
                    <h3> Specilization : {doctor.specialization} </h3>
                </div>
                <div className={css.down}>
                    <h5> Experiance : {doctor.experience} </h5>
                    <h5> OP Fee : Rs{doctor.appointment_fee}</h5>
                </div>
            </div>
            <div className={css.in}>
                <textarea placeholder='Enter Symptoms' value={symptoms} onChange={(event) => changeSymptoms(event.target.value)}/>
                <button onClick={bookOp}> pay Op</button>
            </div>
        </div>
    );
}

export default BookOP;