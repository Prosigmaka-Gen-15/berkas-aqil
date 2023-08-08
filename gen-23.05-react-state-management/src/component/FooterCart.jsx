import React from 'react';
import Button from './Button';

export default function FooterCart() {
    return (
        <div className='bg-slate-400 border-t-4 fixed left-0 bottom-0 w-full'>
            <nav className='container mx-auto flex flex-col  gap-4 md:gap-0 md:flex-row items-center justify-end  my-0 p-3'>
                <Button className='bg-red-400'>Checkout</Button>
            </nav>
        </div>
    );
}
