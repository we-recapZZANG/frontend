import { TimeStampEntry } from '../../type';

interface TimeStampItemProps {
  timestamp: TimeStampEntry;
  handleSeek: (timestamp: string) => void;
}

const TimeStampItem = ({ timestamp, handleSeek }: TimeStampItemProps) => {
  const movingCategory = timestamp.category === 'faceDown' ? '강한' : '약한';
  return (
    <div className="relative border-l border-gray-200 ml-3">
      <div className="flex items-start space-x-3">
        <div className="absolute w-3 h-3 bg-pink-400 rounded-full -left-1.5 top-1.5" />

        <div className="px-5">
          <button
            className="text-xs text-gray-400 pt-1"
            onClick={() => handleSeek(timestamp.timeStamp)}
          >
            {timestamp.timeStamp}
          </button>

          <p>{movingCategory}움직임 감지</p>
          {movingCategory ? (
            <span className="text-description">아기가 뒤집혔습니다.</span>
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
};

export default TimeStampItem;
