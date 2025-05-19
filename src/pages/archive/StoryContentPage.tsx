import { useNavigate, useParams } from 'react-router-dom';
import { useTrack } from '../../store/TrackContext';
import { useCurrentPlay } from '../../store/CurrentPlayContext';
import { CurrentPlay, Track } from '../../type';
import { useArchiveDetail } from '../../hooks/archive/useGetArchive';

const STORY_FILE_DATA: CurrentPlay = {
  textTitle: '작은 토끼의 모험',
  category: 'FAIRY_TALE',
  userVoiceUrl: 'https://storage.example.com/voice/12345.wav',
  voiceFileLength: '6:35',
};

const STORY_DETAIL_DATA: Track = {
  title: '작은 토끼의 모험',
  category: 'FAIRY_TALE',
  created_at: '05.19',
  storyId: 1,
  storyLength: '04:00',
};

const StoryContentPage = () => {
  const navigate = useNavigate();
  const { storyId } = useParams();
  const { setTrackList } = useTrack();
  const { setCurrentPlay } = useCurrentPlay();

  // const imageSrc =
  //   archive.category === 'FAIRY_TALE'
  //     ? '/icon/rabbit.png'
  //     : '/icon/heart.png';

  const NumberStoryId = Number(storyId);
  // const { archive, loading, error } = useArchiveDetail(NumberStoryId);

  const handleClickPlayButton = () => {
    setTrackList([STORY_DETAIL_DATA]);
    setCurrentPlay(STORY_FILE_DATA);

    navigate(`/play/${NumberStoryId}`);
  };

  const open = true;

  /**
   * TODO1: 동화책 표지 UI만들기
   * TODO2: 동화책 속 UI 만들기
   */

  return (
    <div className="w-full h-screen flex flex-col items-center">
      <div className="relative w-80 h-[480px] flex justify-center items-center">
        {open ? (
          <>
            {/* 속지 이미지 */}
            <img
              src="/icon/book-inside.svg"
              alt="속지 배경"
              className="w-full h-full"
            />

            {/* 제목 */}
            <div className="absolute top-20 text-xl font-bold text-stone-600 text-center w-full px-4">
              {/* {archive.title} */}
            </div>

            {/* 텍스트 내용 */}
            <div className="absolute top-40 left-6 right-6 text-sm leading-relaxed text-gray-800 whitespace-pre-line px-2">
              {/* {archive.content} */}
            </div>
          </>
        ) : (
          <>
            {/* 표지 이미지 */}
            <img
              src="/icon/book-cover.svg"
              alt="책 표지"
              className="w-full h-full"
            />
            {/* 토끼 이미지 */}
            <img
              src="/icon/rabbit.png"
              alt="토끼"
              className="absolute top-24 w-24 h-24"
            />
            {/* 타이틀 */}
            <div className="absolute top-10 text-lg font-semibold text-gray-800">
              {/* {archive.title} */}
              성냥 팔이 소녀
            </div>
            {/* 옆으로 넘기는 버튼 */}
          </>
        )}
      </div>

      <div className="mt-4 flex flex-col items-center space-y-2 w-full">
        <button
          className="w-[95%] bg-pink-300 text-sm m-4 p-4 rounded-xl"
          onClick={handleClickPlayButton}
        >
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
