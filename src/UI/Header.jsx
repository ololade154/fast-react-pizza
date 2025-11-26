import { Link } from 'react-router-dom';
import SearchOrder from '../features/order/SearchOrder';
const Header = () => {
  return (
    <header className="p-4">
      <Link to="/">Fast React Pizza Co.</Link>
      <SearchOrder />
      <p className="text-cyan-200">Ololade</p>
      <button>Click me </button>
    </header>
  );
};
export default Header;
