import { useTrack } from '../../../store/TrackContext';
import { useTrackModal } from '../../../store/TrackModalContext';
import { Archive } from '../../../type';

interface AddButtonProps {
  archive: Archive;
}

const AddButton = ({ archive }: AddButtonProps) => {
  const { trackList, setTrackList } = useTrack();
  const { setIsOpen } = useTrackModal();

  const handleAddButton = () => {
    const alreadyExists = trackList.some(
      (track) => track.storyId === archive.storyId
    );

    setIsOpen(false);
    if (!alreadyExists) {
      setTrackList((prev) => [...prev, archive]);
    } else {
      console.log('이미 존재하는 트랙입니다.');
    }
  };

  return (
    <div className="flex justify-end pr-2">
      <button onClick={handleAddButton}>
        <img
          src="/icon/addButton.svg"
          width={15}
          height={15}
          alt="add-button"
        />
      </button>
    </div>
  );
};

export default AddButton;
