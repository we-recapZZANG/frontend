import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { authenticatedApi } from '../../api/base';

type Status = 'idle' | 'recording' | 'done';

const VoiceRecorder = () => {
  const [status, setStatus] = useState<Status>('idle');
  const [mediaRecorder, setMediaRecorder] = useState<MediaRecorder | null>(
    null
  );
  const [audioUrl, setAudioUrl] = useState<string | null>(null);
  const audioChunks = useRef<Blob[]>([]);
  const blobRef = useRef<Blob | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (status === 'recording') {
      navigator.mediaDevices.getUserMedia({ audio: true }).then((stream) => {
        const recorder = new MediaRecorder(stream);
        recorder.ondataavailable = (e) => {
          audioChunks.current.push(e.data);
        };
        recorder.onstop = () => {
          const blob = new Blob(audioChunks.current, { type: 'audio/wav' });
          blobRef.current = blob;
          setAudioUrl(URL.createObjectURL(blob));
          audioChunks.current = [];
        };
        recorder.start();
        setMediaRecorder(recorder);
      });
    }

    return () => {
      mediaRecorder?.stream.getTracks().forEach((track) => track.stop());
    };
  }, [status]);

  const handleClick = () => {
    if (status === 'idle') {
      setStatus('recording');
    } else if (status === 'recording') {
      mediaRecorder?.stop();
      setStatus('done');
    } else {
      setStatus('idle');
      setAudioUrl(null);
      blobRef.current = null;
    }
  };

  const handleUploadAndNavigate = async () => {
    if (!blobRef.current) return;

    const formData = new FormData();
    const file = new File([blobRef.current], 'recording.wav', {
      type: 'audio/wav',
    });
    formData.append('audio', file);

    for (const [key, value] of formData.entries()) {
      console.log(`${key}:`, value);
    }

    try {
      const response = await authenticatedApi.post(
        '/api/sample-voice',
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      );

      console.log('Upload successful:', response.data);
      navigate('/');
    } catch (error: any) {
      console.error(
        'Upload failed:',
        error.response?.data?.message || error.message
      );
    }
  };

  return (
    <div className="w-full h-screen flex flex-col justify-center items-center bg-pink">
      <div className="mb-6">
        {status === 'idle' && (
          <button
            onClick={handleClick}
            className="w-32 h-32 rounded-full bg-pink-300 flex items-center justify-center shadow-md"
          >
            <img src="/icon/mic.svg" alt="mic" width={50} height={50} />
          </button>
        )}

        {status === 'recording' && (
          <button
            onClick={handleClick}
            className="w-20 h-20 rounded-full bg-pink-300 flex items-center justify-center animate-ping"
          >
            <div className="w-4 h-4 bg-white rounded-sm z-10" />
          </button>
        )}

        {status === 'done' && (
          <>
            <button
              onClick={handleClick}
              className="w-32 h-32 rounded-full bg-pink-200 flex items-center justify-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10 text-gray-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </button>

            <div className="flex flex-col">
              <button
                onClick={() => {
                  setStatus('idle');
                  setAudioUrl(null);
                  blobRef.current = null;
                }}
                className="mt-4 px-4 py-2 bg-pink-400 text-white rounded-md shadow-sm hover:bg-pink-400 transition"
              >
                다시 녹음하기
              </button>

              <button
                onClick={handleUploadAndNavigate}
                className="mt-2 px-4 py-2 bg-blue-100 text-stone-700 rounded-md shadow-sm hover:bg-blue-200 transition"
              >
                녹음 완료하기
              </button>
            </div>
          </>
        )}
      </div>

      <p className="text-center text-gray-700 text-sm px-4">
        {status === 'idle' && (
          <span>
            녹음 버튼을 누르고
            <br />
            "어느 작은 마을에 호기심 많은 고양이가 살고 있었어. 
              <br />
            고양이는 밤하늘의 반짝이는 별을 보고 마음을 빼앗겼지."
             <br />
            라고 말씀해 보세요.
             
          </span>
        )}
        {status === 'recording' && (
          <span>
            "어느 작은 마을에 호기심 많은 고양이가 살고 있었어. 
              <br />
            고양이는 밤하늘의 반짝이는 별을 보고 마음을 빼앗겼지."
              <br />
            라고 말씀해 보세요.
          </span>
        )}
        {status === 'done' && (
          <>
            음성 파일이 녹음되었습니다. 이제 업로드하거나 다시 녹음할 수 있어요.
          </>
        )}
      </p>

      {audioUrl && <audio controls src={audioUrl} className="mt-6" />}
    </div>
  );
};

export default VoiceRecorder;
