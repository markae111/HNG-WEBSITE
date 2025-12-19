export function getFooter(){
    return `
        <div class="" data-aos="zoom-out-right">
            <div class="bg-[rgba(229,241,247,1)] dark:bg-gray-800 flex justify-between items-center p-4 xl:p-[0_6rem] m-[30px_0] dark:text-white">
                <div class="">
                    <h1 class= text-[30px] pb-4">Start Leaning With HNG Today!</h1>
                    <p class="mb-20">Choose A Trackof Your choice, Learn At Your Pace... Grow With Support From Mentors And Peers.</p>

                    <a href="startnow.html" class="bg-white dark:bg-gray-200  dark: text-gray-700 p-[5px_40px] rounded-sm shadow-[0_0_10px_rgba(12,171,232)]">Start Now</a>
                </div>

                <div data-aos="zoom-in-right" data-aos-duration="900">
                    <img src="src/images/unnamed-removebg-preview 1.png" alt="">
                </div>
            </div>
        </div>


        <footer class= "p-4 xl:p-[3rem_6rem] bg-[rgba(8,108,147,1)] text-white">
            <div class="flex justify-between flex-col lg:flex-row gap-8 mb-4 lg:mb-30 p-9">
                <div class="logo">
                    <img src="src/images/secondaryLogo 1 (1).png" alt="logo">
                </div>
                <div>
                    <p>Support</p>
                    <li class="transition hover:translate-x-1.5"><a href="#">Blog</a></li>
                    <li class="transition hover:translate-x-1.5"><a href="#">Help Center</a></li>
                    <li class="transition hover:translate-x-1.5"><a href="#">FAQs</a></li>
                    <li class="transition hover:translate-x-1.5"><a href="#">Support@hng.tech</a></li>
                </div>

                <div>
                    <h1>Social Media</h1>
                    <div class="">
                        <a href="#"><i class="fa-brands fa-facebook"></i></a>
                        <a href="#"><i class="fa-brands fa-x-twitter"></i></a>
                        <a href="#"><i class="fa-brands fa-linkedin"></i></a>
                        <a href="#"><i class="fa-brands fa-instagram"></i></a>
                    </div>
                </div>
            </div>

            <div>
                <p>&copy; 2025 HNG Tech Limited. All rights reserved.</p>
            </div>
        </footer>
    `
}
document.querySelector('.footer').innerHTML = getFooter();