import { useNavigate, useParams } from 'react-router-dom';
import { useTrack } from '../../store/TrackContext';
import { useCurrentPlay } from '../../store/CurrentPlayContext';
import { useArchiveDetail } from '../../hooks/archive/useGetArchive';
import { useArchive } from '../../store/ArchiveContext';
import { useRequestAudioBook } from '../../hooks/audioBook/useRequestAudioBook';
import { useState, useMemo } from 'react';

const StoryContentPage = () => {
  const navigate = useNavigate();
  const { storyId } = useParams();
  const { setTrackList } = useTrack();
  const { setCurrentPlay, setCurrentPlayStoryId } = useCurrentPlay();
  const { archiveList } = useArchive();
<<<<<<< Updated upstream
  const { requestAudioBook, loading: audioLoading } = useRequestAudioBook();
=======
  const { requestAudioBook } = useRequestAudioBook();
>>>>>>> Stashed changes

  const [isOpen, setIsOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);

  const NumberStoryId = Number(storyId);
  const { archive } = useArchiveDetail(NumberStoryId);

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
  };

  const contentPages = useMemo(() => {
    if (!archive?.content) return [];
<<<<<<< Updated upstream
    const pages = [];
    for (let i = 0; i < archive.content.length; i += 100) {
      pages.push(archive.content.slice(i, i + 100));
    }
=======

    const pages = [];
    let i = 0;
    const content = archive.content;

    while (i < content.length) {
      let end = i + 150;
      if (end >= content.length) {
        pages.push(content.slice(i)); // 남은 전부 push
        break;
      }

      let slice = content.slice(i, end);
      let dotIndex = slice.lastIndexOf('.');

      if (dotIndex === -1) {
        // 100자 안에 마침표 없으면, 이후에서 마침표 찾기
        let nextDot = content.indexOf('.', end);
        if (nextDot === -1) {
          // 더 이상 마침표 없으면 남은 전체 push
          pages.push(content.slice(i));
          break;
        } else {
          end = nextDot + 1; // 마침표 포함해서 자름
        }
      } else {
        // 마침표가 있는 위치까지만 자름
        end = i + dotIndex + 1;
      }

      pages.push(content.slice(i, end));
      i = end;
    }

>>>>>>> Stashed changes
    return pages;
  }, [archive?.content]);

  const totalPages = contentPages.length;

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

            {/* 텍스트 내용 (페이지별) */}
            <div className="absolute top-40 left-6 right-6 text-sm leading-relaxed text-gray-800 whitespace-pre-line px-2">
              {contentPages[currentPage]}
            </div>

            {/* 페이지 번호 */}
            <div className="absolute bottom-12 text-xs text-gray-500">
              {currentPage + 1} / {totalPages}
            </div>

            {/* 이전 페이지 버튼 */}
            {currentPage > 0 && (
              <button
                className="absolute top-96 left-5"
                onClick={() => setCurrentPage((prev) => prev - 1)}
              >
                <img
                  src="/icon/prev-page.svg"
                  width={18}
                  height={10}
                  alt="이전 페이지"
                />
              </button>
            )}

            {/* 다음 페이지 버튼 */}
            {currentPage < totalPages - 1 && (
              <button
                className="absolute top-96 right-2"
                onClick={() => setCurrentPage((prev) => prev + 1)}
              >
                <img
                  src="/icon/next-page.svg"
                  width={18}
                  height={10}
                  alt="다음 페이지"
                />
              </button>
            )}
          </>
        ) : (
          <>
            {/* 표지 이미지 */}
            <img
              src="/icon/book-cover.svg"
              alt="책 표지"
              className="w-full h-full"
            />
            {/* 토끼 or 하트 이미지 */}
            <img
              src={imageSrc}
              alt="동화 카테고리"
              className="absolute top-45 w-30 h-30"
            />
            {/* 타이틀 */}
            <div className="absolute top-40 text-lg font-semibold text-gray-800">
              {archive?.title}
            </div>

            <button
              className="absolute top-94 right-7"
              onClick={() => setIsOpen(true)}
            >
              <img
                src="/icon/book-arrow.svg"
                width={18}
                height={10}
                alt="열기"
              />
            </button>
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
