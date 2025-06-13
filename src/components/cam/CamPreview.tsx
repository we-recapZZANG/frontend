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
      <img
        src={`/cam/${camUrl}.png`}
        alt="storybook-archive"
        width={250}
        height={80}
        className="rounded-md"
      />

      <h4 className="text-md font-semibold">{camUrl}</h4>
    </CardWrapper>
  );
};

export default CamPreview;
