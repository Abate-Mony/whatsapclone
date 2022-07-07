const searchBar = document.getElementById("search-chat")

$("#search-btn").click(function(e) {
    $(".search-bar").removeClass("d-none");
    $(".chats-container").addClass("mt-4");
    // console.log("i was click and the code is ahahha")
    e.preventDefault();

});
$(".position-fixed .row .back-btn").click(function(e) {
    $(".search-bar").addClass("d-none");
    $(".chats-container").removeClass("mt-4");
    e.preventDefault();
});
if (searchBar)
    searchBar.addEventListener("input", () => {
        const value = searchBar.value
        if (value) {
            $(".media").hide()
        } else {
            $(".media").show()

        }
        // console.log(value)
        const search_users =
            users.filter(userDetails =>
                userDetails.name.toLocaleLowerCase().trim().includes(value.toLocaleLowerCase().trim()))

        if (search_users) {
            const tab = $(".message-btn").text();

            if (tab == "chats") {
                chat_container.innerHTML = search_users.map((chat, index) => {
                    const message_count = Math.floor(Math.random() * 8)
                    return `
                        <div class=" row my-0 ps-2 py-2 my-2">
                        <div class="col-2 py-1">
                            <img src=${chat.profile} alt="no " id=${index}   class="rounded-circle chat-img" style="height:40px;width:40px">
                        </div>
                       <div class="col-10 chat_">
                    
                    <div class="row">
                    <div class="col-8 ps-2 ">
                    <h2 class=" m-0  overflow-hidden" style="font-size:1.2rem">${chat.name.length>10?chat.name.slice(0,9)+"...":chat.name}</h2>
                    <p class=" m-0 ps-1 " style="color: gray;font-weight: 00;">call me later for here ❤</p>
                    </div>
                    <div class="col-4 m-0 ">
                    <div class=" px-3 py-0" style="color: rgb(7, 94, 84)">12:00</div>
                    <div style="background-color: rgb(7, 94, 84);height: 25px;width: 25px; font-size: 1rem;" class="p-0 d-flex justify-content-center align-items-center  m-auto text-center rounded-circle text-light p-1">
                    ${message_count?message_count:''}
                    </div>
                    </div>
                    </div>
                       </div>
                    </div>
                    `
                }).join("")
                const chat_ = document.querySelectorAll(".chat_")
                chat_.forEach((chat, index) => {
                    chat.addEventListener("click", () => {
                        $(".search-bar").addClass("d-none");
                        front_page.classList.add("display-none")
                        innerchats.classList.add("display-block")
                        head_img.src = document.getElementById(index).src;
                        header_name.textContent = users[index].name.length > 8 ? users[index].name.slice(0, 8) + "..." : users[index].name
                    })
                })
            }
            if (tab == "status") {
                status_container.innerHTML = search_users.map((status, index) => {
                    return `
                    <div class="row status-box py-2 px-2 my-1 ms-1" style="gap:10px">
                    <div class="col-2  p-0">
                        <img src=${status.profile} id=${status.name[0]+index} alt="no " class="mt-2 rounded-circle p-0" style="height:50px;width: 50px;border:4px solid green">
                
                </div>
                <div class="col-8 p-0 pt-2 m-0 ">
                    <div class="other-status-name fw-bolder" style="font-size:1rem;" >
                    ${status.name.length>10?status.name.slice(0,9)+"...":status.name}
                    </div>
                    <div class="status-time fw-bold" style="color: gray">
                        12:00
                    </div>
                </div>
                </div>
                `
                }).join("")
                const status_box = document.querySelectorAll(".status-box")
                    // const status_display_img = document.getElementById("status-display-img")
                status_box.forEach((box, index) => {
                    box.addEventListener("click", () => {
                        $(".search-bar").addClass("d-none");
                        front_page.classList.add("display-none")
                        status_.classList.remove("display-none")
                        status_container.classList.remove("display-block")
                        document.getElementById("status-img").src = (users[Math.floor(Math.random() * users.length - 1)].profile)
                        status_display_img.src = statusImg[Math.floor(Math.random() * statusImg.length)]
                        document.getElementById("status-name").textContent = shuffleusers[index].name.length > 8 ? shuffleusers[index].name.slice(0, 8) + "..." : shuffleusers[index].name
                        setTimeout(() => {
                            front_page.classList.remove("display-none")
                            status_.classList.add("display-none")
                                // console.log(status_.classList.contains("display-none"))
                            status_container.classList.add("display-block")
                            more.parentElement.nextElementSibling.nextElementSibling.nextElementSibling.classList.add("display-none")


                            const status_box = document.querySelectorAll(".status-box")
                            status_container.innerHTML = shuffleusers.map((status, index) => {
                                return `
                                <div class="row status-box py-2 px-2 my-1 ms-1" style="gap:10px">
                                <div class="col-2  p-0">
                                    <img src=${status.profile} id=${status.name[0]+index} alt="no " class="mt-2 rounded-circle p-0" style="height:50px;width: 50px;border:4px solid green">
                            
                            </div>
                            <div class="col-8 p-0 pt-2 m-0 ">
                                <div class="other-status-name fw-bolder" style="font-size:1rem;" >
                                ${status.name.length>10?status.name.slice(0,9)+"...":status.name}
                                </div>
                                <div class="status-time fw-bold" style="color: gray">
                                    12:00
                                </div>
                            </div>
                            </div>
                            `
                            }).join("")

                        }, 4000);
                    })
                })
            }
            if (tab == "call") {
                call_details = ""
                for (let i = 0; i < search_users.length; ++i) {
                    call_details += `
                        <div class=" row my-0 ps-2 py-2 my-2 ">
                        <div class="col-2 py-1">
                            <img src="${search_users[i].profile}" alt="no " id=${i} class="rounded-circle chat-img" style="height:40px;width:40px">
                        </div>
                        <div class="col-10 chat_">
                
                            <div class="row">
                                <div class="col-8 ps-2 ">
                                    <h2 class=" m-0  overflow-hidden" style="font-size:1.2rem"> ${search_users[i].name.length>10?search_users[i].name.slice(0,9)+"...":search_users[i].name}</h2>
                                    <p class=" m-0 ps-1 " style="color: gray;font-weight: 00;">/ Today 18: 41</p>
                                </div>
                                <div class="col-4 m-0 " style="font-size:1.2rem">
                                    <i class="fa fa-phone" style="font-size:20px;color:green"></i> 📞
                                </div>
                            </div>
                        </div>
                    </div>
                    `
                }
                call_container.innerHTML = call_details
            }


        } else {
            chat_container.innerHTML = "no user found"
        }


    })