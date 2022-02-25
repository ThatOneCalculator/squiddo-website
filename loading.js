document.getElementById("loadingscreen").classList.remove("hidden")
window.addEventListener('load', onPageLoaded, false);
window.addEventListener("pageshow", onPageShown, false);
/* special event handler for ios Safari */
function onPageShown(evt) {
    // check if the page has been loaded from cache entirely
    if (evt.persisted) {
        // emulate the page loaded event
        onPageLoaded();
    }
}
function onPageLoaded() {
    document.getElementById("loadingscreen").classList.add("hidden");
}