const typeText = document.querySelector(".typeText")
const textToBeTyped = "* HEY [[EVERY!!]]\n* IT'S ME, [TheRealSquiddo] WITH SOME SPECIL DEALS!!\n* DON;T FORGET TO [L<IKE AND SUSCRIBE!!]"
let index = 0, isAdding = true

function playAnim() {
  setTimeout(function () {
    typeText.innerText = textToBeTyped.slice(0, index)
    if (isAdding) {
      if (index > textToBeTyped.length) {
        isAdding = false
        setTimeout(function () {
          playAnim()
        }, 2000)
        return
      } else {
        index++
      }
    }
    playAnim()
  }, 50)
}
playAnim()