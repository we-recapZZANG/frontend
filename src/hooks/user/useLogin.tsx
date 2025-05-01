import { useState, ChangeEvent } from 'react';
import axios from 'axios';

interface LoginFron {
  email: string;
  password: string;
}

export function useLogin() {
  const [loginForm, setLoginForm] = useState<LoginFron>({
    email: '',
    password: '',
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLoginForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const submitForm = async (): Promise<any | null> => {
    try {
      const response = await axios.post('/api/login', loginForm, {
        headers: {
          'Content-Type': 'application/json',
          withCredentials: true,
        },
      });

      return response.data;
    } catch (err) {
      console.error(err);
      return null;
    }
  };

  return {
    loginForm,
    handleChange,
    submitForm,
  };
}
