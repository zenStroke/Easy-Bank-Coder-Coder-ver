import './scss/style.scss';

const btnHamburger = document.querySelector('#btnHamburger');
const header = document.querySelector('.header');

btnHamburger.addEventListener('click', function(){
    console.log('click hambuerger');

    if(header.classList.contains('open')){
        header.classList.remove('open');
    }
    else {
        header.classList.add('open');
    }
})