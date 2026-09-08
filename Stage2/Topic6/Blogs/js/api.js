const baseURL = 'https://blog-api-t6u0.onrender.com';

async function getBlogs() {
  const response = await fetch(baseURL + '/posts', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const data = await response.json();

  return data;
}

async function getBlogById(id) {
  const url = `${baseURL}/posts/${id}?_embed=comments`;

  const response = await fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const data = await response.json();

  console.log('data', data);

  return data;
}
