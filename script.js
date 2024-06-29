document.getElementById('signup-link').addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector('.login-page').style.display = 'none';
    document.querySelector('.signup-page').style.display = 'block';
});

document.getElementById('login-form').addEventListener('submit', function(e) {
    e.preventDefault();
    // Add login functionality here
    alert('Login form submitted');
});

document.getElementById('signup-form').addEventListener('submit', function(e) {
    e.preventDefault();
    // Add signup functionality here
    alert('Signup form submitted');
});