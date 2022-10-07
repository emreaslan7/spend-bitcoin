import BitcoinCard from './components/BitcoinCard';
import Budget from './components/Budget';
import Footer from './components/Footer';
import Header from './components/Header'
import Product from './components/Product';
import Receipt from './components/Receipt';




function App() {
  return (
    <div className='bg-[#f1f2f6]'>
      <Header />
      <div className='max-w-[1000px] mx-auto'>
        <BitcoinCard/>
        <Budget />
        <Product />
        <Receipt />
      </div>
      <Footer/>
    </div>
  );
}

export default App;
