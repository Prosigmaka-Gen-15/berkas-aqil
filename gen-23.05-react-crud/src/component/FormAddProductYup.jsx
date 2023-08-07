import { useState } from "react";
import Button from "./Button";
import { useForm } from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object().shape({
    nama : yup.string().required(),
    merk : yup.string().required(),
    harga : yup.number().positive().integer().required(),
    deskripsi : yup.string().required(),
});


export default function FormAddProductYup() {
   const {register, handleSubmit, formState: { errors }} =useForm({
    resolver: yupResolver(schema),
   }); 

    function submitForm(data){
        console.log(data);
    };

  return (
    <div className="container bg-sky-500 ">
        <div className="border-2 p-4">
            <form onSubmit={handleSubmit(submitForm)}>
                <div className="mb-7">
                    <h1 className="text-3xl font-bold underline">Add Product</h1>
                </div>
                <div className="mb-6">
                    <label className="block" htmlFor="nama">Nama Laptop</label>
                    <input type="text" className=" border-solid border-2 rounded" name="nama" {...register('nama')}></input>
                    <p>{errors.nama?.message}</p>
                </div>
                <div className="mb-6">
                    <label className="block" htmlFor="merk">Merk</label>
                    <input type="text" className=" border-solid border-2 rounded" name="merk" {...register('merk')}></input>
                    <p>{errors.merk?.message}</p>
                </div> 
                <div className="mb-6">
                    <label className="block" htmlFor="harga">Harga</label>
                    <input type="text" className=" border-solid border-2 rounded" name="harga" {...register('harga')}></input>
                    <p>{errors.harga?.message}</p>
                </div> 
                <div className="mb-6">
                    <label className="block" htmlFor="deskripsi">Deskripsi</label>
                    <input type="text" className=" border-solid border-2 rounded" name="deskripsi" {...register('deskripsi')}></input>
                    <p>{errors.deskripsi?.message}</p>
                </div> 
                <div className="mb-6">
                    <Button className="bg-slate-400">Submit</Button>
                </div> 
            </form>
        </div>
        
    </div>
  );
}
