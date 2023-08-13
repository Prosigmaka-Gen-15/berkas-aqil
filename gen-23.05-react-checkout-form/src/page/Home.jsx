import { Link, useNavigate } from 'react-router-dom';
import Header from '../component/Header';
import ItemProduk from '../component/Home/ItemProduk';
import { useEffect, useState } from 'react';
import axios from 'axios';

const Home = () => {
    //hopscotch sejenis thunder client
    const [laptops, setLaptops] = useState([]);
    const navigate = useNavigate([]);

    const getLaptops = async () => {
        try {
            let response = await axios.get('http://localhost:3000/laptop');
            setLaptops(response.data);
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        getLaptops();
    }, []);

    const handleGoToDetail = (id) => {
        navigate(`/${id}`);
    };

    return (
        <>
            <Header />
            <div className='container mx-auto'>
                <section className='flex flex-wrap justify-around gap-4 mt-2 '>
                    {laptops.map((laptop, index) => {
                        return (
                            <ItemProduk
                                key={index}
                                id={laptop.id}
                                image={laptop.gambar}
                                namaproduk={laptop.nama}
                                hargaproduk={laptop.harga}
                            />
                        );
                    })}
                </section>
            </div>
        </>
    );
};

export default Home;
