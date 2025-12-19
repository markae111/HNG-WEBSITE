const roleRadio = document.querySelectorAll('input[name="role"]');
const internsField = document.getElementById('internsfield');
const mentorsField = document.getElementById('mentorsfield');
const form = document.querySelector('form')
const successMessage = document.getElementById('sucess-message')
const passwordError = document.getElementById('password-error');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirm-password');


roleRadio.forEach(radio => {
    radio.addEventListener('change', () => {
        internsField.classList.add('hidden');
        mentorsField.classList.add('hidden');

        if (radio.value === "intern") {
            internsField.classList.remove('hidden')
        }
        if (radio.value === "mentor") {
            mentorsField.classList.remove('hidden')
        }
    })
});

const eye = document.querySelector('.fa-eye-slash');
const passwordValue = document.querySelector('.password');

eye.addEventListener('click', ()=>{
    if(passwordValue.type === 'password'){
        passwordValue.type ='text'
        eye.classList.remove('fa-eye-slash')
        eye.classList.add('fa-eye') 
    }else{
        passwordValue.type = 'password'
        eye.classList.add('fa-eye-slash')
        eye.classList.remove('fa-eye')
    }
})



form.addEventListener('submit', (e)=>{
    const loader = document.getElementById('loader')
    e.preventDefault();
 
    
   
    passwordError.classList.add('hidden');
    
    if (password.value !== confirmPassword.value) {
        passwordError.classList.remove('hidden');
        return;
    }
    console.log(password)


    successMessage.classList.remove('hidden');

    loader.classList.remove('hidden')
    setTimeout(() => {

        window.location.href = 'index.html'
    }, 2000);

   
   









   
    // confirmPassword.addEventListener('input', ()=>{
    //     if (confirmPassword.value === '') {
    //         passwordError.classList.add('hidden');
    //         return;
    //     }

    //     if (password.value === confirmPassword.value) {
    //         passwordError.classList.add('hidden');
    //     }else{
    //         passwordError.classList.remove('hidden')
    //     }
    // })

   
   
})


