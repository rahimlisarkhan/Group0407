export const successHandler = (response) => ({
  result: true,
  status: response.status,
  data: response.data,
});

export const errorHandler = (err) => ({
  result: false,
  status: err.status,
  data: err,
});
