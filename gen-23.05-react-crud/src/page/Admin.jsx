import FormAddProduct from '../component/FormAddProduct';
import FormAddProductYup from '../component/FormAddProductYup';
import SideBar from '../component/SideBar';



const Home = () => {
  return(
    <>
      <div className='flex flex-row'>
        <SideBar/>
        <FormAddProductYup/>
      </div>
      
    </>
  )
}

export default Home;