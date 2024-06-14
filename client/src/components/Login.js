import React, { createContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import login from './Login.module.css';

export const EmailContext = createContext();

function Login(props) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const submit = () => {
        if (email === 'phani' && password === 'k') {
            console.log('Yes got it')
            navigate('/home');
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
        <EmailContext.Provider value={email}>
            <div className={login.main}>
                <div className={login.login}>
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
        </EmailContext.Provider>
    );
}

export default Login;
