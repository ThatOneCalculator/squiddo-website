
window.addEventListener("DOMContentLoaded", event => {
    const heart = document.getElementById("heart");
    const audio = document.getElementById("sfx");
    let heartIndex = 0;
    function checkKey(e) {
        console.log(heartIndex)
        e = e || window.event;
        console.log(e.which)
        if (e.which == 38) {
            if (heartIndex > 0) {
                heartIndex--;
                let heartStyle = window.getComputedStyle(heart);
                let topValue = heartStyle.getPropertyValue("top").replace("px", "");
                heart.style.top = (Number(topValue) - 50) + "px";
            }
            audio.setAttribute("src", "Select.wav");
            audio.paused ? audio.play() : audio.play();
        }
        else if (e.which == 40) {
            audio.setAttribute("src", "Select.wav");
            audio.paused ? audio.play() : audio.play();
            if (heartIndex < 3 && heartIndex >= 0) {
                heartIndex++;
                let heartStyle = window.getComputedStyle(heart);
                let topValue = heartStyle.getPropertyValue("top").replace("px", "");
                heart.style.top = (Number(topValue) + 50) + "px";
            }
        }
        else if (e.which == 13 || e.which == 90) {
            audio.setAttribute("src", "Select.wav");
            audio.paused ? audio.play() : audio.play();
        }
    }
    document.onkeydown = checkKey;
});