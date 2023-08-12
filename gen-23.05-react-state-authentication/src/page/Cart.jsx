import React, { useState } from 'react';
import Header from '../component/Header';
import Button from '../component/Button';
import { useDispatch, useSelector } from 'react-redux';
import FooterCart from '../component/FooterCart';
import {
    DecreaseAmount,
    deleteItemCart,
    increaseAmount,
} from '../store/cartSlice';

export default function Cart() {
    const carts = useSelector((state) => state.carts.cartItems);
    const dispatch = useDispatch();

    return (
        <div className='flex flex-col h-screen justify-between'>
            <Header />
            <div className='container mx-auto mb-auto'>
                {/* CARD */}
                {carts.map((cart, index) => (
                    <div className='m-4 flex justify-center' key={index}>
                        <div className='w-9/12 border-r border-b border-l rounded-xl border-gray-400 bg-slate-400 p-4 flex flex-col justify-between leading-normal'>
                            <div className='flex items-center justify-between'>
                                <div className='flex  gap-5 items-center'>
                                    <img src={cart.gambar} className='h-36' />
                                    <div>
                                        <h3 className='text-gray-900 font-bold text-2xl mb-2'>
                                            {cart.nama}
                                        </h3>
                                        <h4 className='text-xl font-bold text-red-800'>
                                            Rp{cart.harga * cart.amount}
                                        </h4>
                                    </div>
                                </div>
                                <div className='flex flex-col gap-4 items-end'>
                                    <Button.PlusMinusButton
                                        minusClick={() => {
                                            dispatch(DecreaseAmount(cart.id));
                                        }}
                                        plusClick={() => {
                                            dispatch(increaseAmount(cart.id));
                                        }}
                                        value={cart.amount}
                                    />
                                    <Button
                                        className='text-xl w-32 bg-white'
                                        onClick={() => {
                                            dispatch(deleteItemCart(cart.id));
                                        }}
                                    >
                                        Remove
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
                {/* END CARD */}
            </div>
            <FooterCart />
        </div>
    );
}
