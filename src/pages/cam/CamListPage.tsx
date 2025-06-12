import { useNavigate } from 'react-router-dom';
import CamPreview from '../../components/cam/CamPreview';

const CamListPage = () => {
  const uplodedCams = localStorage.getItem('camUrl');
  const navigate = useNavigate();

  const storedUplodedCams = uplodedCams ? JSON.parse(uplodedCams) : null;

  if (storedUplodedCams.legnth === 0) {
    navigate('/cam/upload');
  }

  return (
    <div className="flex items-center flex-col ">
      <div className="grid grid-cols-2 gap-3 p-5">
        {storedUplodedCams.map((camUrl: string) => {
          return <CamPreview camUrl={camUrl} />;
        })}
      </div>
      <button
        type="button"
        onClick={() => navigate('/cam/upload')}
        className="w-[200px] h-[50px] bg-pink-400 text-white py-2 px-4 rounded-xl hover:bg-pink-300 transition-colors duration-200"
      >
        수면 영상 업로드 하기
      </button>
    </div>
  );
};

export default CamListPage;
