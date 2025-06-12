import React, { useEffect, useState } from 'react';
import { TimeStampEntry } from '../../type';
import { toast } from 'react-toastify';

interface CamProps {
  videoRef?: React.RefObject<HTMLVideoElement | null>;
  videoUrl: string;
  timestamps: TimeStampEntry[];
}

const Cam = ({ videoRef, videoUrl, timestamps }: CamProps) => {
  const [videoOriginUrl, setVideoOriginUrl] = useState('');

  useEffect(() => {
    if (videoUrl === 'move1.mp4') {
      setVideoOriginUrl(
        'https://file.notion.so/f/f/8cc0dec5-f2e0-466a-8c78-8acdaf51b4a8/4ced9543-73b6-4cd9-8d1a-1b8a9d6d2af3/move1.mp4?table=block&id=1ec80235-7b23-809d-a7dc-cd5f88f177d1&spaceId=8cc0dec5-f2e0-466a-8c78-8acdaf51b4a8&expirationTimestamp=1749729600000&signature=XhHHgrjYtbW7F1C6aFP_z1tjT6SYh7r-MWoiGgdfkAg&downloadName=move1.MP4.mp4'
      );
    } else {
      setVideoOriginUrl(
        'https://file.notion.so/f/f/8cc0dec5-f2e0-466a-8c78-8acdaf51b4a8/4ced9543-73b6-4cd9-8d1a-1b8a9d6d2af3/move1.mp4?table=block&id=1ec80235-7b23-809d-a7dc-cd5f88f177d1&spaceId=8cc0dec5-f2e0-466a-8c78-8acdaf51b4a8&expirationTimestamp=1749729600000&signature=XhHHgrjYtbW7F1C6aFP_z1tjT6SYh7r-MWoiGgdfkAg&downloadName=move1.MP4.mp4'
      );
    }
  }, [videoUrl]);

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
      audio.playbackRate = 1.75;

      audio
        .play()
        .then(() => {
          setTimeout(() => {
            audio.pause();
            audio.currentTime = 0;
          }, 2900);
        })
        .catch((err) => {
          console.error('알람 재생 실패', err);
        });
    };
    return () => clearInterval(interval);
  }, [timestamps, videoRef]);

  return (
    <div className="flex justify-center">
      <video
        ref={videoRef}
        className="w-full max-w-3xl"
        controls
        autoPlay
        muted
        src={videoOriginUrl}
      >
        브라우저가 video 태그를 지원하지 않습니다.
      </video>
    </div>
  );
};

export default Cam;
