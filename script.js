const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.btnLogin-popup');
const iconClose = document.querySelector('.icon-close');
const navigation = document.querySelector('.navigation');
const iconList = document.querySelector('.icon-list');

registerLink.addEventListener('click', ()=> {
    wrapper.classList.add('active');
});

loginLink.addEventListener('click', ()=> {
    wrapper.classList.remove('active');
});

btnPopup.addEventListener('click', ()=> {
    if (navigation.classList.contains('active-list'))
        navigation.classList.remove('active-list');
    wrapper.classList.add('active-popup');
});

iconClose.addEventListener('click', ()=> {
    wrapper.classList.remove('active-popup');
});

iconList.addEventListener('click', ()=> {
    if (navigation.classList.contains('active-list')) {
        navigation.classList.remove('active-list');
    } else {
        navigation.classList.add('active-list');
    }
});
