import React, { useEffect } from 'react';
import { TimeStampEntry } from '../../type';
import { toast } from 'react-toastify';

interface CamProps {
  videoRef?: React.RefObject<HTMLVideoElement | null>;
  videoUrl: string;
  timestamps: TimeStampEntry[];
}

const Cam = ({ videoRef, videoUrl, timestamps }: CamProps) => {
  if (!videoUrl) {
    return <div className="w-full h-[300px] bg-black" />;
  }

  useEffect(() => {
    const interval = setInterval(() => {
      const currentTime = videoRef?.current?.currentTime;
      if (!currentTime) return;

      const currentFormatted = formatTime(currentTime);

      const matchedTimestamp = timestamps.find(
        (timestamp) =>
          timestamp.timeStamp === currentFormatted &&
          timestamp.category === 'faceDown'
      );

      if (matchedTimestamp) {
        toast.info(`강한 움직임이 감지되었습니다!!`, {
          position: 'bottom-right',
          autoClose: 2000,
          hideProgressBar: true,
          closeOnClick: true,
          theme: 'light',
        });
        playAlarm();
      }
    }, 1000);

    const formatTime = (seconds: number) => {
      const min = Math.floor(seconds / 60)
        .toString()
        .padStart(2, '0');
      const sec = Math.floor(seconds % 60)
        .toString()
        .padStart(2, '0');
      return `${min}:${sec}`;
    };

    const playAlarm = () => {
      const audio = new Audio('/alarm.mp3');
      audio.play().catch((err) => console.error('알람 재생 실패', err));
    };

    return () => clearInterval(interval);
  }, [timestamps, videoRef]);

  return (
    <div className="flex justify-center">
      <video
        ref={videoRef}
        className="w-full max-w-3xl "
        controls
        src={videoUrl}
      >
        브라우저가 video 태그를 지원하지 않습니다.
      </video>
    </div>
  );
};

export default Cam;
