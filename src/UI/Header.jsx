import { Link } from 'react-router-dom';
import SearchOrder from '../features/order/SearchOrder';
const Header = () => {
  return (
    <header className="bg-yellow-100">
      <Link to="/">Fast React Pizza Co.</Link>
      <SearchOrder />
      <p className="text-cyan-200">Ololade</p>
    </header>
  );
};
export default Header;
