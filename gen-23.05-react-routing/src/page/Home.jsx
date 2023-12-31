import { Link } from 'react-router-dom';
import Header from '../component/Header';
import ItemProduk from '../component/ItemProduk';

const Home = () => {
  return(
    <>
      <Header/>
      <div className='container mx-auto'>
        <section className="flex flex-wrap justify-around gap-4 mt-2 ">
          <Link to="/1"><ItemProduk image="/images/1.png" namaproduk="Asus Vivobook 14x M1403QA VIPS551" hargaproduk="Rp8.500.000"/></Link>
          <Link to="/2"><ItemProduk image="/images/2.png" namaproduk="Asus Vivobook 14x M1403QA VIPS551" hargaproduk="Rp8.500.000"/></Link>
          <Link to="/3"><ItemProduk image="/images/3.png" namaproduk="Asus Vivobook 14x M1403QA VIPS551" hargaproduk="Rp8.500.000"/></Link>
          <Link to="/4"><ItemProduk image="/images/4.png" namaproduk="Asus Vivobook 14x M1403QA VIPS551" hargaproduk="Rp8.500.000"/></Link>
          <Link to="/5"><ItemProduk image="/images/1.png" namaproduk="Asus Vivobook 14x M1403QA VIPS551" hargaproduk="Rp8.500.000"/></Link>
        </section>
      </div>
    </>
  )
}

export default Home;