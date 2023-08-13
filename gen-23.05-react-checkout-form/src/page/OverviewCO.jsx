import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Button from '../component/Button';
import { useDispatch, useSelector } from 'react-redux';
import { checkoutCart } from '../store/cartSlice';

export default function OverviewCO() {
    const cartItems = useSelector((state) => state.carts.cartItems);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const jasaPengiriman = 90;
    const biayaLayanan = 1000;

    const totalPriceProduk = cartItems.reduce(
        (total, item) => total + item.harga * item.amount,
        0,
    );

    const totalPrice =
        cartItems.reduce((total, item) => total + item.harga * item.amount, 0) +
        jasaPengiriman;

    const totalPriceFinal =
        cartItems.reduce((total, item) => total + item.harga * item.amount, 0) +
        jasaPengiriman +
        biayaLayanan;

    const totalProduk = cartItems.reduce(
        (total, item) => total + item.amount,
        0,
    );

    const metodePembayaran = [
        { nama: 'COD (Cash Or Duel)' },
        { nama: 'ShopPay' },
        { nama: 'Bank BNI' },
        { nama: 'Bank BRI' },
        { nama: 'Kartu Kredit / Debit' },
    ];

    const detailPembayaran = [
        {
            nama: 'Subtotal Produk',
            total: totalPriceProduk,
            className: 'text-right p-2 mx-2',
        },
        {
            nama: 'Total Ongkos Kirim',
            total: 90,
            className: 'text-right p-2 mx-2',
        },
        {
            nama: 'Biaya Layanan',
            total: '1.000',
            className: 'text-right p-2 mx-2',
        },
        {
            nama: 'Total Pembayaran',
            total: totalPriceFinal,
            className: 'text-2xl text-red-600 font-bold text-right p-2 mx-2',
        },
    ];

    const handleCheckout = () => {
        dispatch(checkoutCart());
        navigate('/');
    };

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
            {/* Body  Rincian Produk*/}
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
                                        <td className='flex flex-row gap-4 items-center p-2'>
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
                                        <td className='text-center '>
                                            Rp{cart.amount * cart.harga}
                                        </td>
                                    </tr>
                                );
                            })}
                            <tr>
                                <td
                                    className='font-bold text-right p-2'
                                    colSpan={3}
                                >
                                    Opsi Pengiriman :
                                    <label className='mx-2'>
                                        <input type='radio' name='jasaKirim' />
                                        JNE
                                    </label>
                                    <label className='mx-2'>
                                        <input type='radio' name='jasaKirim' />
                                        JNT
                                    </label>
                                    <label className='mx-2'>
                                        <input type='radio' name='jasaKirim' />
                                        SiCepat
                                    </label>
                                </td>
                                <td className='text-center p-2'>
                                    Rp{jasaPengiriman}
                                </td>
                            </tr>
                            <tr>
                                <td
                                    className='text-right font-bold p-2'
                                    colSpan={3}
                                >
                                    Total Pesanan ({totalProduk} produk)
                                </td>
                                <td className='text-center p-2 text-red-600 font-bold'>
                                    Rp{totalPrice}
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            {/* Body metode Pembayaran */}
            <div className='m-4 flex justify-center'>
                <div className='w-11/12 border-r border-b border-l rounded-xl border-gray-400 bg-slate-400 p-4 flex flex-col justify-between leading-normal'>
                    {/* Metode Pembayaran */}
                    <div className='flex gap-6 items-center border-b-2 py-4'>
                        <h1 className='text-lg font-bold'>Metode Pembayaran</h1>
                        {metodePembayaran.map((metode, index) => {
                            return (
                                <Button
                                    key={index}
                                    className='bg-slate-200 hover:bg-slate-600'
                                >
                                    {metode.nama}
                                </Button>
                            );
                        })}
                    </div>
                    {/* Detail Pembayaran */}
                    <div className='flex flex-col items-end py-4 gap-4'>
                        <div>
                            <table>
                                {detailPembayaran.map((detail, index) => {
                                    return (
                                        <tr>
                                            <td className='text-left pr-6 mx-2'>
                                                {detail.nama}
                                            </td>
                                            <td className={detail.className}>
                                                Rp{detail.total}
                                            </td>
                                        </tr>
                                    );
                                })}
                            </table>
                        </div>
                        <div>
                            <Button
                                className='bg-red-400 hover:bg-red-800 w-32'
                                onClick={handleCheckout}
                            >
                                Checkout
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
