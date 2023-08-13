import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../component/Button';
import { useSelector } from 'react-redux';

export default function OverviewCO() {
    const cartItems = useSelector((state) => state.carts.cartItems);
    const totalPrice = cartItems.reduce(
        (total, item) => total + item.harga * item.amount,
        0,
    );
    const totalProduk = cartItems.reduce(
        (total, item) => total + item.amount,
        0,
    );
    return (
        <div>
            {/* Header */}
            <div className='bg-slate-400 border-b-4'>
                <nav className='container mx-auto flex flex-col gap-5 md:gap-0 md:flex-row items-center justify-start  my-0 p-3'>
                    <Link to='/'>
                        <a className='text-3xl font-bold mx-2'>ShopCart</a>
                    </Link>
                    <a className='font-bold mx-2 text-xl'>|</a>
                    <a className='font-bold mx-2 text-xl'>Checkout</a>
                </nav>
            </div>
            {/* Body */}
            <div className='m-4 flex justify-center'>
                <div className='w-11/12 border-r border-b border-l rounded-xl border-gray-400 bg-slate-400 p-4 flex flex-col justify-between leading-normal'>
                    <table>
                        <thead>
                            <tr>
                                <th>Produk Dipesan</th>
                                <th>Harga</th>
                                <th>Jumlah</th>
                                <th>SubTotal Produk</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cartItems.map((cart, index) => {
                                return (
                                    <tr>
                                        <td className='flex flex-row gap-4 items-center'>
                                            <img
                                                src={cart.gambar}
                                                className='h-16'
                                            />
                                            {cart.nama}
                                        </td>
                                        <td className='text-center'>
                                            Rp{cart.harga}
                                        </td>
                                        <td className='text-center'>
                                            {cart.amount}
                                        </td>
                                        <td className='text-center'>
                                            Rp{cart.amount * cart.harga}
                                        </td>
                                    </tr>
                                );
                            })}
                            <tr>
                                <td
                                    className='text-right font-bold'
                                    colSpan={3}
                                >
                                    Total Pesanan ({totalProduk} produk)
                                </td>
                                <td className='text-center'>Rp{totalPrice}</td>
                            </tr>
                        </tbody>
                    </table>

                    {/* <div className='flex items-center justify-between'>
                        <div className='flex  gap-5 items-center'>
                            <img src='/images/1.png' className='h-36' />
                            <div>
                                <h3 className='text-gray-900 font-bold text-2xl mb-2'>
                                    Asus Vivobook 14x M1403
                                </h3>
                                <h4 className='text-xl font-bold text-red-800'>
                                    Rp8500000
                                </h4>
                            </div>
                        </div>
                        <div className='flex flex-col gap-4 items-end'>
                            <Button className='text-xl w-32 bg-white'>
                                Remove
                            </Button>
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
    );
}
