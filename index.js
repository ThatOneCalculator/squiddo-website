document.onreadystatechange = function () {
    if (document.readyState !== "complete") {
        document.querySelector("body").style.visibility = "hidden";
        document.querySelector("#loader").style.visibility = "visible";
    } else {
        document.querySelector("#loader").style.display = "none";
        document.querySelector("body").style.visibility = "visible";
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
    }
};
