const topCard = document.querySelector('.top-card')
const topCardImg = document.querySelector('.top-card-img')
const submitBtn = document.querySelector('#submitBtn')
const btnSubmitText = document.querySelectorAll('.btn-submit-text')

const btnChangetoRegister = document.querySelector('#change-to-register')
const btnChangetoLogin = document.querySelector('#change-to-login')

btnChangetoRegister.addEventListener('click',()=>{

    topCard.classList.add('top-card-position-left')
    topCardImg.classList.add('top-card-img-position-left')
    submitBtn.classList.add('submit-button-rotation')

    setTimeout(()=>{
        btnSubmitText[0].classList.add('hide')
        btnSubmitText[1].classList.remove('hide')
    },250)

})

btnChangetoLogin.addEventListener('click',()=>{

    topCard.classList.remove('top-card-position-left')
    topCardImg.classList.remove('top-card-img-position-left')
    submitBtn.classList.remove('submit-button-rotation')

    setTimeout(()=>{
        btnSubmitText[0].classList.remove('hide')
        btnSubmitText[1].classList.add('hide')
    },250)

})