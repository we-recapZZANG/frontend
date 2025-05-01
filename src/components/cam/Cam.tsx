import React from 'react';

interface CamProps {
  videoRef?: React.RefObject<HTMLVideoElement | null>;
}

const Cam = ({ videoRef }: CamProps) => {
  return (
    <div className="flex justify-center">
      <video
        ref={videoRef}
        className="w-full max-w-3xl "
        controls
        src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
      >
        브라우저가 video 태그를 지원하지 않습니다.
      </video>
    </div>
  );
};

export default Cam;
