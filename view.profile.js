const modal_porfile = document.querySelector(".modal-view-profile")
const chat_img = document.querySelectorAll(".chat-img")
const modal_name = document.querySelector(".modal-name")
const body = document.body

body.addEventListener("click", (e) => {
    hideprofilemodal()
})
show_profile_pic(chat_img)

function show_profile_pic(all_profile) {
    all_profile.forEach((chatImg, index) => {
        chatImg.addEventListener("click", (e) => {
            if (index >= users.length) {
                index = index - users.length
            }
            if (modal_porfile.classList.contains("display-none")) {
                modal_porfile.classList.remove("display-none")
            } else {
                modal_porfile.classList.add("display-none")
            }
            // if (modal_porfile.classList.contains("animate-back")) {
            //     modal_porfile.classList.remove("animate-back")
            //     modal_porfile.classList.add("animate-start")
            // } else {
            //     // modal_porfile.style.marginTop = `${chatImg.offsetTop-(modal_porfile.getBoundingClientRect().height)}px`
            //     modal_porfile.classList.add("animate-back")
            //     modal_porfile.classList.remove("animate-start")
            // }
            const id = chatImg.id.slice(3)
            modal_porfile.style.marginTop = `${chatImg.offsetTop-(modal_porfile.getBoundingClientRect().height)}px`
            modal_porfile.children[0].textContent = users[id].name.length > 8 ? users[id].name.slice(0, 8) + "..." : users[id].name
            modal_porfile.children[1].src = users[id].profile
            $(".msg-box").click(function(e) {
                front_page.classList.add("display-none")
                innerchats.classList.add("display-block")
                modal_porfile.classList.add("display-none")
                call_container.classList.add("d-none")
                head_img.src = users[id].profile;
                header_name.textContent = users[id].name.length > 8 ? users[id].name.slice(0, 8) + "..." : users[id].name
                global_name = users[id].name.length > 8 ? users[id].name.slice(0, 8) + "..." : users[id].name
                e.stopPropagation()
            })
            e.stopPropagation()
        })
    })
}

function hideprofilemodal() {
    if (!modal_porfile.classList.contains("display-none")) {
        modal_porfile.classList.add("display-none")
    }
}


modal_porfile.children[1].addEventListener("click", function(e) {
    modal_porfile.classList.add("w-100", "p-0", "m-0")
    modal_porfile.children[1].style.height = "100vh"
    setTimeout(() => {
        modal_porfile.classList.remove("w-100", "m-0")
        modal_porfile.children[1].style.height = "40vh"
        modal_porfile.style.marginLeft = "10%"
    }, 3000);
    e.stopPropagation()
})