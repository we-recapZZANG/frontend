import React from 'react';

interface RealTimeAnalysisModalProps {
  isOpen: boolean;
  onConfirm: () => void;
  onCancel: () => void;
}

const RealTimeAnalysisModal: React.FC<RealTimeAnalysisModalProps> = ({
  isOpen,
  onConfirm,
  onCancel,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/20 flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl shadow-lg w-[320px] p-6 text-center">
        <div className="text-gray-500 text-2xl mb-2"></div>
        <p className="text-sm text-gray-800 font-medium leading-relaxed">
          실시간 영상을 분석을 위해서는
          <br />
          <span className="text-red-500 font-semibold">홈캠 연결</span>이
          필요합니다!
          <br />
          기존 영상을 분석 하시겠습니까?
        </p>
        <div className="mt-6 flex justify-center gap-4">
          <button
            onClick={onConfirm}
            className="bg-blue-100 text-gray-700 px-5 py-2 rounded-full text-sm font-semibold"
          >
            예
          </button>
          <button
            onClick={onCancel}
            className="bg-red-300 text-white px-5 py-2 rounded-full text-sm font-semibold"
          >
            아니요
          </button>
        </div>
      </div>
    </div>
  );
};

export default RealTimeAnalysisModal;
