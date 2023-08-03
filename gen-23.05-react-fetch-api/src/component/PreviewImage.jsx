// import { useState } from "react";

// function PreviewImage(){
//     const [source, setSource] = useState("/images/1.png")

//     return(
//         <div className="flex flex-col justify-between w-auto gap-4 md:pr-7 mb-8">
//             <img src={source} id="previewImg" className="w-auto h-96 px-4 aspect-square bg-contain rounded-xl border-solid border-8 " />
//             <div className="flex flex-row max-w-[100vw] overflow-x-scroll md:overflow-hidden justify-between h-24 gap-3">
//                 <MiniImg onClick={() => setSource("/images/1.png")} src="/images/1.png" />
//                 <MiniImg onClick={() => setSource("/images/2.png")} src="/images/2.png" />
//                 <MiniImg onClick={() => setSource("/images/3.png")} src="/images/3.png" />
//                 <MiniImg onClick={() => setSource("/images/4.png")} src="/images/4.png" />
//             </div>
//         </div>
//     )
// }

// function MiniImg(props){
//     return <img {...props} className="miniImg px-2 w-26 h-26 rounded-md cursor-pointer border-solid border-4 hover:opacity-50 " />
// }

// // PreviewImage.MiniImg = MiniImg;

// export default PreviewImage;




import { useEffect, useState } from "react";


function PreviewImage(props){  
    
    function getImgUrl(name) {
        return new URL(`${name}`, import.meta.url).href;
      }

    const {sourcePreview, sourceMini} = props;

    const [source, setSource] = useState("");

    function MiniImg(props){
        const {handleclick} = props;
        return <img {...props} onClick={() => setSource(getImgUrl(handleclick))} className=" px-2 w-26 h-26 rounded-md cursor-pointer border-solid border-4 hover:opacity-50 " />
    }
    PreviewImage.MiniImg = MiniImg;

    useEffect(() => {
        setSource(getImgUrl(sourcePreview));
      }, [sourcePreview]);

    return(
        <div className="flex flex-col justify-between w-auto gap-4 md:pr-7 mb-8">
            <img src={source} className="w-auto h-96 px-4 aspect-square bg-contain rounded-xl border-solid border-8 " />
            <div className="flex flex-row max-w-[100vw] overflow-x-scroll md:overflow-hidden justify-between h-24 gap-3">
                {sourceMini}
            </div>
        </div>
    )
}

export default PreviewImage;