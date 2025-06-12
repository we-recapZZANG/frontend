import { useNavigate } from 'react-router-dom';
import CardWrapper from '../common/card/Card';

type CamPreviewProps = {
  camUrl: string;
};

const CamPreview = ({ camUrl }: CamPreviewProps) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/sleep/${camUrl}`);
  };

  return (
    <CardWrapper onClick={handleClick} size="large">
      <video
        src={`/cam/${camUrl}`}
        muted
        preload="metadata"
        className="w-full object-cover rounded-lg"
        onLoadedMetadata={(e) => {
          const video = e.currentTarget;
          video.currentTime = 1;
        }}
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold">{camUrl}</h3>
      </div>
    </CardWrapper>
  );
};

export default CamPreview;
