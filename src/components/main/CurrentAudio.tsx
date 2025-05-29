import CardWrapper from '../common/card/Card';
import ProgressBar from './ProgressBar';
import { useCurrentPlay } from '../../store/CurrentPlayContext';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

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
  const { currentPlay, currentTime,currentPlayStoryId, setCurrentPlay } = useCurrentPlay();
  const navigate = useNavigate();

  useEffect(()=>{
    const localCurrentPlay = localStorage.getItem('currentPlay');
    if(!localCurrentPlay){
      setCurrentPlay(null)
    }
  },[])

  if (!currentPlay)
    return (
      <div className="flex flex-col justify-center items-center h-60">
        <p className="w-full flex justify-center h-20 items-center text-stone-400">
          재생 중인 오디오가 존재하지 않습니다!
        </p>
        <button
          className="w-45 flex justify-center bg-blue-200 text-gray-800  font-semibold px-4 py-2 rounded-md  transition-colors duration-200"
          onClick={() => navigate('/archive')}
        >
          스토리 둘러보러 가기
        </button>
      </div>
    );

  const { voiceFileLength, textTitle } = currentPlay;

  const totalSeconds =
    typeof voiceFileLength === 'string'
      ? parseTimeStringToSeconds(voiceFileLength)
      : voiceFileLength ?? 0;

  const progress = totalSeconds > 0 ? (currentTime / totalSeconds) * 100 : 0;

  const handleClickCard = () => {
   navigate(`play/${currentPlayStoryId}`)
  };

  return (
    <div className="flex gap-6">
      <CardWrapper size="large">
        <div
          className="flex flex-row justify-between items-center"
          onClick={handleClickCard}
        >
          <h2>최근 재생</h2>
          <span className="text-xs text-gray-400">
          {formatTime(totalSeconds) === '00:00' ? '' : formatTime(totalSeconds)}
          </span>
        </div>

        <div className="w-full h-[100px] p-5 bg-pink border-none rounded-2xl">
          <div className="w-full h-[50px] flex justify-between items-center">
            <h2 className="font-bold text-gray-600 text-sm">{textTitle}</h2>
            <div className='flex items-center justify-center bg-pink-400 rounded-full w-10 h-10' onClick = {()=> navigate(`play/${currentPlayStoryId}`)}>
            <img src="/icon/play.svg" width={15} height={15} alt="audio-play" />
            </div>
          </div>
        </div>

        <ProgressBar progress={progress} />

        <div className="pl-3 pr-3 pt-2 flex justify-between text-stone-400 text-xs">
           <p>{formatTime(currentTime)}</p>
           <p>{formatTime(totalSeconds) === '00:00' ? '' : formatTime(totalSeconds)}</p>
        </div>
      </CardWrapper>
    </div>
  );
};

export default CurrentAudio;
