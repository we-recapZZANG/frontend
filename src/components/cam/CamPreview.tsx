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
      <div className="flex items-center justify-center">
        <img
          src="/icon/rabbit.png"
          alt="storybook-archive"
          width={80}
          height={80}
        />
      </div>

      <div className="p-4">
        <h3 className="text-lg font-semibold">{camUrl}</h3>
      </div>
    </CardWrapper>
  );
};

export default CamPreview;
