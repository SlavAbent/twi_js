const profileName = document.querySelector('.modal__input--named'),
      profilePass = document.querySelector('.modal__input--password'),
      profileNick = document.querySelector('#modal__input--nickname'),
      textName = document.querySelector('.modal__profile--name'),
      textPass = document.querySelector('.modal__profile--pass'),
      img = document.querySelector('.profile__imgBlock'),
      modalProfile = document.querySelector('.modal__profile'),
      modalBtn = document.querySelector('.modal__button');

     let dogNick = document.querySelector('.profile__imgBlock-p'),
         textNick = document.querySelector('.modal__profile--nickname');



function getNickname(){
    dogNick.textContent = profileNick.value

    let nickNameDog = dogNick.textContent 
    '@ ' + nickNameDog
    console.log(typeof nickNameDog);
}



img.addEventListener('click', getNickname)



modalBtn.addEventListener('click', saveInfoProfile)

function saveInfoProfile() {
    if(modalProfile.classList.contains('modal__active')){
        modalProfile.classList.remove('modal__active')
    }
    getNickname();
}
