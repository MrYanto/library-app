import type { RegisterRequest, RegisterResponse } from '@/types/auth.type.ts';
import apiInstance from '@/api';

export const authService = {
  register: async (request: RegisterRequest): Promise<RegisterResponse> => {
    const { data } = await apiInstance.post<RegisterResponse>(
      '/auth/register',
      request
    );
    return data;
  },
};

export default authService;
