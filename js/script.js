let button = document.querySelector(".js-button");
let photo = document.querySelector(".js-photo");

button.addEventListener("click", () => {
    photo.classList.toggle("hidden");
    if (photo.classList.contains("hidden")) {
        button.innerText = "Zmieniłeś zdanie? Kliknij ponownie";
    } else {
        button.innerText = "Znów jestem 😁";
    }
});
