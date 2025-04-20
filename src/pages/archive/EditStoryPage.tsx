import DetailLayout from '../../components/layout/DetailLayout';

const categories = ['동화책', '편지'];
const category = '동화책';

const EditStoryPage = () => {
  return (
    <DetailLayout>
      <form onSubmit={() => {}} className="w-full flex flex-col  flex-grow">
        {/* 제목 입력 */}
        <div className="mt-5">
          <label className="font-bold">제목</label>
          <input
            className="w-full h-10 mt-2  placeholder:text-sm px-4 bg-white border border-pink-300 rounded-lg"
            placeholder="제목을 입력해주세요."
            style={{ backgroundColor: '#FFFBFA' }}
          />
        </div>

        {/* 카테고리 선택 */}
        <div className="mt-8">
          <label className="font-bold">카테고리</label>
          <div className="flex flex-wrap gap-2 ">
            {categories.map((cat) => (
              <button
                type="button"
                key={cat}
                onClick={() => {}}
                className={`px-4 mt-2 h-7 text-sm flex items-center rounded-full border ${
                  category === cat
                    ? 'bg-pink-400 text-white '
                    : 'bg-white text-gray-700 border-gray-300'
                } transition`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/**내용 입력 */}
          <div className="mt-8">
            <label className="font-bold">내용</label>
            <textarea
              className="w-full h-70 mt-2  py-4 px-3 placeholder:text-sm px-2 bg-white border border-pink-300 rounded-xl"
              placeholder="내용을 입력해주세요."
              style={{ backgroundColor: '#FFFBFA' }}
            />
          </div>
        </div>

        <button className="w-full mt-4  h-[50px] text-stone-500 font-bold border-none rounded-xl bg-pink-300 flex items-center justify-center">
          저장하기
        </button>
      </form>
    </DetailLayout>
  );
};

export default EditStoryPage;
