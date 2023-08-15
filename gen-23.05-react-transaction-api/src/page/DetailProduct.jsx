import { useNavigate, useParams } from 'react-router-dom';
import Button from '../component/Button';
import DetailItem from '../component/DetailProduct/DetailItem';
import Header from '../component/Header';
import PreviewImage from '../component/DetailProduct/PreviewImage';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../store/cartSlice';

const DetailProduct = () => {
    const token = useSelector((state) => state.auth.token);
    const { id } = useParams();
    const [laptop, setLaptop] = useState({});
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [amount, setAmount] = useState(1);

    const data = {
        id: laptop.id,
        nama: laptop.nama,
        harga: laptop.harga,
        gambar: laptop.gambar,
        amount: amount,
    };

    const handleAddToCart = () => {
        if (token !== '') {
            alert('Berhasil ditambah ke Cart');
            dispatch(addToCart(data));
        } else {
            alert('Silahkan Login Terlebih Dahulu');
            navigate('/login');
        }
    };

    const getLaptop = async () => {
        try {
            let response = await axios.get(
                `http://localhost:3000/laptop/${id}`,
            );
            setLaptop(response.data);
        } catch (err) {
            console.log(err);
        }
    };

    const minusAmount = () => {
        if (amount > 1) {
            setAmount(amount - 1);
        }
    };

    const plusAmount = () => {
        if (amount < 99) {
            setAmount(amount + 1);
        }
    };

    useEffect(() => {
        getLaptop();
    }, [id]);

    return (
        <>
            <Header />
            <div className='flex mt-10 flex-wrap justify-center px-4 md:px-0'>
                <PreviewImage
                    sourcePreview={laptop.gambar}
                    sourceMini={
                        <>
                            <PreviewImage.MiniImg
                                handleclick={laptop.gambar}
                                src={laptop.gambar}
                            />
                            <PreviewImage.MiniImg
                                handleclick={laptop.gambar1}
                                src={laptop.gambar1}
                            />
                            <PreviewImage.MiniImg
                                handleclick={laptop.gambar2}
                                src={laptop.gambar2}
                            />
                            <PreviewImage.MiniImg
                                handleclick={laptop.gambar3}
                                src={laptop.gambar3}
                            />
                        </>
                    }
                />
                <div className='flex flex-col gap-4 w-auto xl:w-2/4'>
                    <div>
                        <h1 className='text-3xl font-bold mb-3'>
                            {laptop.nama}
                        </h1>
                        <h2 className='text-3xl font-semibold mb-6'>
                            Rp{parseInt(laptop.harga)?.toLocaleString()}
                        </h2>
                        <p className='text-lg'>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Rerum odio consectetur, dolorum, voluptatem
                            optio, enim exercitationem nemo officia dolore eaque
                            nulla facere quo impedit voluptatibus accusamus at
                            placeat nisi in! Lorem ipsum dolor sit amet
                            consectetur adipisicing elit. Officia, ab, adipisci
                            beatae accusantium quisquam, officiis repellat
                            architecto laborum quibusdam quas facilis quos
                            aliquam veritatis. Consequatur reiciendis aliquid
                            ullam voluptas deleniti!
                        </p>
                    </div>
                    <div className='flex items-baseline'>
                        <h3 className='text-xl font-bold mr-4'>Ram</h3>
                        <div className='flex space-x-3 text-lg'>
                            <Button.Variant>8GB</Button.Variant>
                            <Button.Variant>16GB</Button.Variant>
                            <Button.Variant>24GB</Button.Variant>
                        </div>
                    </div>
                    <Button.PlusMinusButton
                        minusClick={minusAmount}
                        plusClick={plusAmount}
                        value={amount}
                    />
                    <div>
                        <Button
                            onClick={handleAddToCart}
                            className='text-xl px-6 py-2 bg-green-600 hover:bg-slate-500 hover:text-white transition-all duration-150'
                        >
                            Add to Cart
                        </Button>
                    </div>
                </div>
            </div>
            {/* tidak dipakai */}
            {/* <DetailItem
                id={laptop.id}
                namaproduk={laptop.nama}
                hargaproduk={laptop.harga}
                penjelasanproduk='Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea iusto laboriosam quasi quas corporis ipsum, ut quisquam ullam, dolor repellendus, similique eaque nulla ipsam provident est saepe perferendis? Praesentium, quos.Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea iusto laboriosam quasi quas corporis ipsum, ut quisquam ullam, dolor repellendus, similique eaque nulla ipsam provident est saepe perferendis? Praesentium, quos.'
                variant={
                    <>
                        <Button.Variant>8GB</Button.Variant>
                        <Button.Variant>16GB</Button.Variant>
                        <Button.Variant>24GB</Button.Variant>
                    </>
                }
                value={data.amount}
                handleclick={handleAddToCart}
            /> */}
        </>
    );
};

export default DetailProduct;
