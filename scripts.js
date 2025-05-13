function validateForm() {
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;
  const errorMessage = document.getElementById('error-message');

  // Clear previous error message
  errorMessage.style.display = 'none';

  // Validate name
  if (!name.trim()) {
    errorMessage.textContent = 'Please enter your name.';
    errorMessage.style.display = 'block';
    return false;
  }

  // Validate email
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!email.trim()) {
    errorMessage.textContent = 'Please enter your email.';
    errorMessage.style.display = 'block';
    return false;
  } else if (!emailPattern.test(email)) {
    errorMessage.textContent = 'Please enter a valid email address.';
    errorMessage.style.display = 'block';
    return false;
  }

  // Validate message
  if (!message.trim()) {
    errorMessage.textContent = 'Please enter your message.';
    errorMessage.style.display = 'block';
    return false;
  }

  return true;
}
