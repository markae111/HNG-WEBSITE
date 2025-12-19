import * as heads from './header.js';
import { getFooter } from './footer.js';

document.addEventListener('DOMContentLoaded', ()=>{
    // putting the header on the page using the DOM
    document.querySelector('.header').innerHTML = heads.generatedHeader();
    // document.querySelector('.nav-home').classList.add("text-white");
    heads.mobileHeader();
    document.querySelector('.footer').innerHTML = getFooter();
})


 
AOS.init({
    duration: 1000,
    delay: 0,
    once: true,
    mirror: true
})


// creating the image carousel
const container = document.querySelector('.testimonial-container')
const slides = document.querySelectorAll('.testimonial-box');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');


let currentIndex = 0; //current index for slide being shown

let autoPlay = setInterval(()=>{showSlide(currentIndex + 1)}, 3000);

//creating the swipper for mobile phones
let touchStartX = 0;
let touchEndX = 0;

function handleSwipe(){
    const difference = touchEndX - touchStartX;
    stopAutoPlay();
    if (difference > 50) { 
        showSlide(currentIndex - 1); //swiping right
    }
    if(difference < -50) {
        showSlide(currentIndex + 1); //swiping left
    }
}
container.addEventListener('touchstart', (e)=>{
    touchStartX = e.changedTouches[0].screenX
})
container.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX
    handleSwipe()
})

function showSlide(nextIndex){
    //hiding all current slides
    slides[currentIndex].classList.remove('block');
    slides[currentIndex].classList.add('hidden');

    //update index
    if(nextIndex < 0){
        currentIndex = slides.length - 1;
    } else if(nextIndex >= slides.length){
        currentIndex = 0;
    }else{
        currentIndex = nextIndex;
    };

    //showing the new slides
    slides[currentIndex].classList.remove('hidden');
    slides[currentIndex].classList.add('block');
}

function stopAutoPlay(){
    clearInterval(autoPlay)
}

nextBtn.addEventListener('click', () => {
    stopAutoPlay()
    showSlide(currentIndex + 1)
})


prevBtn.addEventListener('click', () => {
    stopAutoPlay()
    showSlide(currentIndex - 1)
})


/*function showSlide(index){
    // hide all slides
    slides.forEach((slide) =>{
        slide.classList.add('hidden');
        slide.classList.remove('block')
    });
    slides[index].classList.remove('hidden');
    slides[index].classList.add('block');
}

nextBtn.addEventListener('click', ()=>{
    currentIndex ++;
    if(currentIndex >= slides.length){
        currentIndex = 0;
    }
    showSlide(currentIndex)
})


prevBtn.addEventListener('click', () => {
    currentIndex--;

    if (currentIndex < 0) {
        currentIndex = slides.length - 1;
    }
    showSlide(currentIndex)
})

function autoplay() {
    currentIndex++;
    if (currentIndex >= slides.length) {
        currentIndex = 0;
    }
    showSlide(currentIndex)
}*/


