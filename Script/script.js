// Simple email validation
document.querySelector('.cta button').addEventListener('click', function () {
  const emailInput = document.querySelector('.cta input');
  const email = emailInput.value;
  
  if (email && validateEmail(email)) {
    alert('Thank you for your interest! An invite will be sent to your email.');
  } else {
    alert('Please enter a valid email address.');
  }
});

function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

document.querySelector('.issue-form').addEventListener('submit', function(event) {
  event.preventDefault();
  alert('Thank you! Your report has been submitted successfully.');
});

document.querySelector('.feedback-form').addEventListener('submit', function(event) {
  event.preventDefault();
  
  // Gather form data
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const category = document.getElementById('category').value;
  const message = document.getElementById('message').value.trim();
  
  // Basic validation check
  if (name && email && category && message) {
    alert("Thank you for your feedback!");
    // You could also add code here to send the data to a backend service
  } else {
    alert("Please fill out all fields.");
  }
});
