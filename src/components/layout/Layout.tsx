import { Outlet, useLocation } from 'react-router-dom';
import NavigationBar from '../common/nav/NavigationBar';
import { useMemo } from 'react';
import Header from '../common/nav/Header';

const Layout = () => {
  const location = useLocation();

  const bgColor = useMemo(() => {
    if (location.pathname === '/' || location.pathname === '/play')
      return 'bg-yellow';
    return 'bg-pink';
  }, [location.pathname]);

  return (
    <div className="w-full flex align-items flex-col justify-center">
      <Header />
      <main
        className={`relative w-full h-screen md:w-1/2 md:h-screen flex flex-col  ${bgColor}`}
      >
        <Outlet />
        <NavigationBar />
      </main>
    </div>
  );
};

export default Layout;
