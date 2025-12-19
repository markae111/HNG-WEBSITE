import * as heads from './header.js';
import { getFooter } from './footer.js';

// putting the header on the page using the DOM
document.getElementById('header').innerHTML = heads.generatedHeader();

heads.mobileHeader()


// creating the objects for the various learning paths
const paths = [{
    image: '../../images/high-angle-designer-holding-smartphone 1.png',
    pathName: 'UI/UX',
    blog: ' Learn the principles of user-centred design, visual hierarchy, and prototyping. Develop skills in tools like Figma and gain an understanding of how design shapes user experience',
    aos: 'fade-right',
    delay: 0
    //aosDuration: 900 
}, {
    image: '../../images/programming-background-with-person-working-with-codes-computer 1.png',
    pathName: '../../images/💻 Frontend Development.png',
    blog: 'Learn the foundations of continuous integration, deployment, and automation.',
    aos: 'fade-right',
    delay: 100
}, {
    image: '../../images/image 6.png',
    pathName: '../../images/⚙️ Backend Development.png',
    blog: 'Learn to build secure, scalable applications while understanding how data and systems work behind the scenes.',
    aos: 'fade-right',
    delay: 200
}, {
    image: '../../images/high-angle-people-working-office 1 (1).png',
    pathName: '../../images/📱 Product Management.png',
    blog: 'Understand how to define product goals, manage roadmaps, and coordinate teams to bring tech ideas to market effectively.',
    aos: 'fade-right',
    delay: 300
}, {
    image: '../../images/image 5.png',
    pathName: '../../images/🧩 DevOps & Cloud.png',
    blog: 'Learn the foundations of continuous integration, deployment, and automation. Get familiar with tools that help developers ship better, faster, and more reliably.',
    aos: 'fade-right',
    delay: 400
}, {
    image: '../../images/it-professional-updating-ai-systems 1.png',
    pathName: '../../images/📊 Data Analysis.png',
    blog: 'Gain practical skills in data cleaning, visualization, and interpretation. Learn how to use data to make informed product and business decisions',
    aos: 'fade-right',
    delay: 500
}]

// AOS for animations

// this is generating the html
let pathHTML = ``;

paths.forEach((path) => {
  
    pathHTML +=
    `
        <section>
            <div class="path-box p-3 rounded-2xl shadow-[0_0_9px_-3px] shadow-gray-500 flex flex-col justify-between h-full" data-aos="${path.aos}">
                <div class="mb-5">
                    <img src="${path.image}" alt="" class="border-4 border-sky-600 rounded-xl">
                </div>
                <div>
                    <h1><img src="${path.pathName}" alt=""></h1>
                    <p class="text-gray-500 mb-8 grow dark:text-gray-300">
                       ${path.blog}
                    </p>
                    <a href="#" class="learn-more border-2 dark:border-white rounded-sm p-[2px_3rem] grid text-center dark:text-gray-300 hover:scale-102">Learn more</a>
                </div>
            </div>
 
        </section>

    `
    setTimeout(()=>{
        AOS.refreshHard();
    }, 100)
    getFooter()
})

document.querySelector('.path-container').innerHTML = pathHTML;
document.querySelectorAll('.learn-more').forEach((learmmore)=>{
    learmmore.addEventListener('click', () => {
        alert('OOPS!!')
    })
})


