import { Post, Get, Put, GetAll } from '../Request_Format';

export const ActiveUserGetRequest = async () => {
  return await GetAll({ url: 'users' });
};

export const FetchUserData = async () => {
  return await Get({ url: 'Allusers' });
};

export const FetchCustomUser = async () => {
  return await Get({ url: 'Customusers' });
};
