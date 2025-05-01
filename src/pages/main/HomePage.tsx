import CardWrapper from '../../components/common/card/Card';
import NavigationBar from '../../components/common/nav/NavigationBar';
import Category from '../../components/main/Category';
import CurrentAudio from '../../components/main/CurrentAudio';

const HomePage = () => {
  type CardSize = 'small' | 'medium' | 'large';

  const cards: { id: number; icon: string; text: string; size: CardSize }[] = [
    { id: 1, icon: './icon/mike.svg', text: '최근 녹음', size: 'medium' },
    { id: 2, icon: './icon/moon.svg', text: '수면 분석', size: 'medium' },
  ];

  const userName = '민지';
  const sleepingTime = 7;

  return (
    <div className="px-6 py-10">
      <h2 className="flex text-title">안녕하세요, {userName}님!</h2>
      <p className="text-description my-2">오늘도 편안한 하루 되세요🤍</p>
      <div className="flex flex-col gap-10">
        <div className="flex flex-row w-full gap-6">
          {cards.map((card) => (
            <CardWrapper key={card.id} size={card.size}>
              <div className="flex flex-col gap-1 mt-4 ">
                <img src={card.icon} width={25} height={25} alt={card.text} />
                <p className="text-sm">{card.text}</p>
                <span className="text-xs text-gray-400">
                  {sleepingTime}시간째 수면 중
                </span>
              </div>
            </CardWrapper>
          ))}
        </div>

        <CurrentAudio />

        <Category />

        <div className="absolute bottom-0 left-0 right-0">
          <NavigationBar />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
