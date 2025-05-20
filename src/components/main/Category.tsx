import { useNavigate } from 'react-router-dom';
import { CategoryType } from '../../type';
import CardWrapper from '../common/card/Card';

const cards: CategoryType[] = [
  {
    id: 1,
    icon: '/icon/rabbit.png',
    text: '동화',
    size: 'small',
    route: '/play/1',
  },
  {
    id: 2,
    icon: '/icon/sleepMoon.png',
    text: '수면',
    size: 'small',
    route: '/sleep',
  },
  {
    id: 3,
    icon: '/icon/heart.png',
    text: '추억',
    size: 'small',
    route: '/archive',
  },
  {
    id: 4,
    icon: '/icon/setting.png',
    text: '설정',
    size: 'small',
    route: '/my',
  },
];

const Category = () => {
  const navigate = useNavigate();

  const handleNavigate = (path: string) => {
    navigate(path);
  };

  return (
    <div className="w-full flex items-center justify-center">
      <div className="w-full grid grid-cols-4 gap-4">
        {cards.map((card) => (
          <CardWrapper
            onClick={() => handleNavigate(card.route)}
            key={card.id}
            size={card.size}
          >
            <img src={card.icon} width={60} height={60} alt={card.text} />
            <p className="text-gray-600 text-sm">{card.text}</p>
          </CardWrapper>
        ))}
      </div>
    </div>
  );
};

export default Category;
