import { Post, Get, Put, Delete } from '../Request_Format';

export const InstructorPostRequest = async ({ body }) => {
  return await Post({ url: 'instructor', body: body });
};

export const InstructorGetRequest = async ({ params }) => {
  return await Get({ url: 'instructor', params: params });
};

export const InstructorPutRequest = async ({ params, body }) => {
  return await Put({
    url: 'instructor',
    params: params,
    body: body,
  });
};

export const InstructorDeleteRequest = async ({ params }) => {
  return await Delete({ url: 'instructor', params: params });
};
