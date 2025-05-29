import { useState } from 'react';
import { CurrentPlay } from '../../type';
import { authenticatedApi } from '../../api/base';
import { useCurrentPlay } from '../../store/CurrentPlayContext';

export const useRequestAudioBook = () => {
  const [data, setData] = useState<CurrentPlay | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const {wavFile, setWavFile}= useCurrentPlay();

  const requestAudioBook = async (storyId: number) => {
  setLoading(true);
  setError(null);
  try {

    console.log(storyId);

    const response = await authenticatedApi.post<CurrentPlay>(
      '/api/voice-book/play',
      { storyId }
    );
    
    setData(response.data);

    const secondResponse = await authenticatedApi.get<Blob>(
      `/api/voice-book/${response.data.userVoiceUrl}`,
      { responseType: 'blob' }
    );


    const audioBlob = secondResponse.data;
    const audioUrl = URL.createObjectURL(audioBlob);
    setWavFile(audioUrl);

    return response.data;
  } catch (err: any) {
    setError(err.response?.data?.message || '오디오북 요청 중 오류 발생');
    setData(null);
  } finally {
    setLoading(false);
  }
};

  return { requestAudioBook, data, wavFile,loading, error };
};
