// import logo from './logo.svg';
// import './App.css';
import ProductList from './components/ProductList'
import Navbar  from "./components/Navbar";

function App() {
  const productList = [
    {
      price: 9999,
      name : "iphone XS Max",
      quantity: 0,
    },
    {
      price: 999,
      name : "iphone XS ",
      quantity: 0,
    },
    {
      price: 9999,
      name : "iphone 11 ",
      quantity: 0,
    },

  ]
  return (
    <>
      <Navbar />
      <main className='container'>
      <ProductList productList = {productList} />
      </main>
  
    </>
  );
}

export default App;
