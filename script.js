function validateForm() {
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const country = document.getElementById('country').value;

  if (name === '' || email === '' || password === '' || country === '') {
    alert('All fields are required');
    return false;
  }

  // You can add more validation checks here, like email format validation, etc.

  return true;
}

const add = () => {
  console.log('add');
};
