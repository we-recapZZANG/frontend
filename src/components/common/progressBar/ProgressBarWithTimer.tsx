import { useEffect, useState } from 'react';

const ProgressBarWithRandom = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        const next = prev + Math.random() * 10;
        return next >= 95 ? 95 : next;
      });
    }, 200);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full flex items-center justify-center max-w-xs mx-auto mt-4">
      <div className="w-[95%] h-4 bg-gray-200 rounded-full overflow-hidden">
        <div
          className="h-full bg-pink-400 rounded-full transition-all duration-200 ease-linear"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
};

export default ProgressBarWithRandom;
