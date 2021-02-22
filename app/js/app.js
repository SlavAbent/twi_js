
const modalElems = (modalBtn, modalWrapper, closeModal, overlayModal, ) => {
    const modalButton = document.querySelector(modalBtn),
            modal = document.querySelector(modalWrapper),
            close = document.querySelector(closeModal),
            overlay = document.querySelector(overlayModal);
            // tweetSub = document.querySelector(tweetModalBtn);
            

    modalButton.addEventListener('click', () => {
        modal.classList.add('modal__active')
        
    });

    
    close.addEventListener('click', () => {
        modal.classList.remove('modal__active')
    });

    modal.addEventListener('click', e => {
        const target = e.target;
        if(target === overlay){
            modal.classList.remove('modal__active')
        }
    });

    // tweetSub.addEventListener('click', () => {
    //     modal.classList.remove('modal__active')
    // });
}

modalElems('.leftside__modal_tweet', '.modal__tweets', '.close__modal', '.overlay__tweets', '.tweets__sub');
modalElems('.profile__imgBlock', '.modal__profile', '.close__modal', '.overlay__profile');


