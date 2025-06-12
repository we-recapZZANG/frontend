import { useNavigate } from 'react-router-dom';
import CamPreview from '../../components/cam/CamPreview';

const CamListPage = () => {
  const uplodedCams = localStorage.getItem('camUrl');
  const navigate = useNavigate();

  const storedUplodedCams = uplodedCams ? JSON.parse(uplodedCams) : null;

  if (!storedUplodedCams || storedUplodedCams.length === 0) {
    return (
      <div className="flex h-screen items-center justify-center flex-col gap-5">
        <button
          type="button"
          onClick={() => navigate('/cam/upload')}
          className="w-[200px] h-[50px] bg-pink-400 text-white py-2 px-4 rounded-xl hover:bg-pink-300 transition-colors duration-200"
        >
          수면 영상 업로드 하기
        </button>
        <button
          type="button"
          onClick={() => navigate('/sleep/default')}
          className="w-[200px] h-[50px] bg-pink-400 text-white py-2 px-4 rounded-xl hover:bg-pink-300 transition-colors duration-200"
        >
          실시간 영상 분석
        </button>
      </div>
    );
  }

  return (
    <div className="flex items-center  flex-col ">
      <div className="grid grid-cols-2 gap-3 p-5">
        {storedUplodedCams.map((camUrl: string) => {
          return <CamPreview camUrl={camUrl} />;
        })}
      </div>
      <div className="flex items-center justify-center flex-col gap-5">
        <button
          type="button"
          onClick={() => navigate('/cam/upload')}
          className="w-[200px] h-[50px] bg-pink-400 text-white py-2 px-4 rounded-xl hover:bg-pink-300 transition-colors duration-200"
        >
          수면 영상 업로드 하기
        </button>
        <button
          type="button"
          onClick={() => navigate('/sleep/default')}
          className="w-[200px] h-[50px] bg-pink-400 text-white py-2 px-4 rounded-xl hover:bg-pink-300 transition-colors duration-200"
        >
          실시간 영상 분석
        </button>
      </div>
    </div>
  );
};

export default CamListPage;
