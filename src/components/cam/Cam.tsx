import React from 'react';

interface CamProps {
  videoRef?: React.RefObject<HTMLVideoElement | null>;
  videoUrl: string;
}

const Cam = ({ videoRef, videoUrl }: CamProps) => {
  if (!videoUrl) {
    return <div>영상을 받아올 수 없습니다.</div>;
  }
  return (
    <div className="flex justify-center">
      <video
        ref={videoRef}
        className="w-full max-w-3xl "
        controls
        src={videoUrl}
      >
        브라우저가 video 태그를 지원하지 않습니다.
      </video>
    </div>
  );
};

export default Cam;
