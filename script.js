const form = document.querySelector('form');
const input = document.getElementById('email');
const button = document.getElementById('btnNotify');
const errorMsg = document.querySelector('.error-msg');

form.addEventListener('submit', function (event) {
  event.preventDefault();

  const email = input.value.trim();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (email === '' || !emailRegex.test(email)) {
    errorMsg.style.opacity = '1';
    return;
  }

  form.submit();
});


input.addEventListener('input', function () {
  errorMsg.style.opacity = '0';
});
