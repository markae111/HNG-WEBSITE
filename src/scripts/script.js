import * as heads from "./header.js";
import { getFooter } from "./footer.js";


document.querySelector('.header').innerHTML = heads.generatedHeader();
// generating the mobile nav view
heads.mobileHeader()

AOS.init({
    duration: 1000,
    delay: 0,
    once: true,
    mirror: true
})
// gettting the footer from fotter.js and putting it on the web page
document.querySelector('.footer').innerHTML = getFooter();


 
const readMoreBtn = document.querySelectorAll('.read-more-btn');


readMoreBtn.forEach((button) => {
    button.addEventListener('click', () => {
        const parent = button.parentElement;
        const moreContent = parent.querySelector('.moreContent')

        moreContent.classList.toggle('hidden');

        button.textContent = moreContent.classList.contains('hidden') ? 'Read-More' : 'Read-Less';
         
    })
})
