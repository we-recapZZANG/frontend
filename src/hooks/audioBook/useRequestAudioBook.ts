import { useState } from 'react';
import axios from 'axios';
import { CurrentPlay } from '../../type';

export const useRequestAudioBook = () => {
  const [data, setData] = useState<CurrentPlay | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const requestAudioBook = async (storyId: number) => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.post<CurrentPlay>(
        '/api/voice-book/play',
        { storyId },
        { withCredentials: true }
      );
      setData(response.data);
      return response.data;
    } catch (err: any) {
      setError(err.response?.data?.message || '오디오북 요청 중 오류 발생');
      setData(null);
    } finally {
      setLoading(false);
    }
  };

  return { requestAudioBook, data, loading, error };
};
