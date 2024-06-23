import React from 'react';
import { useLocation } from 'react-router-dom';

function BookOP(props) {
    const l = useLocation() ;
    const {doctor} = l.state;
    return (
        <div>
            {doctor.doctorname}
        </div>
    );
}

export default BookOP;