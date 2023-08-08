import React, { useState } from 'react';
import Header from '../component/Header';
import Button from '../component/Button';
import { useSelector } from 'react-redux';
import FooterCart from '../component/FooterCart';

export default function Cart() {
    const carts = useSelector((state) => state.carts);

    const [count, setCount] = useState(1);
    function countPlus() {
        if (count == 99) {
            setCount(count);
        } else {
            setCount(count + 1);
        }
    }

    function countMin() {
        if (count == 1) {
            setCount(count);
        } else {
            setCount(count - 1);
        }
    }
    return (
        <>
            <Header />
            <div className='container mx-auto'>
                {/* CARD */}
                {carts.map((cart) => (
                    <div className='m-4 flex justify-center'>
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
                                <div className='items-end'>
                                    <Button.PlusMinusButton
                                        minusClick={countMin}
                                        plusClick={countPlus}
                                        value={count}
                                    />
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
