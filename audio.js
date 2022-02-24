
window.addEventListener("DOMContentLoaded", event => {
    const audio = document.getElementById("mus");
    const ja = document.getElementById("ui");
    let playing = false;
    audio.volume = 1.0;
    ja.addEventListener("click", () => {
      if (!playing) {
        audio.setAttribute("src", "Dialtone.mp3");
        audio.paused ? audio.play() : audio.pause();
        playing = true;
      }
    });
  });