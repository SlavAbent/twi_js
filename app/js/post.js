const cardWrapper = document.querySelector('.mainside__tweeter');

const createCard = () => {
    const card = `
        <div class="mainside__tweeter-tweet">
            <div class="tweet__info-head">
                <div class="tweet__logo">
                    <img src="images/dest/slava.jpg" class="tweet__logo-img" alt="logo">
                </div>
                <div class="tweet__info">
                    <div class="tweet__info-block">
                        <p class="tweet__info-nickname">адрес</p>
                        <p class="tweet__info-adress">@адрес</p>
                        <p class="tweet__info-time">время</p>
                    </div>
                    <div class="tweet__info-settings">&#10033;</div>
                </div>
            </div>
            <div class="tweet__info-body">
                <p class="tweet__info-p">Заголовок</p>
                <img src="images/dest/post.jpg" class="tweet__info-img" alt="">
            </div>
            <div class="tweet__info-footer">
                <div class="tweet__info-footer-comments">
                    <svg viewBox="0 0 24 24" class="tweet__comments-img"><g><path d="M14.046 2.242l-4.148-.01h-.002c-4.374 0-7.8 3.427-7.8 7.802 0 4.098 3.186 7.206 7.465 7.37v3.828c0 .108.044.286.12.403.142.225.384.347.632.347.138 0 .277-.038.402-.118.264-.168 6.473-4.14 8.088-5.506 1.902-1.61 3.04-3.97 3.043-6.312v-.017c-.006-4.367-3.43-7.787-7.8-7.788zm3.787 12.972c-1.134.96-4.862 3.405-6.772 4.643V16.67c0-.414-.335-.75-.75-.75h-.396c-3.66 0-6.318-2.476-6.318-5.886 0-3.534 2.768-6.302 6.3-6.302l4.147.01h.002c3.532 0 6.3 2.766 6.302 6.296-.003 1.91-.942 3.844-2.514 5.176z"></path></g></svg>
                    <p class="tweet__comments-cnt"></p>
                </div>
                <div class="tweet__info-footer-likes">
                    <svg viewBox="0 0 24 24" class="tweet__likes-img"><g><path d="M12 21.638h-.014C9.403 21.59 1.95 14.856 1.95 8.478c0-3.064 2.525-5.754 5.403-5.754 2.29 0 3.83 1.58 4.646 2.73.814-1.148 2.354-2.73 4.645-2.73 2.88 0 5.404 2.69 5.404 5.755 0 6.376-7.454 13.11-10.037 13.157H12zM7.354 4.225c-2.08 0-3.903 1.988-3.903 4.255 0 5.74 7.034 11.596 8.55 11.658 1.518-.062 8.55-5.917 8.55-11.658 0-2.267-1.823-4.255-3.903-4.255-2.528 0-3.94 2.936-3.952 2.965-.23.562-1.156.562-1.387 0-.014-.03-1.425-2.965-3.954-2.965z"></path></g></svg>
                    <p class="tweet__likes-cnt"></p>
                </div>
            </div>
        </div>
    `;


    cardWrapper.insertAdjacentHTML('beforeend', card)
}

createCard();