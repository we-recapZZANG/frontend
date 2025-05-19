interface ProgressBarProps {
  progress: number;
}

const ProgressBar = ({ progress }: ProgressBarProps) => {
  return (
    <div className="w-full flex items-center justify-center max-w-xs mx-auto mt-4">
      <div className="w-[95%] h-4 bg-gray-100 rounded-full overflow-hidden">
        <div
          className="h-full bg-pink-300 rounded-full transition-all duration-200 ease-in-out"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
};

export default ProgressBar;
