const audio = document.getElementById("audioFondo");
const btn = document.getElementById("btnAudio");
let playing = false;

btn.addEventListener("click", () => {
    if (!playing) {
        audio.play();
        playing = true;
        btn.textContent = "⏸️";
    } else {
        audio.pause();
        playing = false;
        btn.textContent = "🎵";
    }
});
