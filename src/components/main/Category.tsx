import CardWrapper from '../common/Card';

type CardSize = 'small' | 'medium' | 'large';

const cards: { id: number; icon: string; text: string; size: CardSize }[] = [
  { id: 1, icon: './icon/rabbit.png', text: '동화', size: 'small' },
  { id: 2, icon: './icon/sleepMoon.png', text: '수면', size: 'small' },
  { id: 3, icon: './icon/heart.png', text: '추억', size: 'small' },
  { id: 4, icon: './icon/setting.png', text: '설정', size: 'small' },
];

const Category = () => {
  return (
    <div className="w-full">
      <div className="grid grid-cols-4 gap-4">
        {cards.map((card) => (
          <CardWrapper key={card.id} size={card.size}>
            <img src={card.icon} width={60} height={60} alt={card.text} />
            <p className="text-gray-600 text-sm">{card.text}</p>
          </CardWrapper>
        ))}
      </div>
    </div>
  );
};

export default Category;
