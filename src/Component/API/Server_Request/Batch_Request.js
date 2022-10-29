import { Post, Get, Put, Delete } from '../Request_Format';

export const BatchPostRequest = async ({ body }) => {
  return await Post({ url: 'batch', body: body });
};

export const BatchGetRequest = async ({ params }) => {
  return await Get({ url: 'batch', params: params });
};

export const BatchPutRequest = async ({ params, body }) => {
  return await Put({
    url: 'batch',
    params: params,
    body: body,
  });
};

export const BatchDeleteRequest = async ({ params }) => {
  return await Delete({ url: 'batch', params: params });
};
