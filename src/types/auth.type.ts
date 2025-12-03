export type User = {
  id: number;
  name: string;
  email: string;
  role: string;
};

export type RegisterRequest = {
  name: string;
  email: string;
  phoneNumber: string;
  password: string;
};

export type RegisterResponse = {
  success: boolean;
  message: string;
  data: User;
};

export type LoginRequest = {
  email: string;
  password: string;
};

export type LoginResponse = {
  success: boolean;
  message: string;
  data: {
    token: string;
    user: User;
  };
};
