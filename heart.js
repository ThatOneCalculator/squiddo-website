
window.addEventListener("DOMContentLoaded", event => {
    const heart = document.getElementById("heart");
    const audio = document.getElementById("sfx");
    let heartIndex = 0;
    document.onkeydown = checkKey;
    function checkKey(e) {
        console.log(heartIndex)
        e = e || window.event;
        if (e.which == 38) {
            audio.setAttribute("src", "Select.wav");
            audio.paused ? audio.play() : audio.play();
            if (heartIndex > 0) {
                heartIndex--;
                let heartStyle = window.getComputedStyle(heart);
                let topValue = heartStyle.getPropertyValue("top").replace("px", "");
                heart.style.top = (Number(topValue) - 60) + "px";
            }
        }
        else if (e.which == 40) {
            audio.setAttribute("src", "Select.wav");
            audio.paused ? audio.play() : audio.play();
            if (heartIndex < 2) {
                heartIndex++;
                let heartStyle = window.getComputedStyle(heart);
                let topValue = heartStyle.getPropertyValue("top").replace("px", "");
                heart.style.top = (Number(topValue) + 60) + "px";
            }
        }
        else if (e.which == 13 || e.which == 90) {
            audio.setAttribute("src", "Select.wav");
            audio.paused ? audio.play() : audio.play();
        }
    }
});