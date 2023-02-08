const form = document.querySelector('form');
const passwordInput = document.querySelector('input[name="password"]');
const confirmPasswordInput = document.querySelector(
  'input[name="confirmPassword"]'
);
const formAlert = document.querySelector('.form-alert');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const formData = new FormData(e.currentTarget);
  const { password, confirmPassword } = Object.fromEntries(formData);

  if (password !== confirmPassword) {
    passwordInput.classList.add('invalid');
    confirmPasswordInput.classList.add('invalid');
    formAlert.textContent = '*Password does not match';
    return;
  }

  passwordInput.classList.remove('invalid');
  confirmPasswordInput.classList.remove('invalid');
  formAlert.textContent = '';
});
