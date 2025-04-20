import { Outlet, useLocation } from 'react-router-dom';
import NavigationBar from '../common/NavigationBar';
import { useMemo } from 'react';

const Layout = () => {
  const location = useLocation();

  const bgColor = useMemo(() => {
    if (location.pathname === '/' || location.pathname === '/play')
      return 'bg-yellow';
    return 'bg-pink';
  }, [location.pathname]);

  return (
    <div className="w-full flex align-items flex-col justify-center">
      <header className="w-full h-15 flex items-center px-4 bg-pink-300 text-pink-400">
        Logo
      </header>
      <main
        className={`relative w-full h-screen md:w-1/2 md:h-screen flex flex-col px-6 py-10 ${bgColor}`}
      >
        <Outlet />
        <NavigationBar />
      </main>
    </div>
  );
};

export default Layout;
