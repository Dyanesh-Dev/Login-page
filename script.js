const loginTab = document.getElementById('login-tab');
const signupTab = document.getElementById('signup-tab');
const signinForm = document.getElementById('signin-form');
const signupForm = document.getElementById('signup-form');

loginTab.addEventListener('click', () => {
    signupForm.classList.remove('active');
    signinForm.classList.add('active');
    loginTab.classList.add('active');
    signupTab.classList.remove('active');
});

signupTab.addEventListener('click', () => {
    signinForm.classList.remove('active');
    signupForm.classList.add('active');
    signupTab.classList.add('active');
    loginTab.classList.remove('active');
});
