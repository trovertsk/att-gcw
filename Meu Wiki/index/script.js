function toggleDarkMode() {
    var body = document.querySelector('body');
    if (body.classList.contains('dark-mode')) {
      body.classList.remove('dark-mode');
    } else {
      body.classList.add('dark-mode');
    }
  }
  
  var button = document.querySelector('#dark-mode-toggle');
  console.log(button);
  button.addEventListener('click', toggleDarkMode);
    