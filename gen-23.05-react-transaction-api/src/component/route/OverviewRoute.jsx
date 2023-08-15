import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

export default function OverviewRoute() {
    const isCartEmpty = useSelector(
        (state) => state.carts.cartItems.length === 0,
    );

    if (isCartEmpty) {
        return <Navigate to='/' />;
    }

    return <Outlet />;
}
