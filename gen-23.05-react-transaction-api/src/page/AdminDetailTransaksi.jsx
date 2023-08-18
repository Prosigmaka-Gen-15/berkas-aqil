import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { set } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import SideBar from '../component/Admin/SideBar';

export default function AdminDetailTransaksi() {
    const { id } = useParams();
    const [transaksi, setTransaksi] = useState({});
    const [produk, setProduk] = useState([]);

    const data = [
        { nama: 'User ID', isi: transaksi.userId },
        { nama: 'Id Transaksi', isi: transaksi.idTransaksi },
        { nama: 'Total Barang', isi: transaksi.totalItems },
        { nama: 'Pengiriman', isi: transaksi.shipment },
        { nama: 'Tanggal Pemesanan', isi: transaksi.date },
    ];

    const getTransaksi = async () => {
        try {
            let response = await axios.get(
                'http://localhost:3000/transaksi/' + id,
            );
            setTransaksi(response.data);
        } catch (err) {
            console.log(err);
        }
    };

    const getProduk = async () => {
        try {
            let response = await axios.get(
                'http://localhost:3000/detailTransaksi/' + id,
            );
            setProduk(response.data.products);
            // console.log(response.data.products);
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        getTransaksi();
        getProduk();
    }, [id]);

    return (
        <div className='flex flex-row'>
            <SideBar />
            <div className='container '>
                <div className='flex flex-col items-center  min-h-screen'>
                    <h1 className='text-2xl font-bold p-4'>
                        Detail Riwayat Pemesanan
                    </h1>
                    <div className='w-5/6'>
                        <div className='my-6'>
                            {data.map((data, index) => {
                                return (
                                    <div key={index} className='flex '>
                                        <h4 className='w-44'>{data.nama}</h4>
                                        <h4 className='mx-2'>:</h4>
                                        <h4>{data.isi}</h4>
                                    </div>
                                );
                            })}
                        </div>
                        <table className='table w-full'>
                            <thead>
                                <tr>
                                    <th className='border-black border-2 p-2 text-sm'>
                                        No
                                    </th>
                                    <th className='border-black border-2 p-2 text-sm'>
                                        Id Product
                                    </th>
                                    <th className='border-black border-2 p-2 text-sm'>
                                        Nama Produk
                                    </th>
                                    <th className='border-black border-2 p-2 text-sm'>
                                        Harga Produk
                                    </th>
                                    <th className='border-black border-2 p-2 text-sm'>
                                        Jumlah Produk
                                    </th>
                                    <th className='border-black border-2 p-2 text-sm'>
                                        SubTotal Produk
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {produk.map((products, index) => {
                                    return (
                                        <tr key={index}>
                                            <td className='border-black border-2 p-2 text-sm text-center'>
                                                {index + 1}
                                            </td>
                                            <td className='border-black border-2 p-2 text-sm text-center'>
                                                {products.productId}
                                            </td>
                                            <td className='border-black border-2 p-2 text-sm'>
                                                {products.productName}
                                            </td>
                                            <td className='border-black border-2 p-2 text-sm'>
                                                Rp
                                                {parseInt(
                                                    products.productPrice,
                                                )?.toLocaleString()}
                                            </td>
                                            <td className='border-black border-2 p-2 text-sm text-center'>
                                                {products.amount}
                                            </td>
                                            <td className='border-black border-2 p-2 text-sm'>
                                                Rp
                                                {parseInt(
                                                    products.subTotal,
                                                )?.toLocaleString()}
                                            </td>
                                        </tr>
                                    );
                                })}
                                <tr>
                                    <td
                                        colSpan={5}
                                        className='border-black border-2 p-2 text-sm text-center font-bold'
                                    >
                                        Biaya Pengiriman
                                    </td>
                                    <td className='border-black border-2 p-2 text-sm'>
                                        Rp{transaksi.shipmentPrice}
                                    </td>
                                </tr>
                                <tr>
                                    <td
                                        colSpan={5}
                                        className='border-black border-2 p-2 text-sm text-center font-bold'
                                    >
                                        Biaya Admin
                                    </td>
                                    <td className='border-black border-2 p-2 text-sm'>
                                        Rp{transaksi.paymentAdmin}
                                    </td>
                                </tr>
                                <tr>
                                    <td
                                        colSpan={5}
                                        className='border-black border-2 p-2 text-sm text-center font-bold'
                                    >
                                        Total
                                    </td>
                                    <td className='border-black border-2 p-2 text-sm'>
                                        Rp
                                        {parseInt(
                                            transaksi.totalPrice,
                                        )?.toLocaleString()}
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}
