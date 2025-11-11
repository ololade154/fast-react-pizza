import { Outlet } from 'react-router-dom';
import CartOverview from '../features/cart/CartOverview';
import Header from './Header';

const AppLayout = () => {
  return (
    <div>
      <Header />
      <main>
        {/* <h1>main content</h1> */}
        <Outlet />
      </main>
      <CartOverview />
    </div>
  );
};
export default AppLayout;
