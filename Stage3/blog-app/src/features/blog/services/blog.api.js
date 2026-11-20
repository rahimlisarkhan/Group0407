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
