import { Link } from 'react-router-dom';

const CartOverview = () => {
  return (
    <div className="bg-(--secondary) sm:bg-(--primary) lg:bg-(--dark)">
      <p>
        <span>23 pizzas</span>
        <span>$23.45</span>
      </p>
      <Link to="/cart" className="font-semibold ">
        Open cart &rarr;
      </Link>
    </div>
  );
};

export default CartOverview;
