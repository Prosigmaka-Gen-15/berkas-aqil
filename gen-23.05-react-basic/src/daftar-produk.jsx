import laptop1 from './images/laptop1.jpg';
import ItemProduk from './components/ItemProduk.jsx';

function DaftarProduk(){
  const propsProduk1 = {
    image: laptop1,
    namaProduk: "ASUS Aspire One"
  }

  return(
    // Header
    <div>
      <section className="flex flex-wrap justify-around gap-4 mt-2 container mx-auto">
        <ItemProduk {...propsProduk1} />
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

// spread operator

const mobil = {
  merk: "Toyota",
  tipe: "Avanza"
}

const mobilModif = {
  ...mobil,
  sayapBelakang: true,
  velgRacing: true,
  mesin: 'V8'
}

// console.log(mobilModif)

const sayur = ['wortel', 'tomat']
const buah = ['pisang', 'apel', ...sayur]

// console.log(buah)