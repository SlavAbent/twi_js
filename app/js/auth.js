const wrapper = document.querySelector('.wrapper'),
      login = document.querySelector('.login'),
      profileImgBlock = document.querySelector('.profile__imgBlock-a'),
      inputBtn = document.querySelector('.input__btn'),
      loginName = document.querySelector('#login__input-name'),
      loginPass = document.querySelector('#login__input-pass'),
      loginWrapper = document.querySelector('.login__wrapper');

inputBtn.addEventListener('click', checkAuth)  

function checkAuth(){
    
    wrapper.style.display = 'flex';
    login.style.display = 'none';
    lName = loginName.value;
    lPass = loginPass.value;
    profileImgBlock.textContent = lName
    if(lName == '' && lPass == '' || lName == '' || lPass == ''){
        wrapper.style.display = 'none';
        login.style.display = 'block';
        loginName.style.border = '1px solid red';
        loginPass.style.border = '1px solid red';

    }
}

function autorized() {
    authAccess()
    checkAuth()
}


function noAutorized(){
    wrapper.style.display = 'none';
    login.style.display = 'block';
    authAccess()
}

function authAccess(){
    if(auth){
        autorized()
    } else {
        noAutorized()
    }
}



