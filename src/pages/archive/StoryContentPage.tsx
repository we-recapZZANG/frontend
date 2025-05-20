import { useNavigate, useParams } from 'react-router-dom';
import { useTrack } from '../../store/TrackContext';
import { useCurrentPlay } from '../../store/CurrentPlayContext';
import { CurrentPlay, Archive } from '../../type';
import { useArchiveDetail } from '../../hooks/archive/useGetArchive';
import { useArchive } from '../../store/ArchiveContext';
import { useRequestAudioBook } from '../../hooks/audioBook/useRequestAudioBook';
import { useState } from 'react';

// const STORY_FILE_DATA: CurrentPlay = {
//   textTitle: '작은 토끼의 모험',
//   category: 'FAIRY_TALE',
//   userVoiceUrl: 'https://storage.example.com/voice/12345.wav',
//   voiceFileLength: '6:35',
// };

// const STORY_DETAIL_DATA: Archive = {
//   title: '작은 토끼의 모험',
//   category: 'FAIRY_TALE',
//   created_at: '05.19',
//   storyId: 1,
//   storyLength: '04:00',
// };

const StoryContentPage = () => {
  const navigate = useNavigate();
  const { storyId } = useParams();
  const { setTrackList } = useTrack();
  const { setCurrentPlay, setCurrentPlayStoryId } = useCurrentPlay();
  const { archiveList } = useArchive();
  const { requestAudioBook, loading: audioLoading } = useRequestAudioBook();

  const [isOpen, setIsOpen] = useState(false);
  const NumberStoryId = Number(storyId);
  const { archive, loading, error } = useArchiveDetail(NumberStoryId);

  const currentStory = archiveList.find(
    (item) => item.storyId === NumberStoryId
  );

  const imageSrc =
    currentStory?.category === 'FAIRY_TALE'
      ? '/icon/rabbit.png'
      : '/icon/heart.png';

  const handleClickPlayButton = async () => {
    if (NumberStoryId) {
      const data = await requestAudioBook(NumberStoryId);
      if (data) {
        setCurrentPlay(data);
        setCurrentPlayStoryId(NumberStoryId);
        navigate(`/play/${NumberStoryId}`);
      }
      if (currentStory) {
        setTrackList([currentStory]);
      }
    } else {
      console.error('Story data not found for the given storyId:', storyId);
    }

    // setCurrentPlay(STORY_FILE_DATA);
  };

  /**
   * TODO1: 동화책 표지 UI만들기
   * TODO2: 동화책 속 UI 만들기
   */
  return (
    <div className="w-full h-screen flex flex-col items-center">
      <div className="relative w-80 h-[480px] flex justify-center items-center">
        {isOpen ? (
          <>
            {/* 속지 이미지 */}
            <img
              src="/icon/book-inside.svg"
              alt="속지 배경"
              className="w-full h-full"
            />

            {/* 제목 */}
            <div className="absolute top-20 text-xl font-bold text-stone-600 text-center w-full px-4">
              {archive?.title}
            </div>

            {/* 텍스트 내용 */}
            <div className="absolute top-40 left-6 right-6 text-sm leading-relaxed text-gray-800 whitespace-pre-line px-2">
              {archive?.content}
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
              src={imageSrc}
              alt="토끼"
              className="absolute top-24 w-24 h-24"
            />
            {/* 타이틀 */}
            <div className="absolute top-10 text-lg font-semibold text-gray-800">
              {archive?.title}
            </div>
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
