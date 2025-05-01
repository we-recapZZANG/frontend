import { useNavigate } from 'react-router-dom';
import ArchiveCard from '../../components/archive/ArchiveCard';

const ARCHIVEDATA: {
  storyId: number;
  title: string;
  category: '동화' | '편지';
  storyLength: string;
  content: string;
  createdAt: string;
}[] = [
  {
    storyId: 1,
    title: '작은 토끼의 모험',
    category: '동화',
    storyLength: '03:50',
    content: '토끼는 모험을 좋아해요',
    createdAt: '3월 3일',
  },
  {
    storyId: 2,
    title: '엄마의 편지',
    category: '편지',
    storyLength: '03:50',
    content: '엄마의 편지 사랑해요',
    createdAt: '3월 3일',
  },
  {
    storyId: 3,
    title: '작은 토끼의 모험',
    category: '동화',
    storyLength: '03:50',
    content: '토끼는 모험을 좋아해요',
    createdAt: '3월 3일',
  },
  {
    storyId: 4,
    title: '엄마의 편지',
    category: '편지',
    storyLength: '03:50',
    content: '엄마의 편지 사랑해요',
    createdAt: '3월 3일',
  },
  {
    storyId: 2,
    title: '엄마의 편지',
    category: '편지',
    storyLength: '03:50',
    content: '엄마의 편지 사랑해요',
    createdAt: '3월 3일',
  },
  {
    storyId: 4,
    title: '엄마의 편지',
    category: '편지',
    storyLength: '03:50',
    content: '엄마의 편지 사랑해요',
    createdAt: '3월 3일',
  },
];

const ArchivePage = () => {
  const navigate = useNavigate();
  return (
    <>
      <h2 className="font-bold text-lg">추억 보관함</h2>
      <p className="text-description">아이와 엄마의 추억 보관함</p>
      <div className="grid grid-cols-2 mt-5 gap-4">
        {ARCHIVEDATA.map((data) => {
          return <ArchiveCard story={data} />;
        })}
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
    </>
  );
};

export default ArchivePage;
