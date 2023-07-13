const modeToggle = document.getElementById('mode-toggle');
const body = document.body;

modeToggle.addEventListener('change', function() {
  if (this.checked) {
    body.classList.add('dark-mode');
  } else {
    body.classList.remove('dark-mode');
  }
});