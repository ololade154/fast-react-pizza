import { Link } from 'react-router-dom';
import SearchOrder from '../features/order/SearchOrder';
const Header = () => {
  return (
    <header className="bg-red-600">
      <Link to="/">Fast React Pizza Co.</Link>
      <SearchOrder />
      <p>Ololade</p>
    </header>
  );
};
export default Header;
