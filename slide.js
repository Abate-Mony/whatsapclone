var dir = 0

function slide(page) {

    if (slide.trim().innrHTML == "chats") {

    }
}
var ismousedowm = false;

function detectslide(e) {
    if (e.type == "touchstart") {
        dir = e.touches[0].clientX
        console.log("touchstart")
    }
    if (e.type == "mousedown") {
        dir = e.clientX;
        console.log(dir)
    }
    if (e.type == "mousemove") {
        const diff = Math.abs(dir - e.clientX)
        if (diff >= (50)) {}
    }
    if (e.type == "touchmove") {
        console.log("touchmove")
        const diff = Math.abs(dir - e.touches[0].clientX)
        if (diff >= (50)) {
            console.log("yes")
        }
    }
    // console.log(dir)/
}
window.addEventListener("touchstart", e => {
    detectslide(e)
})

window.addEventListener("touchmove", e => {
    detectslide(e)
})