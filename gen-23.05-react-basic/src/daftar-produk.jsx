import ItemProduk from './component/ItemProduk';
import laptop from './images/laptop1.jpg';
import laptop2 from './images/laptop2.jpg';
import laptop3 from './images/laptop3.jpg';

function DaftarProduk(){
  return(
    // Body
    <div className='container mx-auto'>
      <section className="flex flex-wrap justify-around gap-4 mt-2 ">
        <ItemProduk image={laptop} namaProduk="Laptop Asus" hargaProduk="Rp14.000.000"/>
        <ItemProduk image={laptop2} namaProduk="Laptop Asus" hargaProduk="Rp14.000.000"/>
        <ItemProduk image={laptop3} namaProduk="Laptop Asus" hargaProduk="Rp14.000.000"/>
        <ItemProduk image={laptop2} namaProduk="Laptop Asus" hargaProduk="Rp14.000.000"/>
        <ItemProduk image={laptop3} namaProduk="Laptop Asus" hargaProduk="Rp14.000.000"/>
		  </section>
    </div>
  )
}

export default DaftarProduk;