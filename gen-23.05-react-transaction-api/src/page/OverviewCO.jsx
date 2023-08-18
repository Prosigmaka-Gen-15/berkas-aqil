import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Button from '../component/Button';
import { useDispatch, useSelector } from 'react-redux';
import { checkoutCart } from '../store/cartSlice';
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';
import { date } from 'yup';

export default function OverviewCO() {
    const cartItems = useSelector((state) => state.carts.cartItems);
    const user = useSelector((state) => state.auth.user);
    const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('');
    const [selectedShipping, setSelectedShipping] = useState({});
    const [biayaLayanan, setBiayaLayanan] = useState(0);
    const idTransaksi = uuidv4(); // ID transaksi
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const totalPriceProduk = cartItems.reduce(
        (total, item) => total + item.harga * item.amount,
        0,
    );

    const totalPrice =
        cartItems.reduce((total, item) => total + item.harga * item.amount, 0) +
        selectedShipping.harga;

    const totalPriceFinal =
        cartItems.reduce((total, item) => total + item.harga * item.amount, 0) +
        selectedShipping.harga +
        biayaLayanan;

    const totalProduk = cartItems.reduce(
        (total, item) => total + item.amount,
        0,
    );

    const optionsPengiriman = [
        { nama: 'JNE', harga: 10000 },
        { nama: 'JNT', harga: 10500 },
        { nama: 'SiCepat', harga: 20000 },
    ];

    const metodePembayaran = [
        { nama: 'COD (Cash Or Duel)', biayaLayanan: 1500 },
        { nama: 'ShopPay', biayaLayanan: 1500 },
        { nama: 'ShopPayLater', biayaLayanan: 12000 },
        { nama: 'Bank BNI', biayaLayanan: 6000 },
        { nama: 'Bank BRI', biayaLayanan: 6000 },
        { nama: 'Kartu Kredit / Debit', biayaLayanan: 10000 },
    ];

    const detailPembayaran = [
        {
            nama: 'Subtotal Produk',
            total: totalPriceProduk,
            className: 'text-right p-2 mx-2',
        },
        {
            nama: 'Total Ongkos Kirim',
            total: selectedShipping.harga,
            className: 'text-right p-2 mx-2',
        },
        {
            nama: 'Biaya Layanan',
            total: biayaLayanan,
            className: 'text-right p-2 mx-2',
        },
        {
            nama: 'Total Pembayaran',
            total: totalPriceFinal,
            className: 'text-2xl text-red-600 font-bold text-right p-2 mx-2',
        },
    ];

    const produkDiBeli = cartItems.map((item) => {
        return {
            productId: item.id,
            productName: item.nama,
            productPrice: item.harga,
            amount: item.amount,
            subTotal: item.amount * item.harga,
        };
    });

    const transaksi = {
        userId: user.id,
        idTransaksi: idTransaksi,
        totalItems: totalProduk,
        totalPrice: totalPriceFinal,
        shipment: selectedShipping.nama,
        shipmentPrice: selectedShipping.harga,
        payment: selectedPaymentMethod,
        paymentAdmin: biayaLayanan,
        date: new Date().toISOString(),
    };

    const detailTransaksi = {
        idTransaksi: idTransaksi,
        products: produkDiBeli,
    };

    const postCheckout = async () => {
        try {
            axios.post('http://localhost:3000/transaksi', transaksi);
            axios.post(
                'http://localhost:3000/detailTransaksi',
                detailTransaksi,
            );
        } catch (err) {
            console.log(err);
        }
    };

    const handleCheckout = () => {
        if (selectedPaymentMethod === '')
            return alert('Pilih metode pembayaran');
        if (selectedShipping === 0) return alert('Pilih pilih opsi pengiriman');
        postCheckout();
        dispatch(checkoutCart());
        navigate('/');
    };

    const handlePaymentMethodChange = (option) => {
        setSelectedPaymentMethod(option.nama);
        setBiayaLayanan(option.biayaLayanan);
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
                                    <tr key={index}>
                                        <td className='flex flex-row gap-4 items-center p-2'>
                                            <img
                                                src={cart.gambar}
                                                className='h-16'
                                            />
                                            {cart.nama}
                                        </td>
                                        <td className='text-center'>
                                            Rp
                                            {parseInt(
                                                cart.harga,
                                            )?.toLocaleString()}
                                        </td>
                                        <td className='text-center'>
                                            {cart.amount}
                                        </td>
                                        <td className='text-center '>
                                            Rp
                                            {parseInt(
                                                cart.amount * cart.harga,
                                            )?.toLocaleString()}
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
                                    {optionsPengiriman.map((option, index) => (
                                        <label className='mx-2' key={index}>
                                            <input
                                                type='radio'
                                                id={option.nama}
                                                name='optionNama'
                                                value={option.harga}
                                                onChange={() =>
                                                    setSelectedShipping(option)
                                                }
                                                checked={
                                                    selectedShipping.nama ==
                                                    option.nama
                                                }
                                            />
                                            {option.nama}
                                        </label>
                                    ))}
                                </td>
                                <td className='text-center p-2'>
                                    Rp
                                    {parseInt(
                                        selectedShipping.harga,
                                    )?.toLocaleString()}
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
                                    Rp{parseInt(totalPrice)?.toLocaleString()}
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
                                    className={`bg-slate-200 hover:bg-slate-600 ${
                                        selectedPaymentMethod === metode.nama
                                            ? 'bg-slate-600'
                                            : ''
                                    }`}
                                    onClick={() =>
                                        handlePaymentMethodChange(metode)
                                    }
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
                                        <tr key={index}>
                                            <td className='text-left pr-6 mx-2'>
                                                {detail.nama}
                                            </td>
                                            <td className={detail.className}>
                                                Rp
                                                {parseInt(
                                                    detail.total,
                                                )?.toLocaleString()}
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
