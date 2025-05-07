import { useNavigate, useLocation } from 'react-router-dom';

const NavigationBar = () => {
  const navItem = [
    {
      icon: '/icon/home.svg',
      active: '/icon/fill-home.svg',
      text: '홈',
      route: '/',
    },
    {
      icon: '/icon/archive.svg',
      active: 'icon/fill-heart.svg',
      text: '아카이브',
      route: '/archive',
    },
    {
      icon: '/icon/my.svg',
      active: '/icon/fill-my.svg',
      text: '마이',
      route: '/my',
    },
    {
      icon: '/icon/cam.svg',
      active: '/icon/fill-cam.svg',
      text: '수면 영상',
      route: '/sleep',
    },
  ];

  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className="fixed bottom-0 left-0 right-0 w-full bg-white border-none rounded-t-3xl z-50">
      <div className="max-w-[780px] w-full mx-auto h-20 flex justify-around items-center">
        {navItem.map((item) => {
          const isActive = location.pathname === item.route;

          return (
            <button
              key={item.text}
              onClick={() => navigate(item.route)}
              className="flex flex-col items-center justify-center"
            >
              <img
                src={isActive ? item.active : item.icon}
                className="w-[25px] h-[25px]"
                alt={item.text}
              />
              <p
                className={`mt-1 text-xs ${
                  isActive ? 'text-pink-400 font-bold' : 'text-gray-400'
                }`}
              >
                {item.text}
              </p>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default NavigationBar;
