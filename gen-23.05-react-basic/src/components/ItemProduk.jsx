export default function ItemProduk (props) {
	return <>
		<div className="w-56 h-auto border-solid border-4 rounded-xl p-4 hover:scale-105 transtion duration-150">
			<img className="w-5/6 mx-auto" src={props.image}></img>
			<h3 className="mb-3">{props.namaProduk}</h3>
			<h4 className="mb-3">Harga Product</h4>
			<a className="text-center font-bold text-black w-24 h-4 p-2 bg-green-400 rounded-xl justify-center hover:bg-red-300 transition duration-150" href="#">Add to Cart</a>
		</div>
	</>
}

const mobil = {
	merk: "Toyota",
	tipe: "Avanza"
}

const { merk, tipe } = mobil

console.log(merk)
console.log(tipe)