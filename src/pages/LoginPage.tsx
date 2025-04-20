import CardWrapper from '../components/common/Card';

const LoginPage = () => {
  return (
    <div className="w-full flex align-items justify-center">
      <main className="relative w-full h-screen md:w-1/2 md:h-screen items-center justify-center bg-pink flex flex-col px-6 py-10">
        <div className="flex flex-col gap-3 w-full flex items-center justify-center ">
          <div className="flex flex-row gap-2 items-center justify-center">
            <img
              src="./icon/sleepMoon.png"
              width={50}
              height={50}
              alt="sleepMoon-next-title"
            />
            <h2 className="text-2xl " style={{ color: '#5a5a5a' }}>
              혼자서도, 잘자요
            </h2>
          </div>

          <CardWrapper size="large">
            <form className="space-y-4">
              {/* 아이디 입력 */}
              <div>
                <label
                  htmlFor="username"
                  className="block text-sm font-medium font-bold text-gray-700"
                >
                  아이디
                </label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  placeholder="아이디를 입력하세요"
                  className="mt-1 block  h-[50px]  w-full px-4 py-2 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-transparent"
                />
              </div>

              {/* 비밀번호 입력 */}
              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700"
                >
                  비밀번호
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="비밀번호를 입력하세요"
                  className="mt-1  h-[50px]  block w-full px-4 py-2 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-transparent"
                />
              </div>

              {/* 로그인 버튼 */}
              <div>
                <button
                  type="submit"
                  className="w-full h-[50px] bg-pink-400  text-white py-2 px-4 rounded-xl hover:bg-pink-300 transition-colors duration-200"
                >
                  로그인
                </button>
              </div>
            </form>
          </CardWrapper>

          <button className="text-stone-500">아직 회원이 아니신가요? </button>
        </div>
      </main>
    </div>
  );
};

export default LoginPage;
