import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();

  return (
    <header className="w-full h-16 flex justify-between items-center px-6 bg-pink-300 text-white shadow-md">
      <div
        className="text-xl text-pink-400 cursor-pointer"
        onClick={() => navigate('/')}
      >
        <img src="/icon/logo.png" width={40} height={50} />
      </div>
    </header>
  );
};

export default Header;
