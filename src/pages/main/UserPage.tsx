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
      setUser(JSON.parse(storedUser));
    } else {
      // navigate('/user/login'); // user가 없으면 로그인 페이지로 이동
    }
  }, [navigate]);

  if (!user) {
    //return null; // user가 없으면 아무것도 렌더링하지 않음
  }

  const handleLogout = async () => {
    try {
      await api.post('/api/signout', {
        headers: {
          'Content-Type': 'application/json',
        },
        withCredentials: true,
      });
      localStorage.removeItem('user');
      navigate('/');
    } catch (error) {
      console.error('로그아웃 실패:', error);
    }
  };

  return (
    <div className="flex flex-col gap-6">
      <div className="w-full flex flex-col justify-center items-center bg-white h-[250px]">
        <div className="w-25 h-25 bg-gray-100 rounded-full"></div>
        <h2 className="mt-5 flex text-title">
          {user ? user : '사용자 정보 없음'}
        </h2>
      </div>

      <div className="m-10 flex flex-col gap-10">
        <div className="p-6 w-full flex flex-col gap-10">
          <button
            className="w-full bg-pink-400 text-white font-semibold px-4 py-2 rounded-md hover:bg-pink-100 transition-colors duration-200"
            onClick={handleLogout}
          >
            로그아웃
          </button>
          <button
            className="w-full bg-white text-gray-800  font-semibold px-4 py-2 rounded-md  transition-colors duration-200"
            onClick={() => navigate('/')}
          >
            홈으로
          </button>
        </div>
        <div className="w-full text-gray-800  font-semibold px-4 py-2 rounded-md  transition-colors duration-200">
          <h3>실시간 영상 설정</h3>
        </div>
        <div className="absolute bottom-0 left-0 right-0"></div>
      </div>
    </div>
  );
};

export default UserPage;
