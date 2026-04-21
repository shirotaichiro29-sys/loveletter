function openLetter() {
    const letter = document.getElementById("letter");
    const sound = document.getElementById("laughSound");

    letter.classList.add("show");
    sound.play();

    for (let i = 0; i < 30; i++) {
        let confetti = document.createElement("div");
        confetti.classList.add("confetti");

        confetti.style.left = Math.random() * 100 + "vw";
        confetti.style.backgroundColor =
            "hsl(" + Math.random() * 360 + ", 100%, 50%)";
        confetti.style.animationDuration =
            (Math.random() * 2 + 2) + "s";

        document.body.appendChild(confetti);

        setTimeout(() => confetti.remove(), 3000);
    }
}
