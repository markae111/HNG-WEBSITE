export function generatedHeader() {
    return `
        <header class="header flex justify-between  items-center p-4 md:p-[5px_15px] shadow-2xl z-50 ">
            <div class="logo">
                <img src="../images/secondaryLogo 1 (1).png" alt="logo">
            </div>
             
            <nav id="mobile-menu" class="md:flex justify-evenly md:items-center  w-full md:w-auto absolute md:relative top-14 md:top-0 gap-2 left-0 flex-col md:flex-row z-50 text-center shadow-2xl bg-white sm:bg-transparent rounded-[0_0_.6rem_.6rem] max-h-0 overflow-hidden transition-[max-height] md:max-h-none duration-300 ease-in-out ">
              
                <ul class="flex flex-col md:flex-row gap-7 justify-between font-semibold p-4 sm:bg-transparent">
                    <li>
                        <a href="index.html" class="nav-home hover:text-sky-600">Home</a>
                    </li>
                    <li>
                        <a href="#about" class="hover:text-sky-600 ">About</a>
                    </li>
                    <li>
                        <a href="courses.html" class="hover:text-sky-600  ">Courses</a>
                    </li>
                    <li>
                        <a href="testimonial.html" class="hover:text-sky-600  ">Testimonials</a>
                    </li>
                    <div class="md:hidden">
                        <a href="startnow.html" class="bg-sky-500 p-1 text-white rounded-sm shadow-sm shadow-sky-600">Join Now</a>
                    </div>
                </ul>               
            </nav>      

            <div class="flex items-center gap-4">
                <div id="dark-btn" class="md:flex items-center justify-between gap-3  ">
                  <i id="dark-icon" class="fa-solid fa-moon text-sky-900 text-2xl"></i>
                  <a href="startnow.html" class="hidden md:block bg-sky-500 p-1 text-white rounded-sm shadow-sm shadow-sky-600">Join Now</a>
                </div>
                
                <div id="menu-toggle" class="block md:hidden z-9999">
                    <i id="menu-icon" class="fa-solid fa-bars text-sky-900 text-2xl"></i>
                </div>
            </div>
            </div>
        </header>
    `;
}

export function mobileHeader(){
    const menuButton = document.getElementById('menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    const menuIcon = document.getElementById('menu-icon');
    const html = document.querySelector('.dark')
    const darkBtn = document.getElementById('dark-btn')
    const darkIcon = document.getElementById('dark-icon')
    

    // cecking if both elements exist before using them
    menuButton.addEventListener('click', () => {

        menuIcon.classList.toggle('fa-bars')
        menuIcon.classList.toggle('fa-xmark')

        mobileMenu.classList.toggle('max-h-0');
        mobileMenu.classList.toggle('max-h-[500px]');


    });


    
    // darkBtn.addEventListener('click', () => {
    //     const html = document.documentElement;
    //     if(html.classList.contains('dark')){
    //         html.classList.remove('dark');
    //         localStorage.setItem('color-mode', 'light');
    //     }else{
    //         html.classList.add('dark');
    //         localStorage.setItem('color-mode', 'light');
    //     }


       
    // })
    if(darkBtn){
        darkBtn.addEventListener('click', ()=>{
            darkIcon.classList.toggle('fa-moon')
            darkIcon.classList.toggle('fa-sun')

            const isDark = document.documentElement.classList.toggle('dark');
            localStorage.setItem('theme', isDark ? 'dark' : 'light');
        })
    }

   

}




 