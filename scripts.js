let num_of_slide = 0;
const slides = document.querySelectorAll('.slide');
const inp_radio = document.querySelectorAll('.inp_radio');

const prevBtn = document.querySelector('#prev');
const nextBtn = document.querySelector('#next');


slides[num_of_slide].style.display = 'grid';
// slides[num_of_slide].style.opacity = 1;
// slides[num_of_slide].style.height = '100px';
 
prevBtn.addEventListener('click', changeSlide);
nextBtn.addEventListener('click', changeSlide);

function changeSlide(e) {
    console.log(Number(e.target.getAttribute('data')));
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


