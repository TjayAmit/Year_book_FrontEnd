import { Post, Get, Put, GetAll } from '../Request_Format';

export const ActiveUserGetRequest = async () => {
  return await GetAll({ url: 'users' });
};
