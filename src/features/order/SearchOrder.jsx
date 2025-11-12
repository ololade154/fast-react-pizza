import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const SearchOrder = () => {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    if (!query) return;
    navigate(`/order/${query}`);
    setQuery('');
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="search order #"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
      />
    </form>
  );
};
export default SearchOrder;
