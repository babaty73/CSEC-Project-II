script
function validateForm() {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (name === "") {
    alert("Name is required");
    return false;
  }

  if (email === "") {
    alert("Email is required");
    return false;
  }

  if (message === "") {
    alert("Message is required");
    return false;
  }

  alert("Form submitted successfully!");
  return true; // allows submit
}