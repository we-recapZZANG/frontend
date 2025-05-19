import { useNavigate } from 'react-router-dom';
import { Archive } from '../../type';

const ArchiveCard = ({ story }: { story: Archive }) => {
  const imageSrc =
    story.category === 'FAIRY_TALE' ? '/icon/rabbit.png' : '/icon/heart.png';
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/archive/${story.storyId}`)}
      style={{
        boxShadow: '2px 3px 5px rgba(0, 0, 0, 0.05)',
      }}
      className="h-60 flex flex-col pt-10 items-center border-[0.5px] border-white rounded-xl bg-gradient-to-b from-[#FFF6F5] to-[#FFE4E1]"
    >
      <img src={imageSrc} alt="storybook-archive" width={80} height={80} />
      <div className="flex mt-3 w-full px-6 flex-col flex-start">
        <h2 className="font-bold text-[15px]" style={{ color: '#5a5a5a' }}>
          {story.title}
        </h2>
        <p className="text-[11px] text-stone-500 font-normal">
          {story.created_at}
        </p>
        <div className="pt-3 w-full flex flex-row items-center justify-between">
          <p className="text-[10px] text-stone-400 font-normal">
            {story.storyLength}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ArchiveCard;
