import { Link } from 'react-router-dom';

const LinkButton = ({ children, to }) => {
  return (
    <Link to={to} className="font-extrabold text-blue-500">
      {children}
    </Link>
  );
};
export default LinkButton;
