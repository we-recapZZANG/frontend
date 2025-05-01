import NavigationBar from '../../components/common/nav/NavigationBar';
import { AudioBook, Track } from '../../type';
import TrackTab from '../../components/track/TrackTab';
import TrackList from '../../components/track/TrackList';
import Header from '../../components/common/nav/Header';
import PlayAudioBook from '../../components/track/PalyAudioBook';
import { useState } from 'react';
import AddTrackList from '../../components/track/AddTrackList';

const playAudioBookData: AudioBook = {
  storyId: 1,
  title: '작은 토끼의 모험',
  category: '동화',
  storyLength: '03:50',
  content: '토끼는 모험을 좋아해요',
  createdAt: '3월 3일',
};

const tracks: Track[] = [
  {
    title: '작은 토끼의 모험',
    date: '2025.03.22 생성',
    duration: '03:50',
    isActive: true,
  },
  {
    title: '2025년 아기에게',
    date: '2025.03.22 생성',
    duration: '03:50',
    isActive: false,
  },
  {
    title: '작은 하트의 모험',
    date: '2025.03.22 생성',
    duration: '03:50',
    isActive: false,
  },
];

const PlayAudioBookPage = () => {
  const [popAddTrack, setPopAddTrack] = useState(false);

  return (
    <div className="w-full flex align-items justify-center">
      <main className="relative w-full h-screen md:w-1/2 md:h-screen items-center  bg-yellow flex flex-col ">
        <Header />
        <PlayAudioBook playAudioBookData={playAudioBookData} />
        <TrackTab />

        <div className="w-full flex justify-end pr-7">
          <button onClick={() => setPopAddTrack(!popAddTrack)}>
            <img src="/icon/addButton.svg" width={15} height={15} />
          </button>
        </div>

        {popAddTrack ? (
          <div className="w-full relative">
            <TrackList tracks={tracks} popAddTrack={popAddTrack} />
          </div>
        ) : (
          <div className="w-full relative">
            {' '}
            <AddTrackList popAddTrack={popAddTrack} tracks={tracks} />
          </div>
        )}
      </main>
      <NavigationBar />
    </div>
  );
};

export default PlayAudioBookPage;
