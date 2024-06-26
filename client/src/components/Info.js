import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import css from './info.module.css';

function Info(props) {

    const l = useLocation() ;
    const {gmail} = l.state;
    const [doctorProfile,changeProfile] = useState({});
    useEffect(() => {
        async function main(){
            const value = await axios.get("http://localhost:3001/info", {params: {gmail: gmail}}) ;
            changeProfile(value.data) ;
        } main()
    }, []) ;

    return (
        <div className={css.main}>
            <h3>Name: {doctorProfile.name}</h3>
            Mobile Number : {doctorProfile.mobile_no}
            <h3> Email : {doctorProfile.email} </h3>
            SEX : { doctorProfile.sex === 'F' ? 'Female' : 'Male'}
            <h3> Blood Group : {doctorProfile.blood_group} </h3>
            Address : {doctorProfile.address}
            <h3> appointment fee : {doctorProfile.appointment_fee}</h3>
            Specialization : {doctorProfile.specialization}
        </div>
    );
}

export default Info;