import { useState } from 'react';
import axios from 'axios';
import api from '../../api/base';

interface RegisterFormData {
  email: string;
  password: string;
  name: string;
}

export function useRegisterForm() {
  const [serverError, setServerError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const onSubmitForm = async (data: RegisterFormData): Promise<boolean> => {
    try {
      const response = await api.post('/api/signup', {
        email: data.email,
        name: data.name,
        password: data.password,
      });
      if (response.status === 200) {
        setSuccessMessage('회원가입이 성공적으로 완료되었습니다!');
        return true;
      }
    } catch (error: any) {
      if (axios.isAxiosError(error)) {
        const code = error.response?.data?.code;
        if (code === 'ALREADY_EXIST_MEMBER') {
          setServerError('이미 존재하는 회원입니다.');
        } else {
          setServerError('회원가입 중 오류가 발생했습니다.');
        }
      } else {
        setServerError('서버와 연결할 수 없습니다.');
      }
    }
    return false;
  };

  return {
    onSubmitForm,
    serverError,
    successMessage,
  };
}
