interface MotionProps {
  movingTime: number;
  quality: number;
}

const Motion = ({ movingTime, quality }: MotionProps) => {
  return (
    <div className="w-full p-6 flex flex-col gap-3 bg-white rounded-lg border-none">
      <h2 className="font-bold">모션 분석</h2>
      <div className="flex flex-row justify-between">
        <div className=" p-2 w-[45%] bg-stone-100 border-none rounded-lg">
          <p className="text-description">오늘 움직임</p>
          <p className="text-md font-bold ">{movingTime}회</p>
        </div>
        <div className="p-2 w-[45%] bg-stone-100 border-none rounded-lg">
          <p className="text-description">수면 품질</p>
<p className="text-md font-bold ">{quality.toFixed(2)}%</p>        </div>
      </div>
    </div>
  );
};

export default Motion;
