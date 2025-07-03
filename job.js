document.getElementById('post-job-form').addEventListener('submit', function(e) {
  e.preventDefault();
  alert('Job posted successfully!');
});

document.getElementById('toggle-dark').addEventListener('click', function() {
  document.body.classList.toggle('dark');
});
