import { useState } from "react";

function PreviewImage(){
    const [source, setSource] = useState("./public/images/1.png")

    function preview(){
        setSource("./public/images/1.png");
    }

    function preview1(){
        setSource("./public/images/2.png");
    }

    function preview2(){
        setSource("./public/images/3.png");
    }

    function preview3(){
        setSource("./public/images/4.png");
    }
    
    return(
        <div className="flex flex-col justify-between w-auto gap-4 md:pr-7 mb-8">
            <img src={source} id="previewImg" className="w-auto h-96 px-4 aspect-square bg-contain rounded-xl border-solid border-8 " />
            <div className="flex flex-row max-w-[100vw] overflow-x-scroll md:overflow-hidden justify-between h-24 gap-3">
                <MiniImg onClick={preview} src="./public/images/1.png" />
                <MiniImg onClick={preview1} src="./public/images/2.png" />
                <MiniImg onClick={preview2} src="./public/images/3.png" />
                <MiniImg onClick={preview3} src="./public/images/4.png" />
            </div>
        </div>
    )
}

function MiniImg(props){
    return <img {...props} className="miniImg px-2 w-26 h-26 rounded-md cursor-pointer border-solid border-4 hover:opacity-50 " />
}

// PreviewImage.MiniImg = MiniImg;

export default PreviewImage;