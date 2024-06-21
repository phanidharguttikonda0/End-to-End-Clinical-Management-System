import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import login from './Login.module.css';

function SignUp(props) {

    const [email, changeEmail] = useState('')
    const [password, changePassword] = useState('')
    const [confirmPassword, changeConfirmPassword] = useState('') ;
    const navigate = useNavigate() ;

    const Login = () => {
        navigate('/')
    }

    const forgot = () => {
        navigate('/forgot-credentials')
    }

    const submit = () => {
        navigate('/home',{state: {Email: email}});
    }

    return (

        <div className={login.main}>
                <div className={login.login}>
                    <div className={login.first}>
                        <input
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={(event) => changeEmail(event.target.value)}
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(event) => changePassword(event.target.value)}
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            value={confirmPassword}
                            onChange={(event) => changeConfirmPassword(event.target.value)}
                        />
                    </div>
                    <div className={login.mid}>
                        <button onClick={forgot}>Forgot Password</button>
                        <button onClick={Login}>Login </button>
                    </div>
                    <div className={login.last}>
                        <button onClick={submit}>SignUp</button>
                    </div>
                </div>
            </div>
    );
}

export default SignUp;