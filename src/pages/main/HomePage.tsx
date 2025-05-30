import { useEffect, useState } from 'react';
import CardWrapper from '../../components/common/card/Card';
import NavigationBar from '../../components/common/nav/NavigationBar';
import Category from '../../components/main/Category';
import CurrentAudio from '../../components/main/CurrentAudio';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  type CardSize = 'small' | 'medium' | 'large';
  const navigate = useNavigate();

  const [user, setUser] = useState<string>('');

  const cards: { id: number; icon: string; text: string; size: CardSize }[] = [
    { id: 1, icon: './icon/mike.svg', text: '최근 재생', size: 'medium' },
    { id: 2, icon: './icon/moon.svg', text: '수면 분석', size: 'medium' },
  ];

  //이 주석을 지우면 로그인이 되어있지 않을 시, 로그인 페이지로 이동하게 됩니다.
  //로그인 페이지는 /user/login입니다.
  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    const parsedUser = storedUser ? JSON.parse(storedUser) : null;
    console.log(parsedUser);
    if (parsedUser) {
      setUser(parsedUser);
    } else {
      navigate('/onboarding');
    }
  }, [navigate]);

  const sleepingTime = 0;

  const handleClickCard = (cardId: number) => {
    if (cardId === 1) {
      navigate('/play/1');
    } else {
      navigate('/sleep');
    }
  };

  return (
    <div className="px-3 h-screen pt-10 pb-10">
      <h2 className="flex text-title">안녕하세요, {user}님!</h2>
      <p className="text-description my-2">오늘도 편안한 하루 되세요🤍</p>
      <div className="flex flex-col gap-10">
        <div className="flex flex-row w-full gap-6">
          {cards.map((card) => (
            <CardWrapper key={card.id} size={card.size}>
              <div
                className="flex flex-col gap-1 mt-4 "
                onClick={() => handleClickCard(card.id)}
              >
                <img src={card.icon} width={25} height={25} alt={card.text} />
                <p className="text-sm">{card.text}</p>
                {card.text === '최근 재생' ? (
                  <span className="text-xs text-gray-400">
                    최근 재생 보러 가기
                  </span>
                ) : (
                  <span className="text-xs text-gray-400">
                    {sleepingTime}시간째 수면 중
                  </span>
                )}
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
