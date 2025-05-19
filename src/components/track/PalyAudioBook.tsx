import { CurrentPlay } from '../../type';
import ProgressBar from '../main/ProgressBar';

interface PlayAudioBookProps {
  playAudioBookData: CurrentPlay;
}

const PlayAudioBook = ({ playAudioBookData }: PlayAudioBookProps) => {
  const imageSrc =
    playAudioBookData.category === 'FAIRY_TALE'
      ? '/icon/rabbit.png'
      : '/icon/heart.png';

  return (
    <div
      className="w-full  flex justify-center flex-col h-[35%] px-10  bg-white border border-gray-100 rounded-b-2xl"
      style={{
        boxShadow: '2px 3px 5px rgba(0, 0, 0, 0.05)',
        background: '#FFFFFF',
      }}
    >
      <div className="w-full h-[200px] flex flex-col gap-2 items-center bg-pink rounded-xl border-none ">
        <h2 className="font-semibold text-[15px] pt-3 text-stone-600">
          {playAudioBookData?.textTitle}
        </h2>
        <img src={imageSrc} alt="story-cateogry" width={70} height={70} />

        <div className="flex flex-row gap-4">
          <img />
        </div>
      </div>
      <ProgressBar />
      <div className="pl-3 pr-3 pt-2 flex justify-between  text-stone-400 text-xs">
        <p>00:11</p>
        <p>04:15</p>
      </div>
    </div>
  );
};

export default PlayAudioBook;
