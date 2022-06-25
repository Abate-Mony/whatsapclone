// $(document).ready(function() {
//   getting all dom elements here...........................................

window.addEventListener("resize", () => {
    if (window.innerWidth >= 772) {
        alert("not available for big devices for now thanks for understanoing")
    }
})
const chat_container = document.querySelector(".chats-container")

const users = [{
        name: "rosenhioh aasdhi9ufh iouadsyf9uyhy",
        profile: "./images/1.jpg",
    },
    {
        name: "bate",
        profile: "./images/2.jpg",
    },
    {
        name: "bro 🎁",
        profile: "./statusimg/2.jpg",
    },
    {
        name: "mama",
        profile: "./images/3.jpg",
    },
    {
        name: "Dwanye",
        profile: "./images/cherries.jpg",
    },
    {
        name: "Roland 😛",
        profile: "./images/popsicle.jpg",
    },
    {
        name: "GUy same",
        profile: "./images/salmon.jpg",
    },
    {
        name: "Paul",
        profile: "./images/sandwich.jpg",
    },
    {
        name: "Sandrine",
        profile: "./images/wine.jpg",
    },
    {
        name: "LOML",
        profile: "./images/workshop.jpg",
    }
]
const whatsap_logo = document.querySelector(".whatsapp"); //
const chats_ui = document.querySelector(".chats-ui")
const front_page = document.querySelector(".front-page")
const innerchats = document.querySelector(".innerchats")
const back_btn = document.querySelector(".back-btn")
const chat_page = document.querySelector(".chat-page")
const status_container = document.querySelector(".status-container")
const status_ = document.querySelector(".status-display-container")
    // const header
    // end..............................................................................
window.addEventListener("scroll", () => {
    hideprofilemodal()
    const window_offsetTop = window.pageYOffset;
    if (window_offsetTop >= whatsap_logo.getBoundingClientRect().height) {
        chats_ui.classList.add("position-fixed")
        chats_ui.classList.add("top-0")
    }
    if (window_offsetTop < whatsap_logo.getBoundingClientRect().height) {
        chats_ui.classList.remove("position-fixed")
        chats_ui.classList.remove("top-0")
    }
})

back_btn.onclick = function() {
    front_page.classList.remove("display-none")
    innerchats.classList.remove("display-block")
}
Object.values(chats_ui.children).forEach(head => {
    head.addEventListener("click", () => {
        Object.values(chats_ui.children).forEach(head => {
            if (head.classList.contains("head-chats")) {
                head.classList.remove("head-chats")
            }
        })
        head.classList.add("head-chats")
        if (head.textContent.trim() == "status") {
            chat_page.classList.add("display-none")
            status_container.classList.add("display-block")
        }
        if (head.textContent.trim() == "chats") {
            chat_page.classList.remove("display-none")
            status_container.classList.remove("display-block")
        }

    })
})

// });