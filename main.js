const loginBtn = document.querySelector('.toogle');

const loginPOPUP = document.querySelector('.login__pop-up');

loginBtn.addEventListener('click', () => {
    loginPOPUP.classList.toggle('active');
});