import BitcoinCard from './components/BitcoinCard';
import Budget from './components/Budget';
import Header from './components/Header'
import ProductList from './components/ProductList';



function App() {
  return (
    <div className='bg-[#f1f2f6]'>
      <Header />
      <div className='max-w-[1000px] mx-auto'>
        <BitcoinCard/>
        <Budget />
        <ProductList />
      </div>
      
    </div>
  );
}

export default App;
