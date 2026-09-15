const blogsListEl = document.getElementById('blogs-list');
const loadingEl = document.getElementById('loading');
const alertEl = document.getElementById('alert');

function createBlogCard(blog) {
  const col = document.createElement('div');
  col.className = 'col';

  col.innerHTML = `
    <div class="card h-100 shadow-sm">
      <div class="card-body">
        <h5 class="card-title text-capitalize">${blog.title}</h5>
        <p class="card-text text-muted">${blog.body}</p>
      </div>
    </div>
  `;

  col.style.cursor = 'pointer';

  col.addEventListener('click', function () {
    // redirect to detail page with id
    window.location.href = `./src/pages/detail/detail.html?id=${blog.id}`;
  });

  return col;
}

function renderBlogs(blogs) {
  blogsListEl.innerHTML = '';

  blogs.forEach(function (blog) {
    blogsListEl.append(createBlogCard(blog));
  });
}

async function startApp() {
  try {
    const blogsData = await getBlogs();

    // render data logic
    renderBlogs(blogsData);
  } catch (err) {
    // alert dom logic
    alertEl.textContent = 'Blogs could not be loaded!';
    alertEl.classList.remove('d-none');
    console.log(err);
  } finally {
    // lodaing logic
    loadingEl.classList.add('d-none');
  }
}

startApp();
