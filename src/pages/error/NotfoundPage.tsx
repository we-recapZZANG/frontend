import { useNavigate } from 'react-router-dom';

const NotfoundPage = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-pink w-full h-screen flex-col flex items-center justify-center">
      <h1 className="text-xl text-stone-600">페이지를 찾을 수 없습니다.</h1>
      <p className="text-stone-500">서비스 이용에 불편을 드려 죄송합니다.</p>
      <button
        className="mt-3 w-[200px] h-[50px] bg-pink-400 text-white rounded-xl border-none "
        style={{
          boxShadow: '2px 3px 5px rgba(0, 0, 0, 0.05)',
        }}
        onClick={() => navigate('/')}
      >
        홈으로
      </button>
    </div>
  );
};

export default NotfoundPage;
