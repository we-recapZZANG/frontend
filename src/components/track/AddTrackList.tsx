import { Track } from '../../type';
import TrackItem from './TrackItem';

interface AddTrackListProps {
  tracks: Track[];
  popAddTrack: boolean;
}

const AddTrackList = ({ tracks, popAddTrack }: AddTrackListProps) => {
  return (
    <div className="fix rounded-lg border-none rounded-2xl bg-pink p-2">
      <h2 className=" text-center mt-4">트랙 추가</h2>
      <div className="space-y-3 bg-pink w-full p-6 overflow-y-hidden">
        {tracks.map((track) => (
          <TrackItem
            key={track.title}
            track={track}
            popAddTrack={popAddTrack}
          />
        ))}
      </div>
    </div>
  );
};

export default AddTrackList;
