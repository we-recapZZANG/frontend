import { useNavigate } from 'react-router-dom';
import Category from '../../components/main/Category';
import { useEffect, useState } from 'react';
import api from '../../api/base';

const UserPage = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState<string | null>(null);

  // 로컬스토리지에서 user 가져오기
  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(storedUser); // 로컬스토리지에서 user를 상태로 저장
    } else {
      navigate('/user/login'); // user가 없으면 로그인 페이지로 이동
    }
  }, [navigate]);

  if (!user) {
    return null; // user가 없으면 아무것도 렌더링하지 않음
  }

  const handleLogout = async () => {
    try {
      await api.post('/api/signout');
      localStorage.removeItem('user');
      navigate('/');
    } catch (error) {
      console.error('로그아웃 실패:', error);
    }
  };

  return (
    <div className="flex flex-col gap-6">
      <div className="w-full flex flex-col justify-center items-center bg-white h-[250px]">
        <div className="w-25 h-25 bg-stone-200 rounded-full"></div>
        <h2 className="mt-5 flex text-title">민지</h2>
      </div>

      <Category />

      <div className="m-10 flex flex-col gap-10">
        <div className="p-6 w-full ">
          <button
            className="w-full bg-pink-400 text-white font-semibold px-4 py-2 rounded-md hover:bg-pink-100 transition-colors duration-200"
            onClick={handleLogout}
          >
            로그아웃
          </button>
        </div>
        <div className="absolute bottom-0 left-0 right-0"></div>
      </div>
    </div>
  );
};

export default UserPage;
