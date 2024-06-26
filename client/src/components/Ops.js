import React from 'react';
import { useLocation } from 'react-router-dom';

function Ops(props) {
    const l = useLocation() ;
    const {appointment, gmail, patient} = l.state ;

    return (
        <div>
            {
                console.log(appointment.patient_id === patient.patient_id)
            }
        </div>
    );
}

export default Ops;