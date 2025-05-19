import { useParams } from 'react-router-dom';
import { Track } from '../../type';
import PlayButton from '../common/button/PlayButton';

interface TrackItemProps {
  track: Track;
}

const TrackItem = ({ track }: TrackItemProps) => {
  const { storyId } = useParams();
  const numberStoryId = Number(storyId);

  return (
    <div
      key={track.title}
      className={`flex items-center  justify-between p-4 rounded-2xl shadow-sm ${
        track.storyId === numberStoryId ? 'bg-white' : 'bg-[#FFF3F3]'
      }`}
    >
      <div className="flex flex-col gap-1">
        <h3
          className={`font-semibold text-sm ${
            track.storyId === numberStoryId ? 'text-black' : 'text-stone-500'
          }`}
        >
          {track.title}
        </h3>
        <p className="text-[13px] text-stone-500">{track.created_at}생성</p>
        <p className="text-xs text-stone-400">{track.storyLength}</p>
      </div>

      <PlayButton storyId={track.storyId} />
    </div>
  );
};

export default TrackItem;
