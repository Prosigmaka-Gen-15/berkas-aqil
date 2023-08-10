import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import Home from './page/Home';
import DetailProduct from './page/DetailProduct';
import AboutUs from './page/AboutUs';
import Admin from './page/Admin';
import Cart from './page/Cart';
import AdminAddProduct from './page/AdminAddProduct';
import AdminUpdateProduct from './page/AdminUpdateProduct';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/:id' element={<DetailProduct />} />
                <Route path='/about-us' element={<AboutUs />} />
                <Route path='/cart' element={<Cart />} />
                <Route path='/admin' element={<Admin />} />
                <Route path='/admin/addproduct' element={<AdminAddProduct />} />
                <Route
                    path='/admin/updateproduct/:id'
                    element={<AdminUpdateProduct />}
                />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
