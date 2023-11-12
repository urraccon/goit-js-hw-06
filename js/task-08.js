const loginForm = document.querySelector(".login-form");
console.dir(loginForm);
class user {
  email;
  password;

  constructor(email, password) {
    this.email = email;
    this.password = password;
  }

  get loginData() {
    return `The user logged in using the email address: ${this.email} and the password ${this.password}`;
  }
}

loginForm.addEventListener("submit", (session) => {
  session.preventDefault();
  const entredEmail = document.querySelector('[name="email"]');
  console.dir(entredEmail.value);
  const entredPassword = document.querySelector('[name="password"]');
  console.dir(entredPassword.value);
  if (!entredEmail.value || !entredPassword.value) {
    alert("Please make sure that you have filled in both fields");
  }
  const newUser = new user(entredEmail.value, entredPassword.value);
  console.log(newUser);
  console.log(newUser.loginData);
  entredEmail.value = "";
  entredPassword.value = "";
});
