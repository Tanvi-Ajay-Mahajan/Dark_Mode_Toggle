// References
const toggleCheckbox = document.getElementById('theme-toggle');
const body = document.body;

// Apply saved theme from localStorage
const savedTheme = localStorage.getItem('theme') || 'light';
if (savedTheme === 'dark') {
  body.classList.add('dark-theme');
  toggleCheckbox.checked = true;
}

// Toggle Theme
toggleCheckbox.addEventListener('change', () => {
  if (toggleCheckbox.checked) {
    body.classList.add('dark-theme');
    localStorage.setItem('theme', 'dark');
  } else {
    body.classList.remove('dark-theme');
    localStorage.setItem('theme', 'light');
  }
});
