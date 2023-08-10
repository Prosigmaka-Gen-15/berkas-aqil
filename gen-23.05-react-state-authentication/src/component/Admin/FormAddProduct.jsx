import { useState } from 'react';
import Button from '../Button';

export default function FormAddProduct() {
    // const [nama, setNama] = useState();
    // const [merk, setMerk] = useState();
    // const [harga, setHarga] = useState();
    // const [deskripsi, setDeskripsi] = useState();

    const [form, setForm] = useState({
        nama: '',
        merk: '',
        harga: '',
        deskripsi: '',
    });

    function onChange(event) {
        setForm({ ...form, [event.target.name]: event.target.value });
    }

    function submit(event) {
        event.preventDefault();
        console.log(form);
    }

    return (
        <div className='container bg-sky-500 '>
            <div className='border-2 p-4'>
                <form onSubmit={submit}>
                    <div className='mb-7'>
                        <h1 className='text-3xl font-bold underline'>
                            Add Product
                        </h1>
                    </div>
                    <div className='mb-6'>
                        <label className='block' htmlFor='nama'>
                            Nama Laptop
                        </label>
                        <input
                            type='text'
                            className=' border-solid border-2'
                            name={'nama'}
                            value={form.nama}
                            onChange={onChange}
                        ></input>
                    </div>
                    <div className='mb-6'>
                        <label className='block' htmlFor='merk'>
                            Merk
                        </label>
                        <input
                            type='text'
                            className=' border-solid border-2'
                            name='merk'
                            value={form.merk}
                            onChange={onChange}
                        ></input>
                    </div>
                    <div className='mb-6'>
                        <label className='block' htmlFor='harga'>
                            Harga
                        </label>
                        <input
                            type='text'
                            className=' border-solid border-2'
                            name='harga'
                            value={form.harga}
                            onChange={onChange}
                        ></input>
                    </div>
                    <div className='mb-6'>
                        <label className='block' htmlFor='deskripsi'>
                            Deskripsi
                        </label>
                        <input
                            type='text'
                            className=' border-solid border-2'
                            name='deskripsi'
                            value={form.deskripsi}
                            onChange={onChange}
                        ></input>
                    </div>
                    <div className='mb-6'>
                        <Button className='bg-slate-400'>Submit</Button>
                    </div>
                </form>
            </div>
        </div>
    );
}
