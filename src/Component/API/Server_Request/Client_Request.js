import { Post, Get, Put, Delete } from '../Request_Format';

export const ClientPostRequest = async ({ body }) => {
  return await Post({ url: 'client', body: body });
};

export const ClientGetRequest = async ({ params }) => {
  return await Get({ url: 'client', params: params });
};

export const ClientPutRequest = async ({ params, body }) => {
  return await Put({
    url: 'client',
    params: params,
    body: body,
  });
};

export const ClientDeleteRequest = async ({ params }) => {
  return await Delete({ url: 'client', params: params });
};
