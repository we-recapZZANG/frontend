import CardWrapper from '../common/card/Card';
import ProgressBar from './ProgressBar';
import { useCurrentPlay } from '../../store/CurrentPlayContext';
import { useNavigate } from 'react-router-dom';

const formatTime = (time: number = 0) => {
  const mins = Math.floor(time / 60)
    .toString()
    .padStart(2, '0');
  const secs = Math.floor(time % 60)
    .toString()
    .padStart(2, '0');
  return `${mins}:${secs}`;
};

const parseTimeStringToSeconds = (timeString: string): number => {
  if (!timeString) return 0;
  const [mins, secs] = timeString.split(':').map(Number);
  return (mins || 0) * 60 + (secs || 0);
};

const CurrentAudio = () => {
  const { currentPlay, currentTime } = useCurrentPlay();
  const navigate = useNavigate();

  if (!currentPlay)
    return (
      <p className="w-full flex justify-center h-50 items-center text-stone-500">
        재생 중인 오디오 없음
      </p>
    );

  const { voiceFileLength, textTitle } = currentPlay;

  const totalSeconds =
    typeof voiceFileLength === 'string'
      ? parseTimeStringToSeconds(voiceFileLength)
      : voiceFileLength ?? 0;

  const progress = totalSeconds > 0 ? (currentTime / totalSeconds) * 100 : 0;

  const handleClickCard = () => {
    // navigate(`/play/${currentPlay.}`)
  };

  return (
    <div className="flex gap-6">
      <CardWrapper size="large">
        <div
          className="flex flex-row justify-between items-center"
          onClick={handleClickCard}
        >
          <h2>현재 재생 중</h2>
          <span className="text-xs text-gray-400">
            {formatTime(totalSeconds)}
          </span>
        </div>

        <div className="w-full h-[150px] p-5 bg-pink border-none rounded-2xl">
          <div className="w-full h-[50px] flex justify-between items-center">
            <h1 className="font-bold">{textTitle}</h1>
            <img src="/icon/play.svg" width={15} height={15} alt="audio-play" />
          </div>
        </div>

        <ProgressBar progress={progress} />

        <div className="pl-3 pr-3 pt-2 flex justify-between text-stone-400 text-xs">
          <p>{formatTime(currentTime)}</p>
          <p>{formatTime(totalSeconds)}</p>
        </div>
      </CardWrapper>
    </div>
  );
};

export default CurrentAudio;
