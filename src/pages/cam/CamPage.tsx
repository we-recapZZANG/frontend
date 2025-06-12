import { useRef, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Cam from '../../components/cam/Cam';
import Motion from '../../components/cam/Motion';
import TimeStamp from '../../components/cam/TimeStamp';
import RealTimeAnalysisModal from '../../components/cam/WarningModal';
import { authenticatedApi } from '../../api/base';

type TimeStampEntry = { category: string; timeStamp: string };
type TimstampDataType = {
  [key: string]: {
    timeStamps: TimeStampEntry[];
    videoUrl: string;
  };
};

const TimstampData: TimstampDataType = {
  'baby1.mp4': {
    timeStamps: [
      { category: 'etc', timeStamp: '00:12' },
      { category: 'etc', timeStamp: '00:13' },
      { category: 'etc', timeStamp: '00:16' },
      { category: 'etc', timeStamp: '00:18' },
      { category: 'etc', timeStamp: '00:30' },
      { category: 'etc', timeStamp: '00:31' },
      { category: 'etc', timeStamp: '00:33' },
      { category: 'etc', timeStamp: '00:34' },
      { category: 'etc', timeStamp: '00:36' },
      { category: 'faceDown', timeStamp: '00:58' },
    ],
    videoUrl:
      'https://file.notion.so/f/f/8cc0dec5-f2e0-466a-8c78-8acdaf51b4a8/5587a5ab-5f25-4291-b30f-5d781d743e44/finalnight.mp4?table=block&id=21080235-7b23-80f2-822b-c69774dae52b&spaceId=8cc0dec5-f2e0-466a-8c78-8acdaf51b4a8&expirationTimestamp=1749772800000&signature=UAmKQqXkwTOkFIO7XMWHIzJ3akf_-gbYbo_waHDdh7A&downloadName=finalnight.MP4.mp4',
  },

  'baby2.mp4': {
    timeStamps: [
      { category: 'etc', timeStamp: '00:00' },
      { category: 'etc', timeStamp: '00:08' },
      { category: 'etc', timeStamp: '00:09' },
      { category: 'etc', timeStamp: '00:14' },
      { category: 'etc', timeStamp: '00:22' },
      { category: 'etc', timeStamp: '00:27' },
      { category: 'etc', timeStamp: '00:29' },
      { category: 'faceDown', timeStamp: '00:39' },
    ],
    videoUrl:
      'https://file.notion.so/f/f/8cc0dec5-f2e0-466a-8c78-8acdaf51b4a8/d898f7fe-c7a4-4430-9f4f-494369a053aa/finalbright.mp4?table=block&id=21080235-7b23-80e9-ae5d-d73621ed93ef&spaceId=8cc0dec5-f2e0-466a-8c78-8acdaf51b4a8&expirationTimestamp=1749744000000&signature=HxmLRZO4Hwuf4Gfn2j8neJBNCl0rAVvNTFCx7pTj-QY&downloadName=finalbright.MP4.mp4',
  },

  'baby3.mp4': {
    timeStamps: [
      { category: 'etc', timeStamp: '00:10' },
      { category: 'etc', timeStamp: '00:13' },
      { category: 'etc', timeStamp: '00:14' },
    ],
    videoUrl:
      'https://file.notion.so/f/f/8cc0dec5-f2e0-466a-8c78-8acdaf51b4a8/dd8cf4cd-53ab-4bef-b7af-81c30ce64627/move4.mp4?table=block&id=21080235-7b23-80a0-9ae4-d4f6ccfc367f&spaceId=8cc0dec5-f2e0-466a-8c78-8acdaf51b4a8&expirationTimestamp=1749744000000&signature=aeVyH1Nr1pogY3d0OReg_9aNQ1LmF_MQlmRZq3_dAvk&downloadName=move4.MP4.mp4',
  },
};

const CamPage = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoUrl, setVideoUrl] = useState<string>('');
  const [timestamps, setTimestamps] = useState<TimeStampEntry[]>([]);
  const { camTitle } = useParams<{ camTitle: string }>();
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    if (camTitle === 'default') {
      fetchVideoUrl();
      fetchTimestamps();
    } else if (camTitle && TimstampData[camTitle]) {
      // move와 PoseDown 모두 합쳐서 timestamps로 설정
      setTimestamps(TimstampData[camTitle].timeStamps);
      setVideoUrl(TimstampData[camTitle].videoUrl);
    } else {
      console.warn('해당 camTitle에 대한 타임스탬프가 없습니다.');
    }
  }, [camTitle]);

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
    window.top?.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const movingTime = timestamps.length;
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
      {camTitle === 'default' && (
        <RealTimeAnalysisModal
          isOpen={isOpen}
          onCancel={onCancel}
          onConfirm={onConfirm}
        />
      )}
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
