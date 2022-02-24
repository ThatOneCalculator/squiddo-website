
window.addEventListener("DOMContentLoaded", event => {
    const audio = document.getElementById("mus");
    const ja = document.getElementById("ui");
    audio.volume = 1.0;
    ja.addEventListener("click", () => {
      audio.setAttribute("src", "Dialtone.mp3");
      audio.paused ? audio.play() : audio.pause();
    });
  });