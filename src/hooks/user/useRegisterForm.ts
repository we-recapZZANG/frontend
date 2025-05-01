import { useState, ChangeEvent } from 'react';
import axios from 'axios';

interface RegisterFormData {
  email: string;
  name: string;
  password: string;
}

export function useRegisterForm() {
  const [form, setForm] = useState<RegisterFormData>({
    email: '',
    name: '',
    password: '',
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const submitForm = async (): Promise<any | null> => {
    try {
      const response = await axios.post('/api/signup', form, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      return response.data;
    } catch (err) {
      console.error(err);
      return null;
    }
  };

  return {
    form,
    handleChange,
    submitForm,
  };
}
