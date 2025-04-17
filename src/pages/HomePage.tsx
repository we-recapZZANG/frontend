import CardWrapper from '../components/common/Card';
import NavigationBar from '../components/common/NavigationBar';

const HomePage = () => {
  type CardSize = 'small' | 'medium' | 'large';

  const cards: { id: number; icon: string; text: string; size: CardSize }[] = [
    { id: 1, icon: './icon/mike.svg', text: '최근 녹음', size: 'medium' },
    { id: 2, icon: './icon/moon.svg', text: '수면 영상', size: 'medium' },
    { id: 3, icon: './icon/rabbit.png', text: '동화', size: 'small' },
    { id: 4, icon: './icon/sleepMoon.png', text: '수면', size: 'small' },
    { id: 5, icon: './icon/heart.png', text: '추억', size: 'small' },
    { id: 6, icon: './icon/setting.png', text: '설정', size: 'small' },
  ];

  return (
    <>
      <div className="w-full flex align-items justify-center">
        <main className="relative w-full h-screen md:w-1/2 md:h-screen bg-yellow flex flex-col px-6 py-10">
          <h2 className="flex text-title">안녕하세요, 민지님!</h2>
          <p className="text-description my-2">오늘도 편안한 하루 되세요🤍</p>
          <div className="flex flex-col gap-10">
            <div className="flex flex-row w-full gap-6">
              {cards.slice(0, 2).map((card) => (
                <CardWrapper key={card.id} size={card.size}>
                  <div className="flex flex-col gap-2 mt-4 ">
                    <img
                      src={card.icon}
                      width={25}
                      height={25}
                      alt={card.text}
                    />
                    <p className="text-sm">{card.text}</p>
                  </div>
                </CardWrapper>
              ))}
            </div>

            <div className="flex gap-6">
              <CardWrapper size="large">안녕</CardWrapper>
            </div>

            <div className="w-full">
              <div className="grid grid-cols-4 gap-4">
                {cards.slice(2).map((card) => (
                  <CardWrapper key={card.id} size={card.size}>
                    <img
                      src={card.icon}
                      width={60}
                      height={60}
                      alt={card.text}
                    />
                    <p className="text-description">{card.text}</p>
                  </CardWrapper>
                ))}
              </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0">
              <NavigationBar />
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default HomePage;
