import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AiTwotoneEdit } from 'react-icons/ai';
import { MdDelete } from 'react-icons/md';
import { IoAddCircle } from 'react-icons/io5'; 
import Button from './Button'

export default function ListProduk() {
  const [laptops, setLaptops] = useState([]);
  const navigate = useNavigate([]);

  const getLaptops = async () => {
    try {
      let response = await axios.get("http://localhost:3000/laptop");
      setLaptops(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getLaptops();
  }, []);

  return (
    <div className="container ">
      <div className="flex flex-col items-center  min-h-screen">
        <h1 className="text-2xl font-bold p-4">PRODUCT LIST</h1>
        <div>
        <Button className="mb-2 flex flex-row items-center gap-2">Add Product <IoAddCircle/></Button>
        <table className="table">
          <thead>
            <tr>
            <th className="border-black border-2 p-2 text-sm">ID</th>
              <th className="border-black border-2 p-2 text-sm">Name</th>
              <th className="border-black border-2 p-2 text-sm">Price</th>
              <th className="border-black border-2 p-2 text-sm">Image</th>
              <th className="border-black border-2 p-2 text-sm">Option</th>
            </tr>
          </thead>
          <tbody>
            {
                laptops.map((laptop, index)=>{
                    return(
                        <tr key={index}>
                            <td className="border-black border-2 p-2 text-sm">{laptop.id}</td>
                            <td className="border-black border-2 p-2 text-sm">{laptop.nama}</td>
                            <td className="border-black border-2 p-2 text-sm">{laptop.harga}</td>
                            <td className="border-black border-2 p-2 text-sm">{laptop.gambar}</td>
                            <td className="border-black border-2 p-2 text-sm gap-2 ">
                                <div className="flex flex-row gap-2">
                                    <Button className="flex flex-row gap-1 items-center"><AiTwotoneEdit/> Edit </Button>
                                    <Button className="flex flex-row gap-1 items-center"><MdDelete/> Delete</Button>
                                </div>
                            </td>
                        </tr>
                    )
                })
            }
          </tbody>
        </table>
        </div>
        
      </div>
    </div>
  );
}
