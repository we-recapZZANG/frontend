import { useNavigate } from 'react-router-dom';

const NavigationBar = () => {
  const navItem = [
    { icon: '/icon/home.svg', text: '홈', route: '/' },
    { icon: '/icon/archive.svg', text: '아카이브', route: '/archive' },
    { icon: '/icon/my.svg', text: '마이', route: '/my' },
    { icon: '/icon/cam.svg', text: '수면 영상', route: '/sleep' },
  ];
  const navigate = useNavigate();

  return (
    <div className="fixed border-none rounded-t-3xl bottom-0 left-0 right-0 w-full h-20 bg-white flex justify-around items-center">
      {navItem.map((item) => (
        <button
          key={item.text}
          onClick={() => navigate(item.route)}
          className="flex flex-col items-center justify-center"
        >
          <img src={item.icon} className="w-[25px] h-[25px]" alt={item.text} />
          <p className="mt-1 text-xs text-grey-400">{item.text}</p>
        </button>
      ))}
    </div>
  );
};

export default NavigationBar;
