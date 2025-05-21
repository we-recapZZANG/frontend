import { useNavigate } from 'react-router-dom';
import ArchiveCard from '../../components/archive/ArchiveCard';
import { useArchive } from '../../store/ArchiveContext';
import { useArchives } from '../../hooks/archive/useGetArchiveList';
import { useEffect } from 'react';

const ARCHIVE_LIST_DATA: {
  storyId: number;
  title: string;
  category: 'FAIRY_TALE' | 'LETTER';
  storyLength: string;
  created_at: string;
}[] = [
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

const ArchivePage = () => {
  const navigate = useNavigate();
  const { archives, loading, error, refetch } = useArchives();
  const { setArchiveList } = useArchive();

  useEffect(() => {
    setArchiveList(archives);
  }, [archives]);

  return (
    <div className="px-6 py-10">
      <h2 className="font-bold text-lg">추억 보관함</h2>
      <p className="text-description">아이와 엄마의 추억 보관함</p>
      <div className="grid grid-cols-2 mt-5 gap-4">
        {/* {ARCHIVE_LIST_DATA.map((data) => {
          return <ArchiveCard key={data.storyId} story={data} />;
        })} */}
        {loading && <p>로딩중...</p>}
        {error && <p className="text-red-500">{error}</p>}
        {!loading && !error && archives.length === 0 && (
          <p>아카이브가 없습니다.</p>
        )}
        {!loading &&
          !error &&
          archives.map((archive) => (
            <ArchiveCard key={archive.storyId} story={archive} />
          ))}
      </div>

      <button
        className="fixed bottom-18  right-0 p-2"
        onClick={() => navigate('/archive/edit/:id')}
      >
        <img
          src="./icon/add-button.svg"
          width={80}
          height={80}
          alt="add-story-buttton"
        />
      </button>
    </div>
  );
};

export default ArchivePage;
