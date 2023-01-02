{
    const hidePhoto = () => {
        const photo = document.querySelector(".js-photo");
        const buttonText = document.querySelector(".js-buttonText");

        photo.classList.toggle("hidden");
        buttonText.innerText = photo.classList.contains("hidden") ? "Zmieniłeś znadnie kliknij ponownie" : "Nie chcesz na mnie patrzeć? Kliknij";
    }

    const init = () => {
        const button = document.querySelector(".js-button");

        button.addEventListener("click", hidePhoto);
    }

    init();
}