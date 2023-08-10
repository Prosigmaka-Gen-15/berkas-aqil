import FormAddProduct from '../component/Admin/FormAddProduct';
import ListProduk from '../component/Admin/ListProduk';
import SideBar from '../component/Admin/SideBar';

const Admin = () => {
    return (
        <>
            <div className='flex flex-row'>
                <SideBar />
                <ListProduk />
            </div>
        </>
    );
};

export default Admin;
