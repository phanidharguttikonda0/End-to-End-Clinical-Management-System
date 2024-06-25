import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import css from './RecentOps.module.css';

function RecentOp(props) {

    const l = useLocation() ;
    const {gmail} = l.state ;
    const [recentOps,changeRecentOps] = useState([]) ;
    const navigate = useNavigate() ;
    const nav = (op) => {
        console.log('Clicked')
        navigate('/patient-home/recent-ops/appointment/', {state: {gmail: gmail, op: op}})
    }
    useEffect(() => {
        console.log(gmail);
        async function get() {
            try{
                const result = await axios.get(`http://localhost:3001/patient-recentappointments/`, {
                    params : {
                        gmail: gmail
                    }
                }) ; 
                changeRecentOps(result.data) ;
                console.log(result.data)
            }catch(err){
                console.log(err)
            }
        }
        get() ;
    },[]) ;
    return (
        <div className={css.main}>
            {
                recentOps.map(op => <div className={css.op} key={op.appointment_id} onClick={() => {
                    //* getting full details of the appointment
                    nav(op)
                }}>
                    <h3> Appointment Data : {op.appointment_date}</h3>
                    <h5> Symptoms : {op.symptoms} </h5>
                    </div>)
            }

        </div>
    );
}

export default RecentOp;