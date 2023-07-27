import laptop1 from './images/laptop1.jpg';
import ItemProduk from './components/ItemProduk.jsx';

function DaftarProduk(){
  return(
    // Header
    <div>
      <section className="flex flex-wrap justify-around gap-4 mt-2 container mx-auto">
        <ItemProduk image={laptop1} namaProduk="ASUS Zenbook" />
        <ItemProduk image={laptop1} namaProduk="Acer Nitro" />
        <ItemProduk image={laptop1} namaProduk="Macbook Air" />
        <ItemProduk image={laptop1} namaProduk="ASUS TUF" />
        <ItemProduk image={laptop1} namaProduk="ASUS ROG" />
        <ItemProduk image={laptop1} namaProduk="Lenovo Yoga" />
		  </section>
    </div>
  )
}

export default DaftarProduk;