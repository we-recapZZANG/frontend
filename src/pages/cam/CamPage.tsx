import { useEffect, useRef, useState } from 'react';
import Cam from '../../components/cam/Cam';
import Motion from '../../components/cam/Motion';
import TimeStamp from '../../components/cam/TimeStamp';
import { TimeStampEntry } from '../../type';
import { authenticatedApi } from '../../api/base';
import RealTimeAnalysisModal from '../../components/cam/WarningModal';

// const timeStams = [
//   {
//     category: 'faceDown',
//     timeStamp: '00:14',
//   },
//   {
//     category: 'etc',
//     timeStamp: '04:24',
//   },
// ];

const CamPage = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoUrl, setVideoUrl] = useState<string>('');
  const [timestamps, setTimestamps] = useState<TimeStampEntry[]>([]);
  const [isOpen, setIsOpen] = useState(true);

  const parseTime = (time: string) => {
    const [min, sec] = time.split(':').map(Number);
    return min * 60 + sec;
  };

  const handleSeek = (time: string) => {
    const seconds = parseTime(time);

    if (videoRef.current) {
      videoRef.current.currentTime = seconds;
      videoRef.current.play();
    }

    window.top?.scrollTo({
    top: 0,
    behavior: 'smooth', // 부드럽게 이동 (선택)
  });

  };

  const movingTime = timestamps?.length || 0;
  const sleepQuality = Math.max(0, Math.min(100, (1 - movingTime / 10) * 100));

  const fetchVideoUrl = async () => {
    try {
      const response = await authenticatedApi.get('/api/videos/location', {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      setVideoUrl(response.data.videoLocation);
    } catch (error) {
      console.error('영상 정보를 불러오는 데 실패했습니다.', error);
    }
  };

  const fetchTimestamps = async () => {
    try {
      const res = await authenticatedApi.get('api/videos', {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      setTimestamps(res.data.timeStamps);
    } catch (error) {
      console.error('타임스탬프 불러오기 실패', error);
    }
  };

  const onConfirm = () => {
    setIsOpen(false);
    fetchVideoUrl();
    fetchTimestamps();
  };

  const onCancel = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <RealTimeAnalysisModal
        isOpen={isOpen}
        onCancel={onCancel}
        onConfirm={onConfirm}
      />
      <Cam timestamps={timestamps} videoRef={videoRef} videoUrl={videoUrl} />
      <div className="flex flex-col p-4">
        <Motion movingTime={movingTime} quality={sleepQuality} />
      </div>
      <div className="flex flex-col p-4">
        <TimeStamp handleSeek={handleSeek} timeStamps={timestamps} />
      </div>
    </div>
  );
};

export default CamPage;
