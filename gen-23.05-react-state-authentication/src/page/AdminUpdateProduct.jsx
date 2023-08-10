import React, { useEffect, useState } from 'react';
import SideBar from '../component/Admin/SideBar';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import Button from '../component/Button';
import axios from 'axios';
import { Link, Navigate, useNavigate, useParams } from 'react-router-dom';

const schema = yup.object().shape({
    nama: yup.string().required(),
    gambar: yup.string().required(),
    harga: yup.number().positive().integer().required(),
    deskripsi: yup.string().required(),
});

export default function AdminUpdateProduct() {
    const { id } = useParams();
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    });

    const getLaptops = () => {
        axios
            .get('http://localhost:3000/laptop/' + id)
            .then((res) => {
                setValue('nama', res.data.nama);
                setValue('harga', res.data.harga);
                setValue('gambar', res.data.gambar);
                setValue('deskripsi', res.data.deskripsi);
            })
            .catch((errors) => {
                alert(errors);
                console.log(errors);
            });
    };

    useEffect(() => {
        getLaptops();
    }, [id]);

    const submitForm = async (data) => {
        try {
            await axios.put('http://localhost:3000/laptop/' + id, data);
            navigate('/admin');
            console.log(data);
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
                                Update Product
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
                                    type='text'
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
