import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {signInWithEmailAndPassword} from "firebase/auth";
import {auth} from '../firebase/firebase'

export default function LoginPage() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [buttonMsg, setBtnMsg] = useState("Login")
    const navigate = useNavigate();

    async function onFormSubmit(e){
        e.preventDefault();
        setLoading(true);

        try{
            const userCred = await signInWithEmailAndPassword(
                auth,
                email,
                password
            );
        } catch (err){
            alert(err.message);
        }
        setLoading(false);
        navigate("/");
    }

  return (
    <div className='white-background d-flex justify-content-center align-items-center poppins'>
        <div className='card border-0 p-3'>
            <h1 className='fw-bold'>Login</h1>
            <h5 className='mb-3'>Please Login to continue</h5>
            <form onSubmit={onFormSubmit}>
                <div className="mb-3">
                    <div className='fw-bold'>Email:</div>
                    <input type="email" className="form-control" placeholder='***@rice.edu' value={email} onChange={(e) => setEmail(e.target.value)} required/>
                </div>
                <div className="mb-3">
                    <div className='fw-bold'>Password:</div>
                    <input type="password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} required/>
                </div>
                <div className='d-flex justify-content-end'>
                    <button type="submit" className='btn btn-dark'>{buttonMsg}</button>
                </div>
                
            </form>
        </div>
    </div>
  )
}
