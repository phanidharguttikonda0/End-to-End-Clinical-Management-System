import React, { createContext } from 'react';
import { useLocation } from 'react-router-dom';
import Doctor from './Doctor';
import Patient from './Patient';

export const EmailContext = createContext() ;

function Home(props) {
    const location = useLocation();
    const {Email,person} = location.state ;

    return (
        <EmailContext.Provider value={Email}>
            {
                person === 1 ? <Doctor /> : <Patient />
            }
        </EmailContext.Provider>
    );
}



//* #3B4131 -> bg , #FFF6DB -> text or rgb(37, 150, 190) -> bg , rgba(0,0,0,255)
export default Home;