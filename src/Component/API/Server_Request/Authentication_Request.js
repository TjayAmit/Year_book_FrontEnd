import { Post, Get, Put } from '../Request_Format';

export const LoginRequest = async ({ body }) => {
  return await Post({ url: '/auth/login', body: body });
};

export const RegisterRequest = async ({ params }) => {
  return await Get({ url: '/auth/register', params: params });
};

export const LogoutRequest = async ({ params, body }) => {
  return await Put({ url: '/auth/logout', params: params, body: body });
};
