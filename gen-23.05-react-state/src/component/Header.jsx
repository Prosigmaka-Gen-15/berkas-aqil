function Header(){
    return(
    <div className="bg-slate-400 border-b-4">
      <nav className="container mx-auto flex flex-col gap-4 md:gap-0 md:flex-row items-center justify-between  my-0 p-3">
        <div>
          <A href="#" className="text-3xl ">ShopCart</A>
        </div>
        <div>
          <A href="#">Home</A>
          <A href="#">Product</A>
          <A href="#">About Us</A>
          <input type="text" className="mx-3 rounded p-1 mt-4 md:mt-0" placeholder="Search Product"></input>
        </div>
        <div>
          <A href="#" >Account</A>
          <A href="#" >Cart</A>
        </div>
      </nav>
    </div>
    )
}

export default Header;

function A(props){
  const {className="text-xl", children} = props;
  return (
  <a {...props} className={`${className} font-bold mx-2`}>{children}</a>
  )
}