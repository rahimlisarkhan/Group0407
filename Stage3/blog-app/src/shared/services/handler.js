export const successHandler = (data) => ({
  result: true,
  status: data.status,
  data: data.data,
});

export const errorHandler = (err) => ({
  result: false,
  status: err.status,
  data: err,
});
