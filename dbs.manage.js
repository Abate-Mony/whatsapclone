const random_text_api = `the main 😍 reason for the breakup was that 🤣 the father and the son are thesame and 😎 the game who came one tow 3    ☺ 😊 😍
`
display_users(users, chat_container)

function display_users(all_users, box) {
    box.innerHTML = all_users.map((chat, index) => {
        const message_count = Math.floor(Math.random() * 8)
        const message = random_text_api.split(" ").sort(() => 0.5 - Math.random()).slice(0, 7).join(" ") + "..."
        return `<div class=" row my-0 ps-2 py-1 my-1"  >
        <div class="col-2 py-1">
            <img src=${chat.profile} alt="no " id=${"img"+chat.id}  class="rounded-circle chat-img" style="height:45px;width:45px">
        </div>
        <div class="col-10 chat_" id=${chat.id}>
                <div class="d-flex  justify-content-between align-items-center">
                    <h2 class=" m-0  overflow-hidden " style="font-size:1.2rem ">${chat.name.length>10?chat.name.slice(0,9)+"...":chat.name}</h2>
                    <div class=" px-3 py-0" style="color: ${message_count?"rgb(7, 94, 84)":'gray'}" ;width:fit-content">${chat.time}</div>
    
                </div>
                <div class="d-flex  justify-content-between align-items-center m-0  p-0 ">
                    <p class=" m-0 ps-1 " style="color: gray;font-weight: 00;">${message}</p>
                    <div class="text-white d-flex  justify-content-center align-items-center  py-0 me-3 rounded-circle ${message_count?"d-block":'d-none'}" style="font-size:0.3rem;color: rgb(7, 94, 84);width:20px;height:20px;background-color: rgb(7, 94, 84); font-size: 0.8rem;">
                    ${message_count}
                    </div>
                </div>
        </div>
    </div>
    `
    }).join("")
    const chat_ = document.querySelectorAll(".chat_")

    chat_.forEach((chat, index) => {
        chat.addEventListener("click", (e) => {
            ismodal_on = !modal_porfile.classList.contains("display-none")
            if (!ismodal_on) {
                front_page.classList.add("display-none")
                innerchats.classList.add("display-block")
                const id = chat.id
                head_img.src = users[id].profile;
                header_name.textContent = users[id].name.length > 8 ? users[id].name.slice(0, 8) + "..." : users[id].name
                global_name = users[id].name.length > 8 ? users[id].name.slice(0, 8) + "..." : users[id].name

            } else {
                modal_porfile.classList.toggle("display-none")
            }
            e.stopPropagation()
        })
    })
}