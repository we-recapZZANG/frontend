import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();

  return (
    <header
      className="w-full h-15 flex items-center px-4 bg-pink-300 text-pink-400"
      onClick={() => navigate('/')}
    >
      Logo
    </header>
  );
};

export default Header;
