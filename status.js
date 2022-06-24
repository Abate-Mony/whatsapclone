const shuffleusers = users.slice().sort(() => 0.5 - Math.random())
const statusImg = [
    './statusimg/1.jpg',
    './statusimg/2.jpg',
    './statusimg/3.jpg',
    './statusimg/4.jpg',
    './statusimg/11.jpg',
    './statusimg/6.jpg',
    './statusimg/7.jpg',
    './statusimg/8.jpg',
    './statusimg/10.jpg',
    './statusimg/jeans1.jpg',
    './statusimg/jeans2.jpg',
    './statusimg/jeans3.jpg',

]
status_container.innerHTML += shuffleusers.map((status, index) => {
    return `
    <div class="row status-box py-2 px-2 my-1">
    <div class="col-3">
        <img src=${status.profile} id=${status.name[0]+index} alt="no " class="mt-2 rounded-circle img-fluid" style="height:50px;width: 50px;">

</div>
<div class="col-8 p-0 pt-2 ">
    <div class="other-status-name fw-bolder fs-4">
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
const status_display_img = document.getElementById("status-display-img")
status_box.forEach((box, index) => {
    box.addEventListener("click", () => {
        front_page.classList.add("display-none")
        status_.classList.remove("display-none")
        status_container.classList.remove("display-block")
        document.getElementById("status-img").src = document.getElementById(shuffleusers[index].name[0] + index).src
        status_display_img.src = statusImg[Math.floor(Math.random() * statusImg.length)]
        document.getElementById("status-name").textContent = shuffleusers[index].name.length > 8 ? shuffleusers[index].name.slice(0, 8) + "..." : shuffleusers[index].name
        setTimeout(() => {
            front_page.classList.remove("display-none")
            status_.classList.add("display-none")
            status_container.classList.add("display-block")
        }, 4000);
    })
})