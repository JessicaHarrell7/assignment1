document.addEventListener('DOMContentLoaded', function () {
  const themeToggle = document.querySelector('#theme-toggle');

  themeToggle.addEventListener('click', function () {
    document.body.classList.toggle('dark');

  if (document.body.classList.contains('dark')) {
    themeToggle.textContent = 'Light Mode';
  } else {
    themeToggle.textContent = 'Dark Mode'; }
  });
});
