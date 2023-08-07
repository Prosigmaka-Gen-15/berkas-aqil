import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Await, Link, useNavigate } from 'react-router-dom';
import { AiTwotoneEdit } from 'react-icons/ai';
import { MdDelete } from 'react-icons/md';
import { IoAddCircle } from 'react-icons/io5';
import Button from './Button';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup.object().shape({
    nama: yup.string().required(),
    merk: yup.string().required(),
    harga: yup.number().positive().integer().required(),
    deskripsi: yup.string().required(),
});

export default function ListProduk() {
    const [laptops, setLaptops] = useState([]);
    const navigate = useNavigate([]);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    });

    const getLaptops = async () => {
        try {
            let response = await axios.get('http://localhost:3000/laptop');
            setLaptops(response.data);
        } catch (err) {
            console.log(err);
        }
    };

    const deleteLaptop = (laptopId) => {
        console.log(laptopId);
        axios
            .delete('http://localhost:3000/laptop/' + laptopId)
            .then(() => getLaptops())
            .catch((errors) => console.log(errors));
    };

    useEffect(() => {
        getLaptops();
    }, []);

    return (
        <div className='container '>
            <div className='flex flex-col items-center  min-h-screen'>
                <h1 className='text-2xl font-bold p-4'>PRODUCT LIST</h1>
                <div>
                    <Link to={'addproduct'}>
                        <Button className='mb-2 flex flex-row items-center gap-2'>
                            Add Product <IoAddCircle />
                        </Button>
                    </Link>
                    <table className='table'>
                        <thead>
                            <tr>
                                <th className='border-black border-2 p-2 text-sm'>
                                    ID
                                </th>
                                <th className='border-black border-2 p-2 text-sm'>
                                    Name
                                </th>
                                <th className='border-black border-2 p-2 text-sm'>
                                    Price
                                </th>
                                <th className='border-black border-2 p-2 text-sm'>
                                    Image
                                </th>
                                <th className='border-black border-2 p-2 text-sm'>
                                    Option
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {laptops.map((laptop, index) => {
                                return (
                                    <tr key={index}>
                                        <td className='border-black border-2 p-2 text-sm'>
                                            {laptop.id}
                                        </td>
                                        <td className='border-black border-2 p-2 text-sm'>
                                            {laptop.nama}
                                        </td>
                                        <td className='border-black border-2 p-2 text-sm'>
                                            {laptop.harga}
                                        </td>
                                        <td className='border-black border-2 p-2 text-sm'>
                                            {laptop.gambar}
                                        </td>
                                        <td className='border-black border-2 p-2 text-sm gap-2 '>
                                            <div className='flex flex-row gap-2'>
                                                <Link
                                                    to={
                                                        'updateproduct/' +
                                                        laptop.id
                                                    }
                                                >
                                                    <Button className='flex flex-row gap-1 items-center'>
                                                        <AiTwotoneEdit /> Edit
                                                    </Button>
                                                </Link>
                                                <Button
                                                    className='flex flex-row gap-1 items-center'
                                                    onClick={() =>
                                                        deleteLaptop(laptop.id)
                                                    }
                                                >
                                                    <MdDelete /> Delete
                                                </Button>
                                            </div>
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

//Tidak digunakan
function Modal() {
    // const [showModal, setShowModal] = React.useState(false);

    // function submitForm(data) {
    //     try {
    //         axios.post('http://localhost:3000/laptop', data);
    //         console.log(data);
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }

    return (
        <>
            {/* Modal Add Product */}
            {showModal ? (
                <>
                    <div className='justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none'>
                        <div className='relative w-96 my-6 mx-auto max-w-3xl'>
                            {/*content*/}
                            <div className='border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none'>
                                {/*header*/}
                                <div className='flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t'>
                                    <h3 className='text-3xl font-semibold'>
                                        Add Product
                                    </h3>
                                    <button
                                        className='p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none'
                                        onClick={() => setShowModal(false)}
                                    >
                                        <span className='bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none'>
                                            ×
                                        </span>
                                    </button>
                                </div>
                                {/*body*/}
                                <div className='relative p-6 flex-auto'>
                                    <div className='mb-6'>
                                        <label className='block' htmlFor='nama'>
                                            Nama Laptop
                                        </label>
                                        <input
                                            type='text'
                                            className=' border-solid border-2 rounded'
                                            name='nama'
                                            {...register('nama')}
                                        ></input>
                                        <p>{errors.nama?.message}</p>
                                    </div>
                                    <div className='mb-6'>
                                        <label
                                            className='block'
                                            htmlFor='harga'
                                        >
                                            harga
                                        </label>
                                        <input
                                            type='text'
                                            className=' border-solid border-2 rounded'
                                            name='harga'
                                            {...register('harga')}
                                        ></input>
                                        <p>{errors.harga?.message}</p>
                                    </div>
                                    <div className='mb-6'>
                                        <label
                                            className='block'
                                            htmlFor='gambar'
                                        >
                                            Gambar
                                        </label>
                                        <input
                                            type='text'
                                            className=' border-solid border-2 rounded'
                                            name='gambar'
                                            {...register('gambar')}
                                        ></input>
                                        <p>{errors.gambar?.message}</p>
                                    </div>
                                    <div className='mb-6'>
                                        <label
                                            className='block'
                                            htmlFor='deskripsi'
                                        >
                                            Deskripsi
                                        </label>
                                        <input
                                            type='text'
                                            className=' border-solid border-2 rounded'
                                            name='deskripsi'
                                            {...register('deskripsi')}
                                        ></input>
                                        <p>{errors.deskripsi?.message}</p>
                                    </div>
                                </div>
                                {/*footer*/}
                                <div className='flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b'>
                                    <button
                                        className='text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150'
                                        type='button'
                                        onClick={() => setShowModal(false)}
                                    >
                                        Close
                                    </button>
                                    <button
                                        className='bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150'
                                        type='button'
                                        onClick={handleSubmit(submitForm)}
                                    >
                                        Save Changes
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='opacity-25 fixed inset-0 z-40 bg-black'></div>
                </>
            ) : null}
            {/* End Modal Add Product */}
        </>
    );
}
