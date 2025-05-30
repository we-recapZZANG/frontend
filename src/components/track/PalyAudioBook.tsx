import { useRef, useState, useEffect } from 'react';
import ProgressBar from '../main/ProgressBar';
import { CurrentPlay } from '../../type';
import { useCurrentPlay } from '../../store/CurrentPlayContext';

interface PlayAudioBookProps {
  playAudioBookData: CurrentPlay;
}

/**
 * 완뇨
//  */
// const audioUrl =
//   'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3';
// 생략된 import는 그대로 유지

const PlayAudioBook = ({ playAudioBookData }: PlayAudioBookProps) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const { currentTime, setCurrentTime, setCurrentPlay } = useCurrentPlay();
  const { wavFile } = useCurrentPlay();

  const formatTime = (time: number) => {
    const mins = Math.floor(time / 60)
      .toString()
      .padStart(2, '0');
    const secs = Math.floor(time % 60)
      .toString()
      .padStart(2, '0');
    return `${mins}:${secs}`;
  };

  const handlePlayPause = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
      setCurrentPlay(playAudioBookData);
    }
    setIsPlaying(!isPlaying);
  };

  const handleRewind = () => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.currentTime = Math.max(0, audio.currentTime - 10);
  };

  const handleReset = () => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.pause();
    audio.currentTime = 0;
    setIsPlaying(false);
  };

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const updateTime = () => {
      setCurrentTime(audio.currentTime);
      setDuration(audio.duration || 0);
    };

    audio.addEventListener('timeupdate', updateTime);
    audio.addEventListener('loadedmetadata', updateTime);
    audio.addEventListener('ended', () => setIsPlaying(false));

    // const playAudio = async () => {
    //   try {
    //     await audio.play();
    //     setIsPlaying(true);
    //     setCurrentPlay(playAudioBookData);
    //   } catch (err) {
    //     console.error('자동 재생 실패:', err);
    //   }
    // };

    return () => {
      audio.removeEventListener('timeupdate', updateTime);
      audio.removeEventListener('loadedmetadata', updateTime);
      audio.removeEventListener('ended', () => setIsPlaying(false));
    };
  }, [setCurrentTime, setCurrentPlay, playAudioBookData]);

  return (
    <div
      className="w-full flex justify-center flex-col h-[38%] px-10 bg-white border border-gray-100 rounded-b-2xl"
      style={{
        boxShadow: '2px 3px 5px rgba(0, 0, 0, 0.05)',
        background: '#FFFFFF',
      }}
    >
      <div className="w-full h-[200px] flex flex-col gap-2 items-center bg-pink rounded-xl">
        <h2 className="font-semibold text-[15px] pt-3 text-stone-600">
          {playAudioBookData.textTitle}
        </h2>
        <img
          src="/icon/rabbit.png"
          alt="story-category"
          width={90}
          height={90}
        />
        <div className="flex flex-row gap-4">
          <button onClick={handleRewind}>
            <img src="/icon/rewind.svg" alt="rewind" width={30} />
          </button>
          <button onClick={handlePlayPause}>
            <img
              src={isPlaying ? '/icon/pause.svg' : '/icon/play-audio.svg'}
              alt="play-pause"
              width={45}
            />
          </button>
          <button onClick={handleReset}>
            <img src="/icon/stop.svg" alt="stop" width={30} />
          </button>
        </div>
      </div>

      <ProgressBar progress={(currentTime / duration) * 100 || 0} />

      <div className="pl-3 pr-3 pt-2 flex justify-between text-stone-400 text-xs">
        <p>{formatTime(currentTime)}</p>
        <p>{formatTime(duration)}</p>
      </div>

      <audio ref={audioRef} src={wavFile} />
    </div>
  );
};

export default PlayAudioBook;
