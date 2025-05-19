import { useEffect, useRef, useState } from 'react';

type Status = 'idle' | 'recording' | 'done';

const VoiceRecorder = () => {
  const [status, setStatus] = useState<Status>('idle');
  const [mediaRecorder, setMediaRecorder] = useState<MediaRecorder | null>(
    null
  );
  const [audioUrl, setAudioUrl] = useState<string | null>(null);
  const audioChunks = useRef<Blob[]>([]);

  useEffect(() => {
    if (status === 'recording') {
      navigator.mediaDevices.getUserMedia({ audio: true }).then((stream) => {
        const recorder = new MediaRecorder(stream);
        recorder.ondataavailable = (e) => {
          audioChunks.current.push(e.data);
        };
        recorder.onstop = () => {
          const blob = new Blob(audioChunks.current, { type: 'audio/wav' });
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
    }
  };

  return (
    <div className="w-full h-screen flex flex-col justify-center items-center bg-pink-50">
      <div className="mb-6">
        {status === 'idle' && (
          <button
            onClick={handleClick}
            className="w-32 h-32 rounded-full bg-pink-200 flex items-center justify-center shadow-md"
          >
            <img src="/icon/mic.svg" alt="mic" className="w-8 h-8" />
          </button>
        )}

        {status === 'recording' && (
          <button
            onClick={handleClick}
            className="w-32 h-32 rounded-full bg-pink-100 flex items-center justify-center animate-ping"
          >
            <div className="w-4 h-4 bg-white rounded-sm z-10" />
          </button>
        )}

        {status === 'done' && (
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
        )}
      </div>

      <p className="text-center text-gray-700 text-sm px-4">
        {status === 'idle' && (
          <>
            녹음 버튼을 누르고
            <br />
            “가나다라”라고 말씀해 보세요.
          </>
        )}
        {status === 'recording' && <>“가나다라”라고 말씀해 보세요.</>}
        {status === 'done' && <>음성 파일이 녹음되었습니다.</>}
      </p>

      {audioUrl && <audio controls src={audioUrl} className="mt-6" />}
    </div>
  );
};

export default VoiceRecorder;
