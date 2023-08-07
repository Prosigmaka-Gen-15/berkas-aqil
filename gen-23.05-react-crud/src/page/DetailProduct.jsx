import { useParams } from "react-router-dom";
import Button from "../component/Button";
import DetailItem from "../component/DetailItem";
import Header from "../component/Header";
import PreviewImage from "../component/PreviewImage";
import { useEffect, useState } from "react";
import axios from "axios";

const DetailProduct = () => {
    const {id} = useParams();
    const [laptop, setLaptop] = useState({})
    
    const getLaptop = async () => {
        try{
          let response = await axios.get(`http://localhost:3000/laptop/${id}`);
          setLaptop(response.data);
        } catch(err){
          console.log(err);
        }
      }

    useEffect(() => {
        getLaptop()
    }, [id])

    return(
        <>
            <Header />
            <div className="flex mt-10 flex-wrap justify-center px-4 md:px-0">
                <PreviewImage
                    sourcePreview={laptop.gambar}
                    sourceMini={<>
                        <PreviewImage.MiniImg handleclick={laptop.gambar} src={laptop.gambar} />
                        <PreviewImage.MiniImg handleclick={laptop.gambar1} src={laptop.gambar1} />
                        <PreviewImage.MiniImg handleclick={laptop.gambar2} src={laptop.gambar2} />
                        <PreviewImage.MiniImg handleclick={laptop.gambar3} src={laptop.gambar3} />
                    </>}
                />
                <DetailItem
                    namaproduk={laptop.nama} 
                    hargaproduk={laptop.harga}
                    penjelasanproduk="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea iusto laboriosam quasi quas corporis ipsum, ut quisquam ullam, dolor repellendus, similique eaque nulla ipsam provident est saepe perferendis? Praesentium, quos.Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea iusto laboriosam quasi quas corporis ipsum, ut quisquam ullam, dolor repellendus, similique eaque nulla ipsam provident est saepe perferendis? Praesentium, quos." 
                    variant={<>
                        <Button.Variant>8GB</Button.Variant>
                        <Button.Variant>16GB</Button.Variant>
                        <Button.Variant>24GB</Button.Variant>
                    </>}
                />
            </div>
        </>
    )
}

export default DetailProduct;