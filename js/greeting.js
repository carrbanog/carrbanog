const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const gretting = document.querySelector("#gretting");
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(evevt) {
  event.preventDefault();
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  loginForm.classList.add(HIDDEN_CLASSNAME);

  // gretting.innerText = "Hello " + username;
  paintGreeting(username);
}

function paintGreeting(username) {
  gretting.innerText = `Hello ${username}`;
  gretting.classList.remove(HIDDEN_CLASSNAME);
}

loginForm.addEventListener("submit", onLoginSubmit);

const savedUsername = localStorage.getItem(USERNAME_KEY);
if (savedUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  paintGreeting(savedUsername);
}
