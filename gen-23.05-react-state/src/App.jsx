import DetailItem from "./component/DetailItem";
import Header from "./component/Header";
import PreviewImage from "./component/PreviewImage";

function App() {
  return (
    <>
      <Header />
      <div className="flex mt-10 flex-wrap justify-center px-4 md:px-0">
        <PreviewImage></PreviewImage>
        <DetailItem />
      </div>
    </>
  )
}

export default App
