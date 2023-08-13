import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import Home from './page/Home';
import DetailProduct from './page/DetailProduct';
import AboutUs from './page/AboutUs';
import Admin from './page/Admin';
import Cart from './page/Cart';
import AdminAddProduct from './page/AdminAddProduct';
import AdminUpdateProduct from './page/AdminUpdateProduct';
import Login from './page/Login';
import PrivateRoutes from './component/route/PrivateRoutes';
import GuestRoute from './component/route/GuestRoute';
import OverviewCO from './page/OverviewCO';
import OverviewRoute from './component/route/OverviewRoute';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/:id' element={<DetailProduct />} />
                <Route path='/about-us' element={<AboutUs />} />
                <Route element={<GuestRoute />}>
                    <Route path='/login' element={<Login />} />
                </Route>
                <Route element={<PrivateRoutes />}>
                    <Route path='/cart' element={<Cart />} />
                    <Route element={<OverviewRoute />}>
                        <Route path='/cart/overview' element={<OverviewCO />} />
                    </Route>
                    <Route path='/admin' element={<Admin />} />
                    <Route
                        path='/admin/addproduct'
                        element={<AdminAddProduct />}
                    />
                    <Route
                        path='/admin/updateproduct/:id'
                        element={<AdminUpdateProduct />}
                    />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
