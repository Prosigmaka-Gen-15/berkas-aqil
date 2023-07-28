import Button from "./Button";

function ItemProduk(props){
    return(
    <div className=" w-56 h-auto border-solid border-4 rounded-xl p-4 hover:scale-105 transtion duration-150">
        <img className="w-5/6 h-28 mx-auto" src={props.image}></img>
        <h3 className="mb-3 mt-3">{props.namaProduk}</h3>
        <h4 className="mb-3">{props.hargaProduk}</h4>
        <Button className="bg-green-500 hover:bg-green-700">Add to Cart</Button>
    </div>
    )
 
}
export default ItemProduk;