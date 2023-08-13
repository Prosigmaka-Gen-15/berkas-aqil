import React from 'react';
import Button from './Button';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

export default function FooterCart() {
    const carts = useSelector((state) => state.carts.cartItems);
    const navigate = useNavigate();

    const totalPrice = carts.reduce(
        (total, item) => total + item.harga * item.amount,
        0,
    );

    const handleCheckout = () => {
        if (carts.length === 0) {
            alert('Tambahkan Produk Dulu Bang');
        } else {
            navigate('overview');
        }
    };

    return (
        <div className='bg-slate-400 border-t-4 sticky bottom-0 w-full'>
            <nav className='container mx-auto flex flex-col md:gap-0 md:flex-row items-center justify-end my-0 p-3'>
                <h3 className='text-xl font-bold mr-28'>
                    Total Price : Rp{totalPrice}
                </h3>
                <Button className='bg-red-400' onClick={handleCheckout}>
                    Checkout
                </Button>
            </nav>
        </div>
    );
}
