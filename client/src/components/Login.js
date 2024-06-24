import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import login from './Login.module.css';


function Login(props) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const submit = async () => {
        const person = check(email) ;
        let url = 'http://localhost:3001/patient-check'
        if (person === 1) {
            url = 'http://localhost:3001/doctor-check' ;
        }
        console.log('Started') ;
        console.log((await axios.get('http://localhost:3001/')).data)
        const value = await axios.post(url, {email:email,password: password}) ;

        if (value.data) {
            if (person === 1) navigate('/doctor-home',{state: {gmail: email}})
            else navigate('/patient-home', {state: {gmail: email}})
        } else {
            alert('Incorrect details');
        }
    };

    const forgot = () => {
        navigate('/forgot-credentials');
    };

    const signUp = () => {
        navigate('/sign-up');
    };

    return (
            <div className={login.main}>
                <div className={login.login}>
                    <div className={login.logo}>
                    <h2> Kannaya Clinics</h2>
                    <h5> Where Care Meets Compassion</h5>
                    </div>
                    <div className={login.first}>
                        <input
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={(event) => setEmail(event.target.value)}
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(event) => setPassword(event.target.value)}
                        />
                    </div>
                    <div className={login.mid}>
                        <button onClick={forgot}>Forgot Password</button>
                        <button onClick={signUp}>Sign Up</button>
                    </div>
                    <div className={login.last}>
                        <button onClick={submit}>Login</button>
                    </div>
                </div>
            </div>
    );
}

export default Login;


function check(mail){
    //* here we are going to check whether he is doctor or patient or staff
    if (mail.includes('@kannaya.doctor')) {
        console.log('doctor')
        return 1 ;
    }else{
        console.log('patient')
        return 0 ;
    }
}
