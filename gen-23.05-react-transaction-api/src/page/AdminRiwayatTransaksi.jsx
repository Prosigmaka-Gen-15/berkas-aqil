import React, { useEffect, useState } from 'react';
import SideBar from '../component/Admin/SideBar';
import { useSelector } from 'react-redux';
import axios from 'axios';

export default function AdminRiwayatTransaksi() {
    const [transaction, setTransaction] = useState([]);

    const getTransaction = async () => {
        try {
            let response = await axios.get('http://localhost:3000/transaksi');
            setTransaction(response.data);
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        getTransaction();
    }, []);

    return (
        <div className='flex flex-row'>
            <SideBar />
            <div className='container '>
                <div className='flex flex-col items-center  min-h-screen'>
                    <h1 className='text-2xl font-bold p-4'>
                        Riwayat Pemesanan
                    </h1>
                    <div>
                        <table className='table'>
                            <thead>
                                <tr>
                                    <th className='border-black border-2 p-2 text-sm'>
                                        User ID
                                    </th>
                                    <th className='border-black border-2 p-2 text-sm'>
                                        Total Items
                                    </th>
                                    <th className='border-black border-2 p-2 text-sm'>
                                        Total Price
                                    </th>
                                    <th className='border-black border-2 p-2 text-sm'>
                                        shipment
                                    </th>
                                    <th className='border-black border-2 p-2 text-sm'>
                                        date
                                    </th>
                                    <th className='border-black border-2 p-2 text-sm'>
                                        Transaction ID
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {transaction.map((transaksi, index) => {
                                    return (
                                        <tr key={index}>
                                            <td className='border-black border-2 p-2 text-sm'>
                                                {transaksi.userId}
                                            </td>
                                            <td className='border-black border-2 p-2 text-sm'>
                                                {transaksi.totalItems}
                                            </td>
                                            <td className='border-black border-2 p-2 text-sm'>
                                                {parseInt(
                                                    transaksi.totalPrice,
                                                )?.toLocaleString()}
                                            </td>
                                            <td className='border-black border-2 p-2 text-sm'>
                                                {transaksi.shipment}
                                            </td>
                                            <td className='border-black border-2 p-2 text-sm gap-2 '>
                                                {transaksi.date}
                                            </td>
                                            <td className='border-black border-2 p-2 text-sm gap-2 '>
                                                {transaksi.id}
                                            </td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}
