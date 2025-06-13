import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const CamUploadPage = () => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [fileInfo, setFileInfo] = useState<{
    name: string;
    type: string;
  } | null>(null);
  const [customName, setCustomName] = useState('');
  const navigate = useNavigate();

  const handleUploadClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFileInfo({ name: file.name, type: file.type });
      setCustomName('');
    }
  };

  const handleSubmitFile = () => {
    if (!fileInfo) return;

    const fileName = customName.trim() || fileInfo.name;

    const camUrls = localStorage.getItem('camUrl');
    const camUrlList: string[] = camUrls ? JSON.parse(camUrls) : [];

    if (!camUrlList.includes(fileName)) {
      camUrlList.push(fileName);
      localStorage.setItem('camUrl', JSON.stringify(camUrlList));

      toast.success('영상 파일 저장에 성공하였습니다', {
        position: 'top-right',
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        theme: 'light',
      });

      navigate('/camlist');
    } else {
      toast.error('이미 존재하는 영상 파일입니다', {
        position: 'top-right',
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        theme: 'light',
      });
      navigate('/camlist');
    }
  };

  return (
    <div className="min-h-screen bg-[#fffbf3] flex flex-col">
      <main className="flex justify-center mt-6">
        <div className="bg-white rounded-xl p-6 shadow-sm w-[90%] max-w-md">
          <h2 className="text-sm font-bold mb-4">영상 업로드</h2>

          <div className="bg-[#f4f4f4] rounded-xl flex flex-col items-center justify-center h-52 mb-6 px-4">
            {!fileInfo ? (
              <>
                <button className="text-2xl mb-2" onClick={handleUploadClick}>
                  <img src="/icon/upload-button.svg" width={30} height={30} />
                </button>
                <p className="text-gray-500 text-sm text-center">
                  영상 파일을 선택하여 업로드 해주세요.
                </p>
              </>
            ) : (
              <div className="text-sm text-gray-700 text-center">
                <p className="font-medium mb-1">
                  📁 {fileInfo.name} ({fileInfo.type})
                </p>
                <input
                  type="text"
                  value={customName}
                  onChange={(e) => setCustomName(e.target.value)}
                  placeholder="파일 이름을 입력해주세요 (예: baby1.mp4)"
                  className="mt-3 w-full px-3 py-2 border border-gray-300 rounded-lg text-sm"
                />
              </div>
            )}
          </div>

          <input
            type="file"
            accept="video/mp4"
            ref={fileInputRef}
            onChange={handleFileChange}
            className="hidden"
          />

          <button
            onClick={handleSubmitFile}
            disabled={!fileInfo}
            className="bg-[#ffe4e1] px-6 py-3 w-full rounded-xl font-bold text-gray-600 hover:bg-[#ffd4d4] transition-colors disabled:opacity-50"
          >
            파일 올리기
          </button>
        </div>
      </main>
    </div>
  );
};

export default CamUploadPage;
