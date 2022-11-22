import api from './API';

export const Post = async ({ url, body }) => {
  return await api.post(url, {
    body: body,
  });
};

export const GetAll = async ({ url }) => {
  return await api.get(url);
};

export const Get = async ({ url, params }) => {
  return await api.get(url, {
    params: params,
  });
};

export const Put = async ({ url, params, body }) => {
  return await api.put(url, {
    params: params,
    body: body,
  });
};

export const Delete = async ({ url, params }) => {
  return await api.delete(url, {
    params: params,
  });
};
