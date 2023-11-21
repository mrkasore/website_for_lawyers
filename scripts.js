let num_of_slide = 0;
const slides = document.querySelectorAll('.slide');
const inp_radio = document.querySelectorAll('.inp_radio');

const prevBtn = document.querySelector('#prev');
const nextBtn = document.querySelector('#next');

const btn_all_lawyers = document.querySelector('#all_lawyers'); 
const close_grid_btn = document.querySelector('#close_grid_btn');

const header_link = document.querySelectorAll('.header_link');
const hamburger = document.querySelector('#hamburger');
const all_header_links = document.querySelectorAll('.header_link');


slides[num_of_slide].style.display = 'grid';

 
prevBtn.addEventListener('click', changeSlide);
nextBtn.addEventListener('click', changeSlide);

function changeSlide(e) {
    slides[num_of_slide].style.display = 'none';
    num_of_slide +=  Number(e.target.getAttribute('data'));

    if (num_of_slide >= slides.length) num_of_slide = 0;
    else if (num_of_slide < 0) num_of_slide = slides.length-1;

    slides[num_of_slide].style.display = 'grid';
    inp_radio[num_of_slide].checked = true;

}

inp_radio.forEach(item => {
    item.addEventListener('click', changeRadio);
});

function changeRadio(e) {
    console.log(Number(e.target.getAttribute('data')));
    slides[num_of_slide].style.display = 'none';
    num_of_slide = Number(e.target.getAttribute('data'));
    slides[num_of_slide].style.display = 'grid';

}

// Показать весь список адвокатов
btn_all_lawyers.addEventListener('click', function() {
    document.querySelector('.all-slider').style.display = 'grid';
    document.querySelector('#all_lawyers').style.display = 'none';
});

// Скрыть список адвокатов
close_grid_btn.addEventListener('click', function() {
    document.querySelector('.all-slider').style.display = 'none';
    document.querySelector('#all_lawyers').style.display = 'block';
})

//переход по навигации
header_link.forEach(item => {
    item.addEventListener('click', function(e) {
        document.querySelector(`.${e.target.getAttribute('data')}`).scrollIntoView();
    })
})

hamburger.addEventListener('click', function() {
    hamburger.classList.toggle('active');

    all_header_links.forEach(item => {
        if(hamburger.classList == 'active') {
            item.style.display = 'flex';
        } else {
            item.style.display = 'none';
        }
        
    })
})



