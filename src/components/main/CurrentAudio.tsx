import CardWrapper from '../common/Card';
import PlayButton from '../common/PlayButton';
import ProgressBar from './ProgressBar';

const title = '작은 토끼의 모험';
const CurrentAudio = () => {
  return (
    <div className="flex gap-6">
      <CardWrapper size="large">
        <div className="flex flex-row justify-between items-center">
          <h2>현재 재생 중</h2>
          <span className="text-xs text-gray-400">03:24</span>
        </div>

        <div className=" w-full h-[150px] p-5 bg-pink border-none rounded-2xl">
          <div className="w-full h-[50px] flex justify-between items-center">
            <h1 className="font-bold">{title}</h1>
            <PlayButton />
          </div>
          <span className="text-description">2025.04.17 생성</span>
        </div>
        <ProgressBar />
      </CardWrapper>
    </div>
  );
};

export default CurrentAudio;
