const wrapper = document.querySelector('.wraper');
const loginlink = document.querySelector('.login-link');
const registerlink = document.querySelector('.register-link');
const bthPopup=document.querySelector('.bth');
const iconClose=document.querySelector('.icon-close');
registerlink.addEventListener('click',()=> {
    wrapper.classList.add('active');
});
loginlink.addEventListener('click',()=> {
    wrapper.classList.remove('active');
});
bthPopup.addEventListener('click',()=>{
    wrapper.classList.add('active-bth');
});
iconClose.addEventListener('click',()=>{
    wrapper.classList.remove('active-bth');
});