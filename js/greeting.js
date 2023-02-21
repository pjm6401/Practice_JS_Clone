const loginInput = document.querySelector("#login-form input");
const loginForm = document.querySelector("#login-form");
const link = document.querySelector("a");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASS = "hidden";
const USERNAME_KEY = "username";
function onLoginSubmit(event) {
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASS);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY,username);
    paintGreeting(username);
}
function paintGreeting(username){
    greeting.innerText=`Hello! ${username}`;
    greeting.classList.remove(HIDDEN_CLASS);
}
loginForm.addEventListener("submit", onLoginSubmit);

const saveUsername = localStorage.getItem(USERNAME_KEY);
if(saveUsername === null){
    loginForm.classList.remove(HIDDEN_CLASS);
    loginForm.addEventListener("submit", onLoginSubmit);
}else{
    loginForm.classList.add(HIDDEN_CLASS);
    paintGreeting(saveUsername);
}