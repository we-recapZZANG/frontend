import { Track } from '../../type';
import TrackItem from './TrackItem';

interface TrackListProps {
  tracks: Track[];
  popAddTrack: boolean;
}

const TrackList = ({ tracks, popAddTrack }: TrackListProps) => {
  return (
    <div className="space-y-3 w-full p-6">
      {tracks.map((track) => {
        return <TrackItem popAddTrack={popAddTrack} track={track} />;
      })}
    </div>
  );
};

export default TrackList;
