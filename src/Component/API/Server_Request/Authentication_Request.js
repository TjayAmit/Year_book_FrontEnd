import { Post, Get, Put } from '../Request_Format';

export const LoginRequest = async ({ body }) => {
  return await Post({ url: 'auth/signin', body: body });
};

export const RegisterRequest = async ({ body }) => {
  return await Post({ url: 'auth/signup', body: body });
};

export const LogoutRequest = async ({ params }) => {
  return await Put({ url: 'admin/user/logout', params: params });
};
