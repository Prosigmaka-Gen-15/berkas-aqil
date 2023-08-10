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
    const carts = useSelector((state) => state.carts);
    const dispatch = useDispatch();

    return (
        <>
            <Header />
            <div className='container mx-auto'>
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
                                            {cart.harga}
                                        </h4>
                                    </div>
                                </div>
                                <div className='flex flex-col gap-4 items-end'>
                                    <Button.PlusMinusButton
                                        minusClick={() => {
                                            dispatch(DecreaseAmount(index));
                                        }}
                                        plusClick={() => {
                                            dispatch(increaseAmount(index));
                                        }}
                                        value={cart.amount}
                                    />
                                    <Button
                                        className='text-xl w-32 bg-white'
                                        onClick={() => {
                                            dispatch(deleteItemCart(index));
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
        </>
    );
}
