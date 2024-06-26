import axios from 'axios';
import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import css from './ApplyLeave.module.css';
function ApplyLeave(props) {

    const l = useLocation() ;
    const {gmail} = l.state ;
    const [start,changeStart] = useState('') ;
    const [end,changeEnd] = useState('') ;

    return (
        <div className={css.main}>
            <div className={css.in}>
            <input type='date' placeholder='Start Date' value={start} onChange={(event) => changeStart(event.target.value)} />
            <input type='date' placeholder='End Date' value={end} onChange={(event) => changeEnd(event.target.value)} />
            </div>
            <button onClick={() => {
                function getTomorrowsDate() {
                    const today = new Date();
                    const tomorrow = new Date();
                    tomorrow.setDate(today.getDate() + 1);
                  
                    const year = tomorrow.getFullYear();
                    const month = String(tomorrow.getMonth() + 1).padStart(2, '0');
                    const day = String(tomorrow.getDate()).padStart(2, '0');
                  
                    return `${year}-${month}-${day}`;
                  }
                  const tommarow = getTomorrowsDate() ;
                  if(new Date(tommarow) <= new Date(start) && new Date(tommarow) <= new Date(end)){
                    console.log(start,end)
                    async function main() {
                        const result = await axios.post("http://localhost:3001/doctor-apply-forleave", {start_date: start, end_date: end, sanctioned: 'Neutral',gmail: gmail   }) ;
                        alert("Successfully Submitted the Leave Form", result.data)
                        changeStart('') ;
                        changeEnd('') ;
                    } main()
                  }else{
                    alert('please choose the future dates')
                  }
            }}> Apply for Leave </button>
        </div>
    );
}

export default ApplyLeave;