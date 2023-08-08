import FormAddProduct from '../component/FormAddProduct';
import ListProduk from '../component/ListProduk';
import SideBar from '../component/SideBar';

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
