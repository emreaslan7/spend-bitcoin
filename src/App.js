import BitcoinCard from './components/BitcoinCard';
import Budget from './components/Budget';
import Header from './components/Header'
import Product from './components/Product';



function App() {
  return (
    <div className='bg-[#f1f2f6]'>
      <Header />
      <div className='max-w-[1000px] mx-auto'>
        <BitcoinCard/>
        <Budget />
        <Product />
      </div>
      
    </div>
  );
}

export default App;
