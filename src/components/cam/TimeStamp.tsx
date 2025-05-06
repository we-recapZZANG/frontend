import { TimeStampEntry } from '../../type';
import TimeStampItem from './TimeStampItem';

interface TimeStampProps {
  timeStamps: TimeStampEntry[];
  handleSeek: (timestamp: string) => void;
}

const TimeStamp = ({ timeStamps, handleSeek }: TimeStampProps) => {
  return (
    <div className="w-full p-6 overflow-y-scroll flex flex-col gap-3 bg-white rounded-lg border-none">
      <h2 className="text-md font-bold mb-6">이벤트 타임 라인</h2>
      {timeStamps?.map((timestamp) => {
        return <TimeStampItem handleSeek={handleSeek} timestamp={timestamp} />;
      })}
    </div>
  );
};

export default TimeStamp;
