import { Archive } from '../../type';
import TrackItem from './TrackItem';

interface TrackListProps {
  tracks: Archive[];
}

const TrackList = ({ tracks }: TrackListProps) => {

  return (
    <div className="space-y-3 w-full p-6">
      {tracks.map((track) => {
        return (
          <TrackItem
            key={track.storyId}
            track={track}
          />
        );
      })}
    </div>
  );
};

export default TrackList;