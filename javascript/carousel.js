/*const slider = document.querySelector("#sliderContainer");
let sliderSection = document.querySelectorAll(".slidersec");
let sliderSectionLast = sliderSection[sliderSection.length -1];

const btnLeft = document.querySelector("#prevBtn");
const btnRight = document.querySelector("#nextBtn");

slider.insertAdjacentElement('afterbegin', sliderSectionLast);

function Next() {
    let sliderSectionFirst = document.querySelectorAll(".slider__section")[0];
    slider.style.marginLeft = "-200%";
    slider.style.transition = "all 0.5s";
    setTimeout(function(){
        slider.style.transition = "none";
        slider.insertAdjacentElement('beforeend', sliderSectionFirst);
        slider.style.marginLeft = "-100%";
    }, 500);
}

function Prev() {
    let sliderSection = document.querySelectorAll(".slider__section");
    let sliderSectionLast = sliderSection[sliderSection.length -1];
    slider.style.marginLeft = "0%";
    slider.style.transition = "all 0.5s";
    setTimeout(function(){
        slider.style.transition = "none";
        slider.insertAdjacentElement('afterbegin', sliderSectionLast);
        slider.style.marginLeft = "-100%";
    }, 500);
}

btnRight.addEventListener('click', function(){
    Next();
});

btnLeft.addEventListener('click', function(){
    Prev();
});*/


//--------------------------------------------------------------------------------------------------------------------
const carouselSlide = document.querySelector('.carousel-slide');
const carouselImages = document.querySelectorAll('.carousel-slide img');

//Buttons
const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');

//Counter
let counter = 1;
const size = carouselImages[0].clientWidth;

carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

//Button Listeners
nextBtn.addEventListener('click',()=>{
    if(counter >= carouselImages.length -1) return;
    carouselSlide.style.transition = "transform 0.4s ease-in-out";
    counter++;
    //console.log(counter);
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
});

prevBtn.addEventListener('click',()=>{
    if(counter <= 0) return;
    carouselSlide.style.transition = "transform 0.4s ease-in-out";
    counter--;
    //console.log(counter);
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
});

carouselSlide.addEventListener('transitionend', ()=>{
    if(carouselImages[counter].id === 'lastClone'){
        carouselSlide.style.transition = "none";
        counter = carouselImages.length - 2;
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }
    if(carouselImages[counter].id === 'firstClone'){
        carouselSlide.style.transition = "none";
        counter = carouselImages.length - counter;
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }
});

//--------------------------------------------OTRO CAROUSEL------------------------------------------------------
/*const carouselSlide2 = document.querySelector('.carousel-slide');
const carouselImages = document.querySelectorAll('.carousel-slide img');

//Buttons
const prevBtn2 = document.querySelector('#prevBtn');
const nextBtn2 = document.querySelector('#nextBtn');

//Counter
let counter = 1;
const size = carouselImages[0].clientWidth;

carouselSlide2.style.transform = 'translateX(' + (-size * counter) + 'px)';

//Button Listeners
nextBtn2.addEventListener('click',()=>{
    if(counter >= carouselImages.length -1) return;
    carouselSlide2.style.transition = "transform 0.4s ease-in-out";
    counter++;
    //console.log(counter);
    carouselSlide2.style.transform = 'translateX(' + (-size * counter) + 'px)';
});

prevBtn2.addEventListener('click',()=>{
    if(counter <= 0) return;
    carouselSlide2.style.transition = "transform 0.4s ease-in-out";
    counter--;
    //console.log(counter);
    carouselSlide2.style.transform = 'translateX(' + (-size * counter) + 'px)';
});

carouselSlide2.addEventListener('transitionend', ()=>{
    if(carouselImages[counter].id === 'lastClone2'){
        carouselSlide2.style.transition = "none";
        counter = carouselImages.length - 2;
        carouselSlide2.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }
    if(carouselImages[counter].id === 'firstClone2'){
        carouselSlide2.style.transition = "none";
        counter = carouselImages.length - counter;
        carouselSlide2.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }
});*/