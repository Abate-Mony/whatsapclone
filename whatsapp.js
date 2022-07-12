// $(document).ready(function() {
//   getting all dom elements here...........................................

window.addEventListener("resize", () => {
    if (window.innerWidth >= 772) {
        alert("not available for big devices for now thanks for understanoing")
    }
})
const chat_container = document.querySelector(".chats-container")
var ismodal_on = false
const users = [{
        name: "rosenhioh aasdhi9ufh iouadsyf9uyhy",
        profile: "./images/1.jpg",
        time: "9:21",
        id: 0

    },
    {
        name: "bate",
        profile: "./images/2.jpg",
        time: "12:56",
        id: 1
    },

    {
        name: "bro 🎁",
        profile: "./statusimg/2.jpg",
        time: "01:16",
        id: 2

    },
    {
        name: "mama",
        profile: "./images/3.jpg",
        time: "2:56",
        id: 3
    },
    {
        name: "Dwanye",
        profile: "./images/cherries.jpg",
        time: "00:56",
        id: 4
    },
    {
        name: "Roland 😛",
        profile: "./images/popsicle.jpg",
        time: "7:36",
        id: 5
    },
    {
        name: "GUy same",
        profile: "./images/salmon.jpg",
        time: "3:36",
        id: 6
    },
    {
        name: "Paul",
        profile: "./images/sandwich.jpg",
        time: "10:06",
        id: 7
    },
    {
        name: "Sandrine",
        profile: "./images/wine.jpg",
        time: "9:26",
        id: 8
    },
    {
        name: "LOML",
        profile: "./images/workshop.jpg",
        time: "5:36",
        id: 9
    }
]
var oldValue = 0
var newValue = 0
const whatsap_logo = document.querySelector(".whatsapp"); //
const chats_ui = document.querySelector(".chats-ui")
const front_page = document.querySelector(".front-page")
const innerchats = document.querySelector(".innerchats")
const back_btn = document.querySelector(".back_btn")
const chat_page = document.querySelector(".chat-page")
const status_container = document.querySelector(".status-container")
const status_ = document.querySelector(".status-display-container")
const call_container = document.querySelector(".call-container")
const head_img = document.getElementById("head-img")
const header_name = document.getElementById("head-name")
var global_name = "global_name"
    // const header
    // end..............................................................................
    // setTimeout(() => {
    //     const source = document.createElement("script")
    //     source.src = './calls.js'
    //     document.body.appendChild(source)
    // }, 1000)

var call_details = ""
for (let i = 0; i < users.length - 2; ++i) {
    call_details += `
        <div class=" row my-0 ps-2 py-2 my-2 ">
        <div class="col-2 py-1">
        <img src=${users[i].profile} alt="no " id=${"img"+users[i].id}  class="rounded-circle chat-img" style="height:45px;width:45px">
        </div>
        <div class="col-10">
            <div class="row">
                <div class="col-8 ps-2 ">
                    <h2 class=" m-0  overflow-hidden" style="font-size:1.2rem"> ${users[i].name.length>10?users[i].name.slice(0,9)+"...":users[i].name}</h2>
                    <p class=" m-0 ps-1 " style="color: gray;font-weight: 00;">/ Today 18: 41</p>
                </div>
                <div class="col-4 m-0 " style="font-size:1.2rem">
                <a href="./callpage.html" class="text-decoration-none">
                <i class="fa fa-phone" style="font-size:20px;color:green"></i> 
            </a>
                    
                </div>
            </div>
        </div>
    </div>
    `

}
if (call_container) call_container.innerHTML += call_details
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
    newValue = window.pageYOffset
    if (oldValue < newValue) {} else if (oldValue > newValue) {
        chats_ui.classList.remove("position-fixed")
        chats_ui.classList.remove("top-0")
    }
    oldValue = newValue
})



if (back_btn) back_btn.addEventListener("click", function() {
    if (front_page.classList.contains("display-none") && call_container.classList.contains("d-none")) {
        call_container.classList.remove("d-none")
    }
    // if (call_container.classList.contains("d-none")) {
    //     front_page.classList.remove("display-none")
    //     innerchats.classList.remove("display-block")
    // }
    front_page.classList.remove("display-none")
    innerchats.classList.remove("display-block")

})
if (chats_ui) Object.values(chats_ui.children).forEach(head => {
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
                $(".message-btn").text("status");
            }
            if (head.textContent.trim() == "chats") {
                chat_page.classList.remove("display-none")
                status_container.classList.add("display-none")
                status_container.classList.remove("display-block")

                call_container.classList.add("d-none")
                $(".message-btn").text("chats");
            }
            if (head.textContent.trim() == "call") {
                chat_page.classList.add("display-none")
                chat_page.classList.remove("display-block")
                status_container.classList.add("display-none")
                status_container.classList.remove("display-block")

                call_container.classList.remove("d-none")
                console.log(" i was click here")
                $(".message-btn").text("call");
            }
            if (head.textContent.trim() == "cmr") {

                $(".message-btn").addClass("d-none");


                front_page.classList.add("display-none")
                status_container.classList.remove("display-block")
                document.querySelector(".cmr").classList.remove("display-none")
                setTimeout(() => {
                    $(".message-btn").removeClass("d-none");

                    chat_page.classList.remove("display-none")
                    front_page.classList.remove("display-none")
                    document.querySelector(".cmr").classList.add("display-none")
                    Object.values(chats_ui.children).forEach(head => {
                        if (head.classList.contains("head-chats")) {
                            head.classList.remove("head-chats")
                        }
                    })
                    Object.values(chats_ui.children)[1].classList.add("head-chats")
                }, 2000);
            }


        })
    })
    // });