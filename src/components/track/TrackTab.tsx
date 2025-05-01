import { useState } from 'react';

const TrackTab = () => {
  const [activeTab, setActiveTab] = useState<'next' | 'script'>('next');

  return (
    <div className="flex  b  w-full pt-6 pl-6 ">
      <button
        className={`mr-6 pb-1 text-sm font-semibold ${
          activeTab === 'next'
            ? 'text-pink-400 border-b-2 border-pink-400'
            : 'text-stone-400'
        }`}
        onClick={() => setActiveTab('next')}
      >
        다음 트랙
      </button>
      <button
        className={`pb-1 text-sm font-semibold ${
          activeTab === 'script'
            ? 'text-pink-400 border-b-2 border-pink-400'
            : 'text-stone-400'
        }`}
        onClick={() => setActiveTab('script')}
      >
        스크립트
      </button>
    </div>
  );
};

export default TrackTab;
