import { useState } from 'react';
import DetailLayout from '../../components/layout/DetailLayout';
import { toast } from 'react-toastify';
import { authenticatedApi } from '../../api/base';
import { useNavigate } from 'react-router-dom';

const categories = ['동화책', '편지'];

const EditStoryPage = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [category, setCategory] = useState('동화책');

  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const categoryMap: { [key: string]: string } = {
      동화책: 'FAIRY_TALE',
      편지: 'LETTER',
    };

    try {
      await authenticatedApi.post('/api/archive', {
        title,
        content,
        category: categoryMap[category],
      });

      toast.success('저장에 성공하였습니다', {
        position: 'top-right',
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        theme: 'light',
      });

      setTitle('');
      setContent('');
      setCategory('동화책');

      navigate('/archive');
    } catch (error: any) {
      toast.error('저장에 실패하였습니다.', {
        position: 'top-right',
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        theme: 'light',
      });
      console.error(error?.response?.data || error.message);
    }
  };

  return (
    <DetailLayout>
      <form onSubmit={handleSubmit} className="w-full flex flex-col flex-grow">
        <div className="mt-5">
          <label className="font-bold">제목</label>
          <input
            className="w-full h-10 mt-2 px-4 placeholder:text-sm bg-white border border-pink-300 rounded-lg"
            placeholder="제목을 입력해주세요."
            style={{ backgroundColor: '#FFFBFA' }}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div className="mt-8">
          <label className="font-bold">카테고리</label>
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                type="button"
                key={cat}
                onClick={() => setCategory(cat)}
                className={`px-4 mt-2 h-7 text-sm flex items-center rounded-full border ${
                  category === cat
                    ? 'bg-pink-400 text-white'
                    : 'bg-white text-gray-700 border-gray-300'
                } transition`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-8">
          <label className="font-bold">내용</label>
          <textarea
            className="w-full h-70 mt-2 py-4 px-3 placeholder:text-sm bg-white border border-pink-300 rounded-xl"
            placeholder="내용을 입력해주세요."
            style={{ backgroundColor: '#FFFBFA' }}
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </div>

        <button
          type="submit"
          className="w-full mt-4 h-[50px] text-stone-500 font-bold border-none rounded-xl bg-pink-300 flex items-center justify-center"
        >
          저장하기
        </button>
      </form>
    </DetailLayout>
  );
};

export default EditStoryPage;
