import { Post, Get, Put, Delete } from '../Request_Format';

export const StudentPostRequest = async ({ body }) => {
  return await Post({ url: 'student', body: body });
};

export const StudentGetRequest = async ({ params }) => {
  return await Get({ url: 'student', params: params });
};

export const StudentPutRequest = async ({ params, body }) => {
  return await Put({
    url: 'student',
    params: params,
    body: body,
  });
};

export const StudentDeleteRequest = async ({ params }) => {
  return await Delete({ url: 'student', params: params });
};
