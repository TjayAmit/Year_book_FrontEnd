import { Post, Get, Put, Delete } from '../Request_Format';

export const SectionPostRequest = async ({ body }) => {
  return await Post({ url: 'section', body: body });
};

export const SectionGetRequest = async ({ params }) => {
  return await Get({ url: 'section', params: params });
};

export const SectionPutRequest = async ({ params, body }) => {
  return await Put({
    url: 'section',
    params: params,
    body: body,
  });
};

export const SectionDeleteRequest = async ({ params }) => {
  return await Delete({ url: 'section', params: params });
};
