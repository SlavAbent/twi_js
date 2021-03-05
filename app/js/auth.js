// const wrapper = document.querySelector('.wrapper'),
//       login = document.querySelector('.login'),
//       profileImgBlock = document.querySelector('.profile__imgBlock-a'),
//       inputBtn = document.querySelector('.input__btn'),
//       loginName = document.querySelector('#login__input-name'),
//       loginPass = document.querySelector('#login__input-pass'),
//       loginWrapper = document.querySelector('.login__wrapper'),
//       profilesName = document.querySelector('.modal__input--named'),
//       profilesPass = document.querySelector('.modal__input--password'),
//       profileNickname = document.querySelector('.modal__input--nickname'),
//       profileInfoName = document.querySelector('.modal__profile--name'),
//       profileInfoPass = document.querySelector('.modal__profile--pass'),
//       tweetImgLogin = document.querySelector('.tweets__icon-login');

      
      
//       let parentImg = document.querySelector('.profile__imgBlock'),
//         profileImgBlockImg = document.querySelector('.profile__imgBlock-img'),
//         tweetsLogo = document.querySelector('.tweets__logo')

// inputBtn.addEventListener('click', checkAuth)  

// function checkAuth(){
    
//     wrapper.style.display = 'flex';
//     login.style.display = 'none';
//     lName = loginName.value;
//     lPass = loginPass.value;
//     lNick = profileNickname.value


//     profileImgBlock.textContent = lName
//     profilesName.value = lName 
//     profilesPass.value = lPass
//     profileInfoName.textContent = `Ваше  имя: ${lName}`
//     profileInfoPass.textContent = `Ваш пароль: ${lPass}`

//     if(lName == '' && lPass == '' || lName == '' || lPass == ''){
//         wrapper.style.display = 'none';
//         login.style.display = 'block';
//         loginName.style.border = '1px solid red';
//         loginPass.style.border = '1px solid red';
//     }

    
// }

// function autorized() {
//     authAccess()
//     checkAuth()
// }


// function noAutorized(){
//     wrapper.style.display = 'none';
//     login.style.display = 'block';
//     authAccess()
// }

// function authAccess(){
//     if(auth){
//         autorized()
//     } else {
//         noAutorized()
//     }
// }

// imgLoginAuth = () => {
//     tweetImgLogin.addEventListener('click', () => {
//         const img = document.createElement('img')
//         img.classList.add('profile__imgBlock-img')
//         img.src = prompt('Введите адрес вашей картинки')
//         parentImg.appendChild(img)

//         const modalImg = document.createElement('img')
//         modalImg.classList.add('tweets__logo-img')
//         modalImg.src = img.src
//         tweetsLogo.appendChild(modalImg)
       
//     })
// }
// imgLoginAuth()