import laptop1 from './images/laptop1.jpg';

function DaftarProduk(){
  return(
    // Header
    <div>
      <section className="flex flex-wrap justify-around gap-4 mt-2 container mx-auto">
        <div className=" w-56 h-auto border-solid border-4 rounded-xl p-4 hover:scale-105 transtion duration-150">
          <img className="w-5/6 mx-auto" src={laptop1}></img>
          <h3 className="mb-3">ASUS-Zenbook-Pro-14-Duo-OLED</h3>
          <h4 className="mb-3">Harga Product</h4>
          <a className="text-center font-bold text-black w-24 h-4 p-2 bg-green-400 rounded-xl justify-center hover:bg-red-300 transition duration-150" href="#">Add to Cart</a>
        </div>
        <div className=" w-56 h-auto border-solid border-4 rounded-xl p-4 hover:scale-105 transtion duration-150">
          <img className="w-5/6 mx-auto" src={laptop1}></img>
          <h3 className="mb-3">ASUS-Zenbook-Pro-14-Duo-OLED</h3>
          <h4 className="mb-3">Harga Product</h4>
          <a className="text-center font-bold text-black w-24 h-4 p-2 bg-green-400 rounded-xl justify-center hover:bg-red-300 transition duration-150" href="#">Add to Cart</a>
        </div><div className=" w-56 h-auto border-solid border-4 rounded-xl p-4 hover:scale-105 transtion duration-150">
          <img className="w-5/6 mx-auto" src={laptop1}></img>
          <h3 className="mb-3">ASUS-Zenbook-Pro-14-Duo-OLED</h3>
          <h4 className="mb-3">Harga Product</h4>
          <a className="text-center font-bold text-black w-24 h-4 p-2 bg-green-400 rounded-xl justify-center hover:bg-red-300 transition duration-150" href="#">Add to Cart</a>
        </div>
        <div className=" w-56 h-auto border-solid border-4 rounded-xl p-4 hover:scale-105 transtion duration-150">
          <img className="w-5/6 mx-auto" src={laptop1}></img>
          <h3 className="mb-3">ASUS-Zenbook-Pro-14-Duo-OLED</h3>
          <h4 className="mb-3">Harga Product</h4>
          <a className="text-center font-bold text-black w-24 h-4 p-2 bg-green-400 rounded-xl justify-center hover:bg-red-300 transition duration-150" href="#">Add to Cart</a>
        </div>
        <div className=" w-56 h-auto border-solid border-4 rounded-xl p-4 hover:scale-105 transtion duration-150">
          <img className="w-5/6 mx-auto" src={laptop1}></img>
          <h3 className="mb-3">ASUS-Zenbook-Pro-14-Duo-OLED</h3>
          <h4 className="mb-3">Harga Product</h4>
          <a className="text-center font-bold text-black w-24 h-4 p-2 bg-green-400 rounded-xl justify-center hover:bg-red-300 transition duration-150" href="#">Add to Cart</a>
        </div>
		  </section>
    </div>
  )
}

export default DaftarProduk;