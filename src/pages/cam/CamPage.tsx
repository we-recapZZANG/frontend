import { useRef } from 'react';
import Cam from '../../components/cam/Cam';
import Motion from '../../components/cam/Motion';
import TimeStamp from '../../components/cam/timeStamp';

const timestamps = [
  {
    category: 'faceDown',
    timeStamp: '03:24',
  },
  {
    category: 'etc',
    timeStamp: '04:22',
  },
  {
    category: 'etc',
    timeStamp: '05:22',
  },
];

const CamPage = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  const parseTime = (time: string) => {
    const [min, sec] = time.split(':').map(Number);
    return min * 60 + sec;
  };

  const handleSeek = (time: string) => {
    const seconds = parseTime(time);

    console.log(time);
    if (videoRef.current) {
      videoRef.current.currentTime = seconds;
      videoRef.current.play();
    }
  };

  return (
    <div>
      <Cam videoRef={videoRef} />
      <div className="flex flex-col p-4">
        <Motion movingTime={23} quality={80} />
      </div>
      <div className="flex flex-col p-4">
        <TimeStamp handleSeek={handleSeek} timeStamps={timestamps} />
      </div>
    </div>
  );
};

export default CamPage;
