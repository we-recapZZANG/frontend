const OnboardingPage = () => {
  return (
    <div className="w-full flex align-items justify-center">
      <main className="relative w-full h-screen md:w-1/2 md:h-screen bg-pink flex flex-col items-center justify-center px-6 py-10">
        <h1
          className="mb-3 font-extrabold text-2xl"
          style={{ color: '#5a5a5a' }}
        >
          혼자서도, 잘자요
        </h1>
        <span className="text-sm font-light" style={{ color: '#717171' }}>
          아이와 엄마의 편안한 밤을 위해,
        </span>
        <span className="text-sm font-light" style={{ color: '#717171' }}>
          엄마의 목소리로 동화책을 들려주세요!
        </span>

        <img
          src="/icon/sleepMoon.png"
          width={200}
          height={200}
          alt="moon-onboarding"
          className="animate-float-vertical"
        />

        <button
          className="flex mt-10 font-bold text-lg items-center bg-pink-400 justify-center  border-none rounded-xl w-full h-13 "
          style={{
            color: 'white',
            boxShadow: '2px 3px 5px rgba(0, 0, 0, 0.05)',
          }}
          aria-label="시작하기 버튼"
        >
          시작하기
        </button>
      </main>
    </div>
  );
};

export default OnboardingPage;
