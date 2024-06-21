import React, { createContext, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Apprentice from './Apprentice';
import Doctor from './Doctor';
import Nurse from './Nurse';
import Patient from './Patient';

export const EmailContext = createContext() ;

function Home(props) {
    const location = useLocation();
    const {Email} = location.state ;
    const [entity,changeEntity] = useState('patient') ;

    return (
        <EmailContext.Provider value={Email}>
            {
                check(Email) === 1 ? <Doctor /> : check(Email) === 2 ? <Nurse /> : check(Email) === 3 ?
                <Apprentice /> : <Patient />
            }
        </EmailContext.Provider>
    );
}


function check(mail){
    //* here we are going to check whether he is doctor or patient or staff
    if (mail.includes('@kannaya.doctor')) {
        console.log('doctor')
        return 1 ;
    }else if (mail.includes('@kannaya.nurse')){
        console.log('nurse') ;
        return 2 ;
    }else if(mail.includes('@kannaya.apprentice')){
        console.log('staff') ;
        return 3 ;
    }else{
        console.log('patient')
        return 0 ;
    }
}



//* #3B4131 -> bg , #FFF6DB -> text or rgb(37, 150, 190) -> bg , rgba(0,0,0,255)
export default Home;