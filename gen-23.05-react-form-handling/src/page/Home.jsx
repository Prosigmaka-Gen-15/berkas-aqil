import FormAddProduct from '../component/FormAddProduct';
import FormAddProductYup from '../component/FormAddProductYup';
import NavBar from '../component/NavBar';



const Home = () => {
  return(
    <>
      <div className='flex flex-row'>
        <NavBar/>
        <FormAddProductYup/>
      </div>
      
    </>
  )
}

export default Home;