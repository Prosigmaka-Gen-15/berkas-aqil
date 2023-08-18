import { Link, useNavigate } from 'react-router-dom';
import { BsShopWindow, BsBagPlus } from 'react-icons/bs';
import { FaProductHunt } from 'react-icons/fa';
import { FcAbout } from 'react-icons/fc';
import { MdAccountCircle } from 'react-icons/md';
import { AiFillSetting } from 'react-icons/ai';
import { BiLogOut, BiHistory } from 'react-icons/bi';
import { useDispatch, useSelector } from 'react-redux';
import { resetAuthData } from '../../store/AuthSlice';

function SideBar() {
    const user = useSelector((state) => state.auth.user);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const menu = [
        { name: 'List Product', icon: <FaProductHunt />, link: '/admin' },
        {
            name: 'Riwayat Transaksi',
            icon: <BiHistory />,
            link: '/admin/riwayattransaksi',
        },
        { name: 'Add Product', icon: <BsBagPlus />, link: '' },
        { name: 'About Us', icon: <FcAbout />, link: '' },
        { name: 'Setting', icon: <AiFillSetting />, link: '' },
    ];

    const handleLogout = () => {
        dispatch(resetAuthData());
        navigate('/');
    };

    return (
        <div className='bg-slate-400 w-40 min-h-screen transition-all duration-300 ease-in-out border-r-2'>
            <nav className=' flex flex-col justify-start items-center min-h-screen mt-5'>
                <div>
                    <Link to={'/'}>
                        <A className='text-xl flex flex-row items-center gap-2'>
                            <BsShopWindow /> ShopCart
                        </A>
                    </Link>
                </div>
                <div className='flex flex-col gap-5 mt-10'>
                    {menu.map((val, index) => {
                        return (
                            <Link key={index} to={`${val.link}`}>
                                <A>
                                    {val.icon} {val.name}
                                </A>
                            </Link>
                        );
                    })}
                </div>
                <div className='flex flex-col gap-5 mt-10'>
                    <A>
                        <MdAccountCircle /> {user.username}
                    </A>
                    <button onClick={handleLogout}>
                        <A>
                            <BiLogOut /> Logout
                        </A>
                    </button>
                </div>
            </nav>
        </div>
    );
}

export default SideBar;

function A(props) {
    const { className = 'text-md', children } = props;
    return (
        <a
            {...props}
            className={`${className} font-bold mx-2 flex flex-row items-center gap-2`}
        >
            {children}
        </a>
    );
}
