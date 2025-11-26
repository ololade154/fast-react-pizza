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
    <div className="bg-red-400 ">
      {/* <Link to="/menu">&larr; Back to menu</Link>

      <h2>Your cart, %NAME%</h2>
      <div className="flex items-end justify-between">
        <Link to="/order/new" className="font-extrabold text-blue-500">
          Order pizzas
        </Link>
        <button className="px-8 py-4 bg-blue-600 text-white rounded-full text-sm w-24">
          Clear cart
        </button>
      </div> */}
      <div className="grid grid-cols-3 gap-6 p-8 ">
        <div className=" p-4 ">
          <img
            src="./src/images/Caesar Salad.svg"
            alt="caesar salad image"
            className="w-16 h-16"
          ></img>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
            necessitatibus impedit maiores!
          </p>
        </div>
        <div>
          <img
            src="./src/images/Greek Salad.svg"
            alt="Greek salad image"
            className="w-16 h-16"
          ></img>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
            soluta iusto minima incidunt adipisci, unde molestiae vitae.
            Aliquid, nisi totam laboriosam vitae atque fugit libero eum aperiam
            veritatis ratione cupiditate!
          </p>
        </div>
        <div>
          <img
            src="./src/images/Mediterranean Cobb salad.svg"
            alt="mediterranean cobb salad"
            className="w-16 h-16"
          ></img>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet cum
            dolorum, sint voluptatibus vel necessitatibus. Ducimus ipsa dicta
            deleniti magni.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Cart;
