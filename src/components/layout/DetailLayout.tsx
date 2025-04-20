import { ReactNode } from 'react';
import NavigationBar from '../../components/common/NavigationBar';

interface DetailLayoutProps {
  children: ReactNode;
}

const DetailLayout = ({ children }: DetailLayoutProps) => {
  return (
    <div className="w-full flex flex-col align-items justify-center">
      <header className="w-full h-[50px] bg-pink flex flex-row justify-between items-center p-2 pr-4">
        <button>
          <img src="/icon/back.svg" alt="back-button" width={25} height={25} />
        </button>

        <h2 className="text-sm text-stone-600 font-bold">동화책 편집</h2>
        <button>
          <img
            src="/icon/delete.svg"
            alt="delete-button"
            width={15}
            height={15}
          />
        </button>
      </header>
      <main className="relative w-full h-screen md:w-1/2 md:h-screen bg-pink flex flex-col items-center px-6 py-2">
        {children}
      </main>
      <NavigationBar />
    </div>
  );
};

export default DetailLayout;
