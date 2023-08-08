import Button from './Button';
import { useDispatch } from 'react-redux';
import { addToCart } from '../store/cartSlice.js';
import { useNavigate } from 'react-router-dom';

function ItemProduk(props) {
    const dispatch = useDispatch();
    const navigate = useNavigate([]);

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = {
            nama: `${props.namaproduk}`,
            harga: `${props.hargaproduk}`,
            gambar: `${props.image}`,
        };
        alert('Berhasil ditambah ke Cart');
        dispatch(addToCart(data));
    };

    const handleGoToDetail = (id) => {
        navigate(`/${id}`);
    };

    return (
        <div
            {...props}
            className=' w-56 h-auto border-solid border-4 rounded-xl p-4 hover:scale-105 transtion duration-150 cursor-pointer'
            // onClick={() => {
            //     handleGoToDetail(props.id);
            // }}
        >
            <form onSubmit={handleSubmit}>
                <img className='w-5/6 h-auto mx-auto' src={props.image}></img>
                <h3 className='mb-3 mt-3'>{props.namaproduk}</h3>
                <h4 className='mb-3'>Rp{props.hargaproduk}</h4>
                <Button className='bg-green-500 hover:bg-green-700'>
                    Add to Cart
                </Button>
            </form>
        </div>
    );
}
export default ItemProduk;
