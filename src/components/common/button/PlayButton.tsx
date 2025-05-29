import { useTrack } from '../../../store/TrackContext';
import { useCurrentPlay } from '../../../store/CurrentPlayContext';
import { useRequestAudioBook } from '../../../hooks/audioBook/useRequestAudioBook';
import { useNavigate } from 'react-router-dom';

interface PlayButtonProps {
  storyId: number;
}

const PlayButton = ({ storyId }: PlayButtonProps) => {
  const { trackList } = useTrack();
  const { setCurrentPlay } = useCurrentPlay();
  const { requestAudioBook } = useRequestAudioBook();
  const navigate = useNavigate();

  const handleClickPlayButton = async () => {
    const findStoryData = trackList.find((track) => track.storyId === storyId);

    /*
     * 음성 변환요청 API
     */
    if (findStoryData) {
      const data = await requestAudioBook(findStoryData.storyId);
      if (data) {
        setCurrentPlay(data);
      }
      navigate(`/play/${storyId}`);
    } else {
      console.error('Story data not found for the given storyId:', storyId);
    }
  };
  return (
    <button
      className="w-10 h-10 flex items-center justify-center pl-1 bg-pink-300 rounded-full"
      onClick={handleClickPlayButton}
    >
      <img src="/icon/play.svg" width={15} height={15} alt="audio-play" />
    </button>
  );
};

export default PlayButton;
