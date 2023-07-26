function Header(){
    return(
    <div className="bg-slate-400 border-b-4">
      <nav class="container mx-auto flex flex-col gap-4 md:gap-0 md:flex-row items-center justify-between  my-0 p-3">
        <div>
          <a href="#" class="font-bold text-3xl mx-2">ShopCart</a>
        </div>
        <div>
          <a href="#" class="font-bold text-xl mx-2">Home</a>
          <a href="#" class="font-bold text-xl mx-2">Product</a>
          <a href="#" class="font-bold text-xl mx-2">About Us</a>
          <input type="text" class="mx-3 rounded p-1 mt-4 md:mt-0" placeholder="Search Product"></input>
        </div>
        <div>
          <a href="#" class="font-bold text-xl mx-2">Account</a>
          <a href="#" class="font-bold text-xl mx-2">Cart</a>
        </div>
      </nav>
    </div>
    )
}

export default Header;