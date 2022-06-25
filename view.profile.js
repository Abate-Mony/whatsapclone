const modal_porfile = document.querySelector(".modal-view-profile")
const chat_img = document.querySelectorAll(".chat-img")
const modal_name = document.querySelector(".modal-name")
    // var interval = 3000
    // var bool = false
const body = document.body

body.addEventListener("click", (e) => {
    const xoffset = modal_porfile.offsetLeft
    const yoffset = modal_porfile.offsetTop
    if ((e.clientX < xoffset || e.clientX > (xoffset + modal_porfile.getBoundingClientRect().width)) ||
        (e.clientY < yoffset || e.clientY > (yoffset + modal_porfile.getBoundingClientRect().height))) {
        hideprofilemodal()
    }
}, true)
chat_img.forEach((chatImg, index) => {
    chatImg.addEventListener("click", () => {

        if (modal_porfile.classList.contains("animate-end")) {
            modal_porfile.classList.remove("animate-end")
        }
        modal_porfile.style.marginTop = `${chatImg.offsetTop-(modal_porfile.getBoundingClientRect().height)}px`
        modal_porfile.classList.remove("display-none")
        modal_porfile.children[0].textContent = users[index].name.length > 8 ? users[index].name.slice(0, 8) + "..." : users[index].name
        modal_porfile.children[1].src = users[index].profile

    })
}, true)

function hideprofilemodal() {
    if (!modal_porfile.classList.contains("display-none")) {
        // modal_porfile.classList.add("animate-end")
        // setTimeout(() => {
        // modal_porfile.classList.remove("animate-end")
        modal_porfile.classList.add("display-none")
            // }, 1000)
    }
}
// do it the hard way 😎



modal_porfile.children[1].addEventListener("click", function() {
    modal_porfile.classList.add("w-100", "p-0", "m-0")
    modal_porfile.children[1].style.height = "100vh"
    setTimeout(() => {
        modal_porfile.classList.remove("w-100", "m-0")
        modal_porfile.children[1].style.height = "40vh"
        modal_porfile.style.marginLeft = "10%"
    }, 3000);
}, true)