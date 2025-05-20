import { useState, useEffect } from 'react';
import { authenticatedApi } from '../../api/base';
import axios from 'axios';

interface ArchiveDetail {
  title: string;
  content: string;
  category: string;
}

interface ErrorResponse {
  code: string;
  message: string;
}

export function useArchiveDetail(storyId: number) {
  const [archive, setArchive] = useState<ArchiveDetail | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const fetchArchiveDetail = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await authenticatedApi.get<ArchiveDetail>(
        `/api/archive/${storyId}`
      );

      if (response.status === 200) {
        setArchive(response.data);
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
    if (storyId) {
      fetchArchiveDetail();
    }
  }, [storyId]);

  return {
    archive,
    loading,
    error,
    refetch: fetchArchiveDetail,
  };
}
