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

    const handleAddToCart = () => {
        if (token !== '') {
            const data = {
                nama: laptop.nama,
                harga: laptop.harga,
                gambar: laptop.gambar,
                amount: 1,
            };
            alert('Berhasil ditambah ke Cart');
            dispatch(addToCart(data));
        }
        alert('Silahkan Login Terlebih Dahulu');
        navigate('/login');
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
                <DetailItem
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
                    handleclick={handleAddToCart}
                />
            </div>
        </>
    );
};

export default DetailProduct;
