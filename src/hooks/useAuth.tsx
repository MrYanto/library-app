'use client';
import { useState, useEffect } from 'react';
import { User } from '@/types/auth.type';
import { useMutation } from '@tanstack/react-query';
import { authService } from '../services/auth.service';

export const useAuth = () => {
  const [data, setData] = useState<User | null>(null);

  useEffect(() => {
    const storedData = localStorage.getItem('user');
    if (storedData) setData(JSON.parse(storedData));
  }, []);

  const register = useMutation({
    mutationFn: authService.register,
    onSuccess: (user) => {
      setData(user.data);
      localStorage.setItem('user', JSON.stringify(user.data));
    },
  });

  return {
    data,
    isAuthenticated: Boolean(data),
    register,
  };
};

export default useAuth;
