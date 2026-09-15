const baseURL = 'https://blog-api-t6u0.onrender.com';

async function getBlogs() {
  // const apiKey = localStorage.getItem('app_key');

  const response = await fetch(baseURL + '/posts', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      // Auth: apiKey,
    },
  });

  const data = await response.json();

  return data.reverse();
}

async function getBlogById(id, commentActive = true) {
  const url = `${baseURL}/posts/${id}`;
  const urlComment = `${baseURL}/posts/${id}?_embed=comments`;

  const response = await fetch(commentActive ? urlComment : url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const data = await response.json();

  return data;
}

async function crtBlog(payload) {
  const response = await fetch(baseURL + '/posts', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) throw new Error('Blog could not be created!');

  const data = await response.json();

  return data;
}

async function uptBlog(id, payload) {
  const url = baseURL + '/posts/' + id;

  const response = await fetch(url, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) throw new Error('Blog could not be updated!');

  const data = await response.json();

  return data;
}

async function rmvBlog(id) {
  const url = baseURL + '/posts/' + id;
  const response = await fetch(url, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (!response.ok) throw new Error('Blog could not be deleted!');

  const data = await response.json();

  return data;
}

// const testData = {
//   title: 'Yeni ders elvin',
//   body: 'Lorem ipsum bla bla',
// };

// crtBlog(testData);
