import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import css from './Profile.module.css';

function Profile(props) {
    const l = useLocation() ;
    const {gmail} = l.state;
    const [patientProfile,changeProfile] = useState({});
    useEffect(() => {
        async function main(){
            const value = await axios.get("http://localhost:3001/patient-Profile", {params: {gmail: gmail}}) ;
            changeProfile(value.data) ;
        } main()
    }, []) ;

    return (
        <div className={css.main}>
            <h3>Name: {patientProfile.name}</h3>
            Mobile Number : {patientProfile.mobile_no}
            <h3> Email : {patientProfile.email} </h3>
            SEX : { patientProfile.sex === 'F' ? 'Female' : 'Male'}
            <h3> Blood Group : {patientProfile.blood_group} </h3>
            Address : {patientProfile.address}
        </div>
    );
}

export default Profile;