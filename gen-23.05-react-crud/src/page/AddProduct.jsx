import React, { useState } from 'react';
import SideBar from '../component/SideBar';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import Button from '../component/Button';
import axios from 'axios';
import { Link, Navigate, useNavigate } from 'react-router-dom';

const schema = yup.object().shape({
    nama: yup.string().required(),
    gambar: yup.string().required(),
    harga: yup.number().positive().integer().required(),
    deskripsi: yup.string().required(),
});

export default function AddProduct() {
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    });

    const submitForm = async (data) => {
        try {
            await axios.post('http://localhost:3000/laptop', data);
            navigate('/admin');
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className='flex flex-row'>
            <SideBar />
            <div className='container'>
                <div className='flex flex-col min-h-screen'>
                    <form onSubmit={handleSubmit(submitForm)} className='ml-6'>
                        <div className='mb-7'>
                            <h1 className='text-2xl font-bold mt-6'>
                                ADD PRODUCT
                            </h1>
                        </div>
                        <section>
                            <div className='mb-6'>
                                <label className='block' htmlFor='nama'>
                                    Nama Laptop
                                </label>
                                <input
                                    type='text'
                                    className=' border-solid border-2 rounded w-72'
                                    name='nama'
                                    {...register('nama')}
                                ></input>
                                <p>{errors.nama?.message}</p>
                            </div>
                            <div className='mb-6'>
                                <label className='block' htmlFor='harga'>
                                    Harga
                                </label>
                                <input
                                    type='text'
                                    className=' border-solid border-2 rounded w-72'
                                    name='harga'
                                    {...register('harga')}
                                ></input>
                                <p>{errors.harga?.message}</p>
                            </div>
                            <div className='mb-6'>
                                <label className='block' htmlFor='gambar'>
                                    Gambar
                                </label>
                                <input
                                    type='file'
                                    className=' border-solid border-2 rounded w-72'
                                    name='gambar'
                                    {...register('gambar')}
                                ></input>
                                <p>{errors.gambar?.message}</p>
                            </div>
                            <div className='mb-6'>
                                <label className='block' htmlFor='deskripsi'>
                                    Deskripsi
                                </label>
                                <input
                                    type='text'
                                    className=' border-solid border-2 rounded w-72'
                                    name='deskripsi'
                                    {...register('deskripsi')}
                                ></input>
                                <p>{errors.deskripsi?.message}</p>
                            </div>
                        </section>
                        <div className='mb-6'>
                            <Button className='bg-slate-400'>Submit</Button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
