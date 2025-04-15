import './index.css';

function App() {
  return (
    <div className="w-[100vw] flex justify-center items-center">
      <main className="max-w-[600px] font-sans h-screen bg-neutral text-primary flex flex-col justify-center items-center">
        <h1 className="text-4xl font-bold mb-5">웹앱 스타일로 보이게 하기</h1>
        <button className="px-6 py-3 bg-primary text-white rounded-lg shadow-md hover:shadow-lg">
          클릭하세요
        </button>
      </main>
    </div>
  );
}

export default App;
