import React, { useState } from 'react';
import Header from '../component/Header.jsx';
import Button from '../component/Button.jsx';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { setToken, setUser } from '../store/AuthSlice.js';
import { useNavigate } from 'react-router-dom';

export default function Login() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const setInputValue = (event) =>
        setFormData({
            ...formData,
            [event.target.name]: event.target.value,
        });

    const handleLogin = (event) => {
        event.preventDefault();
        axios
            .post('http://localhost:3000/login', formData)
            .then((res) => {
                const { accesToken, user } = res.data;
                dispatch(setToken(accesToken));
                dispatch(setUser(user));
                navigate('/admin');
            })
            .catch((err) => {
                alert('Terjadi Kesalahan');
                console.log(err);
            });
    };

    return (
        <>
            <Header />
            <div className='flex flex-col items-center my-24'>
                <div className='w-96 border-2 p-4'>
                    <h1 className='text-2xl font-bold text-center mb-6'>
                        Login
                    </h1>
                    <form className='flex flex-col  gap-6'>
                        <div className='flex items-center gap-2 justify-between'>
                            <label>Email</label>
                            <input
                                type='email'
                                name='email'
                                value={formData.email}
                                onChange={setInputValue}
                                className='rounded border-2 w-9/12'
                            />
                        </div>
                        <div className='flex items-center gap-2 justify-between'>
                            <label>Password</label>
                            <input
                                type='password'
                                name='password'
                                value={formData.password}
                                onChange={setInputValue}
                                className='rounded border-2 w-9/12'
                            />
                        </div>
                        <div className='flex justify-center gap-4'>
                            <Button
                                onClick={handleLogin}
                                className=' w-28 bg-slate-400'
                            >
                                Login
                            </Button>
                            <Button className=' w-28 bg-slate-400'>
                                SignUp
                            </Button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}
