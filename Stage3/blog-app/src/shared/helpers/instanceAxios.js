import axios from 'axios';

export const instanceAxios = axios.create({
  baseURL: 'https://blog-api-t6u0.onrender.com',
  timeout: 20000,
  //   headers: {
  //     'X-rezneed-key': 'DASD332312sda',
  //     'X-rezneed-token': '12312312sdad',
  //   },
});

// TEST: currentBranch yoxdursa random bir deyer yaz (sonra silinecek)
if (!localStorage.getItem('currentBranch')) {
  localStorage.setItem('currentBranch', String(Math.floor(Math.random() * 1000) + 1));
}

// Add a request interceptor
instanceAxios.interceptors.request.use(
  function (config) {
    // Do something before request is sent

    console.log('config gomruk menteqesi', config);

    config.headers.Authorization =
      'Breare ' + localStorage.getItem('access_token');

    config.headers['X-branch-id'] = localStorage.getItem('currentBranch');

    return config;
  },
  function (error) {
    console.log('error gomruk menteqesi', error);

    // Do something with request error
    return Promise.reject(error);
  },
);

// Add a response interceptor
axios.interceptors.response.use(
  function (response) {
    console.log('response gomruk menteqesi', response);

    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  function (error) {
    console.log('response error gomruk menteqesi', error);

    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  },
);
