window.addEventListener("DOMContentLoaded", event => {
    const typeText = document.querySelector(".typeText")
    let textToBeTyped = "* HEY [[EVERY!!]]\n* IT'S ME, [TheRealSquiddo] WITH SOME SPECIL DEALS!!"
    if (screen.width >= 640) {
        textToBeTyped += "\n* DON;T FORGET TO [L<IKE AND SUSCRIBE!!]"
    }
    let index = 0, isAdding = true

    function playAnim() {
        setTimeout((function () {
            typeText.innerText = textToBeTyped.slice(0, index)
            if (isAdding) {
                if (index > textToBeTyped.length) {
                    isAdding = false
                    setTimeout((function () {
                        playAnim()
                    }), 2000)
                    return
                } else {
                    index++
                }
            }
            playAnim()
        }), 50)
    }
    playAnim()
    const audio = document.getElementById("mus");
    const ja = document.getElementById("ui");
    let playing = false;
    audio.volume = 1.0;
    ja.addEventListener("click", () => {
      if (!playing) {
        audio.setAttribute("src", "assets/Dialtone.mp3");
        audio.paused ? audio.play() : audio.pause();
        playing = true;
      }
    });
    const heart = document.getElementById("heart");
    const sfx = document.getElementById("sfx");
    let heartIndex = 0;
    function checkKey(e) {
        e = e || window.event;
        if (e.which == 38) {
            if (heartIndex > 0) {
                heartIndex--;
                let heartStyle = window.getComputedStyle(heart);
                let topValue = heartStyle.getPropertyValue("top").replace("px", "");
                heart.style.top = (Number(topValue) - 50) + "px";
            }
            sfx.setAttribute("src", "assets/Select.wav");
            sfx.paused ? sfx.play() : sfx.play();
        }
        else if (e.which == 40) {
            sfx.setAttribute("src", "assets/Select.wav");
            sfx.paused ? sfx.play() : sfx.play();
            if (heartIndex < 3 && heartIndex >= 0) {
                heartIndex++;
                let heartStyle = window.getComputedStyle(heart);
                let topValue = heartStyle.getPropertyValue("top").replace("px", "");
                heart.style.top = (Number(topValue) + 50) + "px";
            }
        }
        else if (e.which == 13 || e.which == 90) {
            sfx.setAttribute("src", "assets/Select.wav");
            sfx.paused ? sfx.play() : sfx.play();
            console.log(heartIndex)
            if (heartIndex == 0) {
                window.location.href = "http://youtube.com/c/squiddo";
            }
            else if (heartIndex == 1) {
                window.location.href = "http://discord.gg/squiddo";
            }
            else if (heartIndex == 2) {
                window.location.href = "http://twitter.com/therealsquiddo";
            }
            else if (heartIndex == 3) {
                window.location.href = "https://namemc.com/server/mc.squiddo.xyz";
            }
        }
    }
    document.onkeydown = checkKey;
});
