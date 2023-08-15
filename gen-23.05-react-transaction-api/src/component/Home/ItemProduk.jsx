import Button from '../Button';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../store/cartSlice.js';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

function ItemProduk(props) {
    const token = useSelector((state) => state.auth.token);
    const cart = useSelector((state) => state.carts);
    const [amount, setAmount] = useState(1);

    const dispatch = useDispatch();
    const navigate = useNavigate([]);

    const data = {
        id: props.id,
        nama: props.namaproduk,
        harga: props.hargaproduk,
        gambar: props.image,
        amount: amount,
    };

    const handleSubmit = (event) => {
        event.stopPropagation();
        if (token !== '') {
            alert('Berhasil ditambah ke Cart');
            dispatch(addToCart(data));
        } else {
            alert('Silahkan Login Terlebih Dahulu');
            navigate('/login');
        }
    };

    const handleGoToDetail = (id) => {
        navigate(`/${id}`);
    };

    return (
        <div
            {...props}
            className=' w-56 h-auto border-solid border-4 rounded-xl p-4 hover:scale-105 transtion duration-150 cursor-pointer'
            onClick={() => {
                handleGoToDetail(props.id);
            }}
        >
            <img className='w-5/6 h-auto mx-auto' src={props.image}></img>
            <h3 className='mb-3 mt-3'>{props.namaproduk}</h3>
            <h4 className='mb-3'>
                Rp{parseInt(props.hargaproduk)?.toLocaleString()}
            </h4>
            <Button
                className='bg-green-500 hover:bg-green-700'
                onClick={handleSubmit}
            >
                Add to Cart
            </Button>
        </div>
    );
}
export default ItemProduk;
