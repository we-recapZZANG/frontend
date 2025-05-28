import { useCurrentPlay } from '../../store/CurrentPlayContext';
import { Archive } from '../../type';
import PlayButton from '../common/button/PlayButton';

interface TrackItemProps {
  track: Archive;
}

const TrackItem = ({ track }: TrackItemProps) => {
  const {  currentPlay } = useCurrentPlay();
  const isSelected = track.storyId === Number(currentPlay?.storyId);

  return (
    <div
      key={track.title}
      className={`flex items-center justify-between p-4 rounded-2xl shadow-sm ${
        isSelected ? 'bg-white' : 'bg-[#FFF3F3]'
      }`}
    >
      <div className="flex flex-col gap-1">
        <h2 className={`font-semibold text-md ${isSelected ? 'text-black' : 'text-stone-500'}`}>
          {track.title}
        </h2>
      </div>

      <PlayButton storyId={track.storyId} />
    </div>
  );
};

export default TrackItem;