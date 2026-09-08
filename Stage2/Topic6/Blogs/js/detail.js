const loadingEl = document.getElementById('loading');
const alertEl = document.getElementById('alert');
const detailEl = document.getElementById('blog-detail');
const titleEl = document.getElementById('blog-title');
const idEl = document.getElementById('blog-id');
const bodyEl = document.getElementById('blog-body');
const commentsListEl = document.getElementById('comments-list');

function renderBlogDetail(blog) {
  titleEl.textContent = blog.title;
  idEl.textContent = `#${blog.id}`;
  bodyEl.textContent = blog.body;

  detailEl.classList.remove('d-none');
}

function renderComments(comments = []) {
  commentsListEl.innerHTML = '';

  if (!comments.length) {
    commentsListEl.innerHTML = `<p class="text-muted">No comments yet.</p>`;
    return;
  }

  comments.forEach(function (comment) {
    const col = document.createElement('div');
    col.className = 'col';

    col.innerHTML = `
      <div class="card">
        <div class="card-body">
          <h6 class="card-title text-capitalize mb-1">${comment.name}</h6>
          <a href="mailto:${comment.email}" class="small text-decoration-none">${comment.email}</a>
          <p class="card-text mt-2 mb-0">${comment.body}</p>
        </div>
      </div>
    `;

    commentsListEl.append(col);
  });
}

async function startApp() {
  try {
    // catch id from html (url query param)
    const params = new URLSearchParams(window.location.search);
    const dynamicId = params.get('id');

    if (!dynamicId) throw new Error('Blog id not found!');

    const blogData = await getBlogById(dynamicId);

    // render data logic
    renderBlogDetail(blogData);
    renderComments(blogData.comments);
  } catch (err) {
    // alert dom logic
    alertEl.textContent = 'Blog detail could not be loaded!';
    alertEl.classList.remove('d-none');
    console.log(err);
  } finally {
    // lodaing logic
    loadingEl.classList.add('d-none');
  }
}

startApp();
