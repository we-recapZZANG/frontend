import { useEffect } from 'react';
import { useArchive } from '../../../store/ArchiveContext';
import AddButton from '../../common/button/AddButton';
import clsx from 'clsx';
import { useTrackModal } from '../../../store/TrackModalContext';
import { Archive } from '../../../type';

const ARCHIVE_LIST_DATA: Archive[] = [
  {
    storyId: 1,
    title: '성냥 팔이 소녀',
    category: 'FAIRY_TALE',
    storyLength: '00:00',
    created_at: '5월 7일',
  },
  {
    storyId: 2,
    title: '테스트 제목',
    category: 'LETTER',
    storyLength: '00:00',
    created_at: '5월 7일',
  },
];

const AddTrackList = () => {
  const { archiveList, setArchiveList } = useArchive();
  const { isOpen, setIsOpen } = useTrackModal();

  useEffect(() => {
    setArchiveList(ARCHIVE_LIST_DATA);
  }, []);

  return (
    <div
      className={clsx(
        'fixed left-0 right-0 z-50 rounded-t-3xl bg-gradient-to-t from-[#FFF5F6] to-[#FFECEC] p-6 shadow-2xl transition-transform duration-300',
        'h-[52vh]',
        isOpen ? 'bottom-0 translate-y-0' : 'bottom-0 translate-y-[70%]'
      )}
    >
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="mx-auto mb-4 h-1.5 w-20 rounded-full bg-stone-400 cursor-pointer active:scale-95 transition"
      />

      <h2 className="text-center text-lg font-semibold text-gray-800 mb-4">
        트랙 추가
      </h2>
      <div className="flex flex-col gap-3 max-h-[42vh] overflow-y-auto pr-1">
        {archiveList.map((archive) => (
          <div
            key={archive.storyId}
            className="flex items-center justify-between rounded-2xl bg-white px-4 py-3 shadow-sm"
          >
            <div className="flex flex-col text-left">
              <h3 className="text-sm font-semibold text-gray-800">
                {archive.title}
              </h3>
              <p className="text-xs text-gray-400">{archive.created_at}</p>
              <p className="text-xs text-gray-400">{archive.storyLength}</p>
            </div>
            <AddButton archive={archive} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AddTrackList;
