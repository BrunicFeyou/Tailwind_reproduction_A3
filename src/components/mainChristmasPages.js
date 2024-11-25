import { Search } from 'lucide-react';
import Header from './header';
import SearchBar from './searchBar';
import ProductCards from './productCard';
import Pagination from './pagination';

function MainChristmasPages() {
  return (
    <div className="py-10 px-4">
        <Header />
        <SearchBar />
        <ProductCards />
        <Pagination/>
    </div>
  );
}

export default MainChristmasPages;