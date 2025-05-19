import { useState, useEffect } from 'react';
import axios from 'axios';
import api from '../../api/base';
import { Archive } from '../../type';

interface ArchivesResponse {
  archives: Archive[];
}

interface ErrorResponse {
  code: string;
  message: string;
}

export function useArchives() {
  const [archives, setArchives] = useState<Archive[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const fetchArchives = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await api.get<ArchivesResponse>('/api/archive', {
        withCredentials: true,
      });
      if (response.status === 200) {
        setArchives(response.data.archives);
      }
    } catch (e: any) {
      if (axios.isAxiosError(e)) {
        const errData = e.response?.data as ErrorResponse | undefined;
        if (errData?.message) {
          setError(errData.message);
        } else {
          setError('알 수 없는 서버 오류가 발생했습니다.');
        }
      } else {
        setError('서버와 연결할 수 없습니다.');
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchArchives();
  }, []);

  return {
    archives,
    loading,
    error,
    refetch: fetchArchives,
  };
}
