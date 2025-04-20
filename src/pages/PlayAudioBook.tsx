import NavigationBar from '../components/common/NavigationBar';
import ProgressBar from '../components/main/ProgressBar';

const PlayAudioBookData = {
  storyId: 1,
  title: '작은 토끼의 모험',
  category: '동화',
  storyLength: '03:50',
  content: '토끼는 모험을 좋아해요',
  createdAt: '3월 3일',
};

const PlayAudioBook = () => {
  const imageSrc =
    PlayAudioBookData.category === '동화'
      ? '/icon/rabbit.png'
      : '/icon/heart.png';

  return (
    <div className="w-full flex align-items justify-center">
      <main className="relative w-full h-screen md:w-1/2 md:h-screen items-center  bg-pink flex flex-col ">
        <header className="w-full h-15 flex items-center px-4 bg-pink-300 text-pink-400">
          Logo
        </header>
        <div
          className="w-full  flex justify-center flex-col h-[35%] px-10  bg-white border border-gray-100 rounded-b-2xl"
          style={{
            boxShadow: '2px 3px 5px rgba(0, 0, 0, 0.05)',
            background: '#FFFFFF',
          }}
        >
          <div className="w-full h-[180px] flex flex-col gap-2 items-center bg-pink rounded-xl border-none ">
            <h2 className="font-semibold text-[15px] pt-3 text-stone-600">
              {PlayAudioBookData.title}
            </h2>
            <img src={imageSrc} alt="story-cateogry" width={70} height={70} />
          </div>
          <ProgressBar />
        </div>
      </main>
      <NavigationBar />
    </div>
  );
};

export default PlayAudioBook;
