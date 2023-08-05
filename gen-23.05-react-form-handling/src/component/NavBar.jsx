import { Link } from "react-router-dom";

function NavBar(){
    return(
    <div className="bg-slate-400 w-32 min-h-screen">
      <nav className="flex flex-col justify-start items-center min-h-screen">
        <div>
          <A className="text-2xl ">ShopCart</A> 
        </div>
        <div className="flex flex-col gap-5 mt-10">
          <A>Product</A>
          <A>Add Product</A>
          <A>About Us</A>
        </div>
      </nav>
    </div>
    )
}

export default NavBar;

function A(props){
  const {className="text-xl", children} = props;
  return (
  <a {...props} className={`${className} font-bold mx-2`}>{children}</a>
  )
}