import Button from "../component/Button";
import DetailItem from "../component/DetailItem";
import Header from "../component/Header";
import PreviewImage from "../component/PreviewImage";

const DetailProduct = () => {
    return(
        <>
            <Header />
            <div className="flex mt-10 flex-wrap justify-center px-4 md:px-0">
                <PreviewImage
                    // sourcePreview="/images/1.png"
                    // sourceMini={<>
                    //     <PreviewImage.MiniImg handleclick="/images/1.png" src="/images/1.png" />
                    //     <PreviewImage.MiniImg handleclick="/images/2.png" src="/images/2.png" />
                    //     <PreviewImage.MiniImg handleclick="/images/3.png" src="/images/3.png" />
                    //     <PreviewImage.MiniImg handleclick="/images/4.png" src="/images/4.png" />
                    // </>}
                />
                <DetailItem 
                    namaproduk="Asus Vivobook 14x M1403QA VIPS551" 
                    hargaproduk="Rp.8.500.000"
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