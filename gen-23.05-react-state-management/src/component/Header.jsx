import { Link } from 'react-router-dom';

function Header() {
    return (
        <div className='bg-slate-400 border-b-4'>
            <nav className='container mx-auto flex flex-col gap-4 md:gap-0 md:flex-row items-center justify-between  my-0 p-3'>
                <div>
                    <Link to='/'>
                        <A className='text-3xl '>ShopCart</A>
                    </Link>
                </div>
                <div>
                    <Link to='/'>
                        <A>Home</A>
                    </Link>
                    <Link to='/'>
                        <A>Product</A>
                    </Link>
                    <Link to='/about-us'>
                        <A>About Us</A>
                    </Link>
                    <input
                        type='text'
                        className='mx-3 rounded p-1 mt-4 md:mt-0'
                        placeholder='Search Product'
                    ></input>
                </div>
                <div>
                    <A>Account</A>
                    <Link to={'/cart'}>
                        <A>Cart</A>
                    </Link>
                </div>
            </nav>
        </div>
    );
}

export default Header;

function A(props) {
    const { className = 'text-xl', children } = props;
    return (
        <a {...props} className={`${className} font-bold mx-2`}>
            {children}
        </a>
    );
}
