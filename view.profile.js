const modal_porfile = document.querySelector(".modal-view-profile")
const chat_img = document.querySelectorAll(".chat-img")
const modal_name = document.querySelector(".modal-name")
chat_img.forEach((chatImg, index) => {
    chatImg.addEventListener("click", () => {
        modal_porfile.classList.remove("display-none")
        modal_porfile.children[0].textContent = users[index].name.length > 8 ? users[index].name.slice(0, 8) + "..." : users[index].name
        modal_porfile.children[1].src = users[index].profile
            // setTimeout(() => {
            //     modal_porfile.classList.add("display-none")
            // }, 5000);
    })
})
window.addEventListener("click", () => {
    if (!modal_porfile.classList.contains("display_none")) {
        modal_porfile.classList.add("display-none")
    }
}, true)