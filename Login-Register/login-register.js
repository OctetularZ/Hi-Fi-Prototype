// Navigation menu

const nav = document.querySelector('.nav-links')
const openNavBtn = document.querySelector('#nav-toggle-open')
const closeNavBtn = document.querySelector('#nav-toggle-close')


const openNav = () => {
  nav.style.display = 'flex';
  openNavBtn.style.display = 'none';
  closeNavBtn.style.display = 'inline-block';
}

openNavBtn.addEventListener('click', openNav)


const closeNav = () => {
  nav.style.display = 'none';
  openNavBtn.style.display = 'inline-block';
  closeNavBtn.style.display = 'none';
}

closeNavBtn.addEventListener('click', closeNav)



// Login & Register - Stores users in localStorage

const container = document.querySelector('.form-container');
const registerBtn = document.querySelector('.register-btn');
const loginBtn = document.querySelector('.login-btn');

registerBtn.addEventListener('click', () => {
  container.classList.add('active');
})

loginBtn.addEventListener('click', () => {
  container.classList.remove('active');
})


// Register
document.querySelector('.form-box.register form').addEventListener('submit', function (e) {
  e.preventDefault();

  const username = document.getElementById('register-username').value;
  const email = document.getElementById('register-email').value;
  const password = document.getElementById('register-password').value;

  if (!username || !email || !password) {
    alert('Please fill in all fields');
    return;
  }

  // Store user in localStorage
  const user = {
    username,
    email,
    password
  };
  localStorage.setItem('user', JSON.stringify(user));
  alert('Registered successfully! Please log in.');

  container.classList.remove('active');
});


// Login
document.querySelector('.form-box.login form').addEventListener('submit', function (e) {
  e.preventDefault();

  const username = document.getElementById('login-username').value;
  const password = document.getElementById('login-password').value;

  const storedUser = JSON.parse(localStorage.getItem('user'));

  if (!storedUser) {
    alert('No registered user found.');
    return;
  }

  if (username === storedUser.username && password === storedUser.password) {
    window.location.href = '/index.html';
  } else {
    alert('Invalid username or password');
  }
});