import NavigationBar from '../../components/common/nav/NavigationBar';
import TrackTab from '../../components/track/TrackTab';
import TrackList from '../../components/track/TrackList';
import Header from '../../components/common/nav/Header';
import PlayAudioBook from '../../components/track/PalyAudioBook';
import { useTrack } from '../../store/TrackContext';
import AddTrackList from '../../components/track/modal/AddTrackModal';
import { useCurrentPlay } from '../../store/CurrentPlayContext';
import { useEffect } from 'react';

const PlayAudioBookPage = () => {
  const { trackList } = useTrack();

  const { currentPlay, setCurrentPlay } = useCurrentPlay();

  useEffect(() => {
    const stored = localStorage.getItem('currentPlay');
    if (stored) {
      const parsed = JSON.parse(stored);
      setCurrentPlay(parsed);
    }
    // setTrackList(archiveList);
  }, []);

  return (
    <div className="w-full flex align-items justify-center">
      <main className="relative w-full h-screen md:w-1/2 md:h-screen items-center bg-yellow flex flex-col">
        <Header />
        {!currentPlay && (
          <div className="flex items-center h-[35%] justify-center w-full p-5 text-stone-400">
            재생 중인 오디오 북이 존재하지 않습니다.
          </div>
        )}
        {currentPlay && <PlayAudioBook playAudioBookData={currentPlay} />}

        <TrackTab />

        <div className="w-full relative">
          <TrackList tracks={trackList} />
        </div>

        <div className="w-full relative">
          <AddTrackList />
        </div>
      </main>
      <NavigationBar />
    </div>
  );
};

export default PlayAudioBookPage;
