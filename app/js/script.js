const loginName = document.querySelector('#login__input-name'),
      pass = document.querySelector('#login__input-pass'),
      userName = document.querySelector('.profile__imgBlock-a'),
      loginPage = document.querySelector('.login'),
      mainPage = document.querySelector('.wrapper'),
      inputBtn = document.querySelector('.input__btn'),
      logo = document.querySelector('.leftside__link-a'),
      iconAuth = document.querySelector('.tweets__icon-login'),
      modalProfileBtn = document.querySelector('.leftside__modal_tweet'),
      modalProfile = document.querySelector('.modal__profile'),
      closedModal = document.querySelector('.closed__modal'),
      overlayModal = document.querySelector('.overlay__profile'),
      profileName = document.querySelector('.modal__input--named'),
      profilePass = document.querySelector('.modal__input--password'),
      profileNickname = document.querySelector('.modal__input--nickname'),
      profileListName = document.querySelector('.modal__profile--name'),
      profileListPass = document.querySelector('.modal__profile--pass'),
      profileListNickname = document.querySelector('.modal__profile--nickname')

      let login = ''


      
function autorized() {
    console.log('ВЫ авторизованы!');
    userName.textContent = loginName.value
    loginPage.style.display = 'none'
    mainPage.style.display = 'flex'
}


function notAutorized(){
    console.log('ВЫ не авторизованы!');
    alert('ВЫ не авторизованы!')
    loginPage.style.display = 'block'
    mainPage.style.display = 'none'
}

function checkAuth(){
    if(loginName.value === '' && pass.value === '' || loginName.value === '' || pass.value === ''){
        loginPage.style.display = 'block'
        mainPage.style.display = 'none'
        loginName.style.border = '1px solid red'
        pass.style.border = '1px solid red'
        notAutorized()
    }  else {
        autorized()
    }
}
inputBtn.addEventListener('click', checkAuth)
logo.addEventListener('click', () => {
    loginPage.style.display = 'block'
    mainPage.style.display = 'none'
    loginName.value = ''
    pass.value = ''
})
iconAuth.addEventListener('click', () => {
    let setImageProfile = prompt('Введите url вашего изображения .jpg')
})

function modalsElem() {
    function openProfile(){
        modalProfileBtn.addEventListener('click', () => {
            modalProfile.classList.add('modal__active')
        })
    }
    function closeProfile(){
        closedModal.addEventListener('click', () => {
            modalProfile.classList.remove('modal__active')
        })
        overlayModal.addEventListener('click', (e) => {
            const target = e.target
            if(target == overlayModal){
                modalProfile.classList.remove('modal__active')
            }
        })
    }
    openProfile()
    closeProfile()
}
modalsElem() 