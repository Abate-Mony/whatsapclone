const searchBar = document.getElementById("search-chat")

$("#search-btn").click(function(e) {
    $(".search-bar").removeClass("d-none");
    $(".chats-container").addClass("mt-4");
    e.stopPropagation()
});
$(".position-fixed .row .back-btn").click(function(e) {
    $(".search-bar").addClass("d-none");
    $(".chats-container").removeClass("mt-4");
    searchBar.value = ""
    display_users(users, chat_container)
    display_status(users, status_container)
    e.stopPropagation()
});
if (searchBar)
    searchBar.addEventListener("input", () => {
        const value = searchBar.value
        if (value) {
            $(".media").hide()
        } else {
            $(".media").show()

        }
        const search_users =
            users.filter(userDetails =>
                userDetails.name.toLocaleLowerCase().trim().includes(value.toLocaleLowerCase().trim()))

        if (search_users) {
            const tab = $(".message-btn").text();

            if (tab == "chats") {
                display_users(search_users, chat_container)
                const chat_img = document.querySelectorAll(".chat-img")
                show_profile_pic(chat_img)
            }
            if (tab == "status") {
                const status_box = document.querySelectorAll(".status-box")

                display_status(search_users, status_container)


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
                                    <i class="fa fa-phone" style="font-size:20px;color:green"></i> 
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