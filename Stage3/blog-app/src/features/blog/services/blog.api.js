import { instanceAxios } from '../../../shared/helpers/instanceAxios';
import { errorHandler, successHandler } from '../../../shared/services/handler';

export const getBlogs = async () => {
  try {
    const data = await instanceAxios({
      method: 'GET',
      url: '/posts',
    });

    return successHandler(data);
  } catch (err) {
    return errorHandler(err);
  }
};
