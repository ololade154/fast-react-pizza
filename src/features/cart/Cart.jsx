import { Link } from 'react-router-dom';

const fakeCart = [
  {
    pizzaId: 12,
    name: 'Mediterranean',
    quantity: 2,
    unitPrice: 16,
    totalPrice: 32,
  },
  {
    pizzaId: 6,
    name: 'Vegetale',
    quantity: 1,
    unitPrice: 13,
    totalPrice: 13,
  },
  {
    pizzaId: 11,
    name: 'Spinach and Mushroom',
    quantity: 1,
    unitPrice: 15,
    totalPrice: 15,
  },
];
const Cart = () => {
  const cart = fakeCart;

  return (
    <div>
      <Link to="/menu">&larr; Back to menu</Link>

      <h2>Your cart, %NAME%</h2>
      <div className="flex items-end justify-between">
        <Link to="/order/new" className="font-extrabold text-blue-500">
          Order pizzas
        </Link>
        <button className="px-8 py-4 bg-blue-600 text-white rounded-full text-sm w-24">
          Clear cart
        </button>
      </div>
      <button className=" px-8 py-4 bg-blue-600 text-white rounded-full text-sm w-24">
        Hello
      </button>
      <button className="px-8 py-4 bg-blue-600 text-white rounded-full text-sm hover:bg-blue-700 w-24">
        *
      </button>
    </div>
  );
};

export default Cart;
