import { instanceAxios } from '../../../shared/helpers/instanceAxios';
import { errorHandler, successHandler } from '../../../shared/services/handler';

export const getBlogs = async () => {
  try {
    const response = await instanceAxios({
      method: 'GET',
      url: '/posts',
    });

    return successHandler(response);
  } catch (err) {
    return errorHandler(err);
  }
};

export const getBlogId = async (id) => {
  try {
    const response = await instanceAxios({
      method: 'GET',
      url: '/posts/' + id,
    });

    return successHandler(response);
  } catch (err) {
    return errorHandler(err);
  }
};

export const crtBlogId = async (data) => {
  try {
    const response = await instanceAxios({
      method: 'POST',
      url: '/posts',
      data,
    });

    return successHandler(response);
  } catch (err) {
    return errorHandler(err);
  }
};
