import { useState } from "react";
import Button from "./Button"

function DetailItem(){

    const [count, setCount] = useState(1)
    function countPlus(){
        if(count == 99){
            setCount (count);
        }else{
            setCount (count + 1);
        }
    }

    function countMin(){
        if(count == 1){
            setCount (count);
        }else{
            setCount (count - 1);
        }
    }

    return(
        <div className="flex flex-col gap-4 w-auto xl:w-2/4">
            <div>
                <h1 id="namaProduk" className="text-3xl font-bold mb-3">Asus Vivobook 14x M1403QA VIPS551-</h1>
                <h2 id="hargaProduk" className="text-3xl font-semibold mb-6">Rp8.500.000</h2>
                <p className="text-lg">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam velit magnam voluptate eos nostrum optio similique corporis laudantium earum ullam quam eaque dolorem ratione reprehenderit, delectus dolores vel beatae pariatur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe minus dolore non ratione. Tenetur, deleniti, atque corrupti incidunt amet ea in, officiis nihil officia mollitia eaque. Et modi expedita qui?</p>
            </div>
            <div className="flex items-baseline">
                <h3 className="text-xl font-bold mr-4">Ram</h3>
                <div className="flex space-x-3 text-lg">
                    <Button.Variant>8GB</Button.Variant>
                    <Button.Variant>16GB</Button.Variant>
                    <Button.Variant>32GB</Button.Variant>
                </div>
            </div>
            <div className="flex flex-row items-center">
                <Button onClick={countMin} className=" border-r-0 text-xl font-bold rounded-r-none">-</Button>
                <input  type="text" className="border-solid border-t-2 border-b-2 px-4 py-2 w-14 text-center text-lg font-bold justify-center" value={count} readOnly></input>
                <Button onClick={countPlus} className=" border-l-0 text-xl font-bold rounded-l-none">+</Button>
            </div>
            <div>
                <Button className="text-xl px-6 py-2 bg-green-600 hover:bg-slate-500 hover:text-white transition-all duration-150">Add to Cart</Button>
            </div>
        </div>
    )
}

export default DetailItem;