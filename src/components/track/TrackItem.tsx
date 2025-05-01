import { Track } from '../../type';
import AddButton from '../common/button/AddButton';
import PlayButton from '../common/button/PlayButton';

interface TrackItemProps {
  track: Track;
  popAddTrack: boolean;
}

const TrackItem = ({ track, popAddTrack }: TrackItemProps) => {
  return (
    <div
      key={track.title}
      className={`flex items-center justify-between p-4 rounded-2xl shadow-sm ${
        track.isActive ? 'bg-white' : 'bg-[#FFF3F3]'
      }`}
    >
      <div>
        <h3
          className={`font-semibold text-sm ${
            track.isActive ? 'text-black' : 'text-stone-500'
          }`}
        >
          {track.title}
        </h3>
        <p className="text-xs text-stone-400">{track.date}</p>
        <p className="text-xs text-stone-400 mt-1">{track.duration}</p>
      </div>

      {popAddTrack ? <PlayButton /> : <AddButton />}
    </div>
  );
};

export default TrackItem;
