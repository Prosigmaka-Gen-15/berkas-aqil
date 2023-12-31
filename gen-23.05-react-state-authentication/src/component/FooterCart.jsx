import React from 'react';
import Button from './Button';
import { useSelector } from 'react-redux';

export default function FooterCart() {
    const carts = useSelector((state) => state.carts.cartItems);

    const totalPrice = carts.reduce(
        (total, item) => total + item.harga * item.amount,
        0,
    );

    return (
        <div className='bg-slate-400 border-t-4 sticky bottom-0 w-full'>
            <nav className='container mx-auto flex flex-col md:gap-0 md:flex-row items-center justify-end my-0 p-3'>
                <h3 className='text-xl font-bold mr-28'>
                    Total Price : Rp{totalPrice}
                </h3>
                <Button className='bg-red-400'>Checkout</Button>
            </nav>
        </div>
    );
}
