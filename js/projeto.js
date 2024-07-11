const btnOpen = document.querySelectorAll('.btn-open');
const btnClose = document.querySelectorAll('.btn-close');

btnOpen.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    const album = btn.parentNode;
    album.classList.add('active');
  });
});

btnClose.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    const album = btn.parentNode.parentNode;
    album.classList.remove('active');
  });
});