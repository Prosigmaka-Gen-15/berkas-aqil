import FormAddProduct from '../component/FormAddProduct';
import NavBar from '../component/NavBar';



const Home = () => {
  return(
    <>
      <div className='flex flex-row'>
        <NavBar/>
        <FormAddProduct/>
      </div>
      
    </>
  )
}

export default Home;