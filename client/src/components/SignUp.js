import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import login from './Login.module.css';

function SignUp(props) {

    const [email, changeEmail] = useState('')
    const [password, changePassword] = useState('')
    const [confirmPassword, changeConfirmPassword] = useState('') ;
    const navigate = useNavigate() ;
    const [gender, setGender] = useState('');
    const [bloodgroup,changeblood] = useState('') ;
    const [mobile,changeMobile] = useState('') ;
    const [dob,changeDob] = useState('') ;
    const [fullname, changeName] = useState('') ;
    const [address,changeAddress] = useState("") ;

    const Login = () => {
        navigate('/')
    }

    const forgot = () => {
        navigate('/forgot-credentials')
    }

    const submit = async () => {
        console.log(gender)
        const result = await axios.post("http://localhost:3001/Sign-Up",{email: email, sex: gender, address: address,
            dob: dob, mob : mobile, name: fullname, bloodgroup: bloodgroup, password: password
        }) ;
        console.log(result) ;
        navigate('/patient-home',{state: {gmail: email}});
    }

    return (

        <div className={login.main}>
                <div className={login.login}>
                    <div className={login.first}>
                    <input type='text' placeholder='Full Name' value={fullname} onChange={(event) => changeName(event.target.value)} />
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
                        <input type='date' placeholder='DOB' value={dob} onChange={(event) => changeDob(event.target.value)} />
                        <input type='number' placeholder='Mobile' value={mobile} onChange={(event) => changeMobile(event.target.value)} />
                        <select   value={gender} onChange={(event) => setGender(event.target.value)}>
                            <option value="">Select Gender</option>
                            <option value="M">Male</option>
                            <option value="F">Female</option>
                        </select>
                        <select  value={bloodgroup} onChange={(event) => changeblood(event.target.value)}>
                            <option value="">Select Blood Group</option>
                            <option value="O+">O+</option>
                            <option value="O-">O-</option>
                            <option value="A+">A+</option>
                            <option value="A-">A-</option>
                            <option value="B+">B+</option>
                            <option value="B-">B-</option>
                            <option value="AB+">AB+</option>
                            <option value="AB-">AB-</option>
                            <option value="ABO+">ABO+</option>
                            <option value="ABO-">ABO-</option>
                        </select>
                        <textarea placeholder='Address' value={address} onChange={(event) => changeAddress(event.target.value)} />
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