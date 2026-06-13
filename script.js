const character = document.querySelector(".character");
const loginBox = document.querySelector(".login-box");

function startAnimation() {
    loginBox.style.opacity = "0";

    character.style.left = "-100px";

    let position = -100;

    const walk = setInterval(() => {
        position += 2;
        character.style.left = position + "px";

        // Stop character and show form
        if (position >= 250) {
            clearInterval(walk);

            loginBox.style.transition = "0.8s";
            loginBox.style.opacity = "1";

            // Restart animation after 3 seconds
            setTimeout(startAnimation, 3000);
        }
    }, 20);
}

startAnimation();
