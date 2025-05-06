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
    <div className="w-full min-h-screen flex flex-col items-center bg-white-100">
      <div className="w-full max-w-[780px] flex flex-col flex-1">
        <Header />

        <main className={`flex-1 relative w-full flex flex-col ${bgColor}`}>
          <Outlet />
        </main>

        <NavigationBar />
      </div>
    </div>
  );
};

export default Layout;
