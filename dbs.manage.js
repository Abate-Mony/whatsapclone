chat_container.innerHTML = users.map((chat, index) => {
    return `
    <div class=" row my-0 ps-2 py-2 my-2">
    <div class="col-2 py-1">
        <img src=${chat.profile} alt="no " id=${index}   class="rounded-circle chat-img" style="height:40px;width:40px">
    </div>
   <div class="col-10 chat_">

<div class="row">
<div class="col-8 ps-2 ">
<h2 class=" m-0 fs-4 overflow-hidden">${chat.name.length>10?chat.name.slice(0,9)+"...":chat.name}</h2>
<p class=" m-0 ps-1 " style="color: gray;font-weight: 00;">call me later for here ❤</p>
</div>
<div class="col-4 m-0 ">
<div class=" px-3 py-0" style="color: rgb(7, 94, 84)">12:00</div>
<div style="background-color: rgb(7, 94, 84);height: 25px;width: 25px; font-size: 1rem;" class="p-0 d-flex justify-content-center align-items-center  m-auto text-center rounded-circle text-light p-1">
    36
</div>
</div>
</div>
   </div>
</div>
`
}).join("")
const chat_ = document.querySelectorAll(".chat_")
const head_img = document.getElementById("head-img")
const header_name = document.getElementById("head-name")
chat_.forEach((chat, index) => {
    chat.addEventListener("click", () => {
        front_page.classList.add("display-none")
        innerchats.classList.add("display-block")
        head_img.src = document.getElementById(index).src;
        header_name.textContent = users[index].name.length > 8 ? users[index].name.slice(0, 8) + "..." : users[index].name
    })
})