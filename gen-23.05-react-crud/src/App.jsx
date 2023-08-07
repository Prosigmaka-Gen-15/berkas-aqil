import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import Home from './page/Home';
import DetailProduct from './page/DetailProduct';
import AboutUs from './page/AboutUs';
import Admin from './page/Admin';
import AddProduct from './page/AddProduct';
import UpdateProduct from './page/UpdateProduct';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/:id' element={<DetailProduct />} />
                <Route path='/about-us' element={<AboutUs />} />
                <Route path='/admin' element={<Admin />} />
                <Route path='/admin/addproduct' element={<AddProduct />} />
                <Route
                    path='/admin/updateproduct/:id'
                    element={<UpdateProduct />}
                />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
