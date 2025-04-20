const ProgressBar = () => {
  return (
    <div className="w-full flex items-center justify-center max-w-xs mx-auto mt-4">
      <div className="w-[95%] h-4 bg-gray-100 rounded-full">
        <div
          className="h-full bg-pink-300 rounded-full"
          style={{ width: '70%' }}
        />
      </div>
    </div>
  );
};
export default ProgressBar;
