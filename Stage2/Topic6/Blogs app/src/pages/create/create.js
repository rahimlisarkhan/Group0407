const titleInput = document.getElementById('titleInput');
const descInput = document.getElementById('descInput');
const sendBtn = document.getElementById('send-btn');
const btnSpinner = document.getElementById('btn-spinner');
const btnText = document.getElementById('btn-text');
const alertEl = document.getElementById('alert');
const titleMode = document.querySelector('#titleMode');

function generateId() {
  const params = new URLSearchParams(window.location.search);
  const dynamicId = params.get('id');

  return dynamicId;
}

function showAlert(message, type) {
  alertEl.textContent = message;
  alertEl.className = `alert alert-${type}`;
}

function hideAlert() {
  alertEl.className = 'alert d-none';
}

function setLoading(isLoading) {
  sendBtn.disabled = isLoading;
  btnSpinner.classList.toggle('d-none', !isLoading);
  btnText.textContent = isLoading ? 'Sending...' : 'Send';
}

async function formFill() {
  try {
    const id = generateId();
    const data = await getBlogById(id, false);

    titleInput.value = data.title;
    descInput.value = data.body;
  } catch (err) {
    console.log(err);
  }
}

sendBtn.addEventListener('click', async function () {
  hideAlert();

  //Validation
  if (titleInput.value.trim() == '' || descInput.value.trim() == '') {
    // Alert div block html side logic
    showAlert('Title and description are required!', 'warning');
    return;
  }

  const payload = {
    title: titleInput.value.trim(),
    body: descInput.value.trim(),
  };

  try {
    setLoading(true);

    const id = generateId();

    // crtBlog already returns parsed json

    if (id) {
      await uptBlog(id, payload);
    } else {
      await crtBlog(payload);
    }

    const text = id ? 'updated' : 'created';
    // Success Alert logic
    showAlert(`Blog ${text} successfully! Redirecting...`, 'success');

    setTimeout(() => {
      window.location.href = '../../../index.html';
    }, 2000);
  } catch (err) {
    // Alert logic div block
    showAlert('Blog could not be updated!', 'danger');
  } finally {
    // loading false
    setLoading(false);
  }
});

function loadingPage() {
  const isEditMode = generateId();

  titleMode.textContent = isEditMode ? 'Update Blog' : 'Create Blog';

  if (isEditMode) {
    formFill();
  }
}

loadingPage();
