import { useLoaderData } from 'react-router-dom';
import { getMenu } from '../../services/apiRestaurant';
import MenuItem from './MenuItem';
const Menu = () => {
  const menu = useLoaderData();
  console.log(menu);
  return (
    <ul>
      {menu.map((pizza) => (
        <MenuItem pizza={pizza} key={pizza.id} />
      ))}
    </ul>
  );
};
export const loader = async ({ params }) => {
  const menu = await getMenu(params.orderId);
  return menu;
};

export default Menu;
