import { useNavigate } from 'react-router-dom';

interface ArchiveCardProps {
  story: {
    storyId: number;
    title: string;
    category: '동화' | '편지';
    storyLength: string;
    content: string;
    createdAt: string;
  };
}

const StoryContentPage = () => {
  const navigate = useNavigate();

  const open = false;
  return (
    <div className="w-full h-screen flex flex-col items-center">
      {open ? (
        <img src="/icon/girlBook.svg" alt="go" className="w-80 h-120" />
      ) : (
        <img src="/icon/girlStoryBook.svg" alt="go" className="w-80 h-120" />
      )}
      <div className="mt-4 flex flex-col items-center space-y-2 w-full">
        <button className="w-[95%] bg-pink-300 text-sm m-4 p-4 rounded-xl">
          재생하기
        </button>
        <div className="flex gap-2 w-full">
          <button className="flex-1 bg-blue-100 text-sm m-4 p-4 rounded-xl">
            수정하기
          </button>
          <button className="flex-1 bg-red-300 text-white text-sm m-4 p-4 rounded-xl">
            삭제하기
          </button>
        </div>
      </div>
    </div>
  );
};

export default StoryContentPage;
