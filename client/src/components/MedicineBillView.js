import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import css from './MedicineBillView.module.css';

function MedicineBillView(props) {
    const l = useLocation() ;
    const {gmail, appointment_id} = l.state;
    const [prescription, changePrescription] = useState([]) ;
    const [imp, changeimp] = useState({}) ;

    useEffect(() => {
        async function main() {
            const result = await axios.get("http://localhost:3001/patient-recentappointments/medicinebill", {params: {
                appointment_id: appointment_id
            }})
            console.log(result.data) ;
            changePrescription(result.data.details.split(",,"))
            changeimp({payed: result.data.payed, prescription_id: result.data.prescription_id, Bill_amount: result.data.bill_amount})
        }
        main() ;
    }, [appointment_id,changeimp]) ;

    return (
        <div className={css.main}>
            <div className={css.prescription}>
                <h3> Prescription :</h3>
                {
                    prescription.map(pres => <p> {pres} </p>)
                }
            </div>
            <div>
                Total Amount : {imp.Bill_amount}
            </div>
            {imp.payed === "Yes" ? "" :<button onClick={() => {
                async function main() {
                    const result = await axios.get("http://localhost:3001/patient-recentappointments/medicinebill/pay",
                        {params: {prescription_id: imp.prescription_id}})
                    if(result.data) changeimp({payed: 'No', prescription_id: imp.prescription_id,
                        Bill_amount: imp.Bill_amount
                    })
                } main() ;
            }}> Pay Medicine Bill</button>
            }
        </div>
    );
}

export default MedicineBillView;