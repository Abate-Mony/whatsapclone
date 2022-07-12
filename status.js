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
display_status(shuffleusers,status_container)
function display_status(all_status,box){
    // box.innerHTML=`
    // <div class="my-status row p-1 ms-1 " style="gap:10px ">
    //             <div class="col-2 p-0 position-relative">
    //                 <img src="./chef.jpg " alt="no " class="mt-2 rounded-circle " style="height:55px;width: 55px; ">
    //                 <div class="position-absolute p-1 bg-success
    //                  d-flex justify-content-center align-items-center end-0 me-1 mt-1 bottom-0 rounded-circle w-50 text-center
    //                  h-50" style="width:fit-content;border:2px solid white">
    //                     +
    //                 </div>
    //             </div>
    //             <div class="col-9 my-2 px-2 ">
    //                 <div class="mb-0 fw-bolder  text-gray " style="font-size: 1rem;">
    //                     My status
    //                 </div>
    //                 <p class="fw-normal m-0 " style="color: gray ">Tap to add status update</p>
    //             </div>
    //             <div class="bold px-3 my-2 ">Recent updates</div>
    //         </div>
    //         <div class="other-status ">
    //         </div>
    //     </div>
    // `
    box.innerHTML = all_status.map((status, index) => {
        return `
        <div class="row status-box py-2 px-2 my-1 ms-1" style="gap:10px" id=${status.id}>
        <div class="col-2  p-0">
            <img src=${status.profile}  alt="no" id=${index} class="mt-2 rounded-circle p-0"
             style="height:50px;width: 50px;border:2px solid white;box-shadow:0px 0px 2px 2px green">
    
    </div>
    <div class="col-8 p-0 pt-2 m-0 ">
        <div class="other-status-name fw-bolder" style="font-size:1rem;" >
        ${status.name.length>10?status.name.slice(0,9)+"...":status.name}
        </div>
        <div class="status-time fw-bold" style="color: gray">
           Today, ${status.time}
        </div>
    </div>
    </div>
    `
    }).join("")
    // document.getElementById(shuffleusers[index].name[0] + index).src
    function hide_display_status(e){
        front_page.classList.remove("display-none")
        status_.classList.add("display-none")
        status_container.classList.add("display-block")
        more.parentElement.nextElementSibling.nextElementSibling.nextElementSibling.classList.add("display-none")
        e.stopPropagation()
    }
    const status_box = document.querySelectorAll(".status-box")
    const status_display_img = document.getElementById("status-display-img")
    status_box.forEach((box, index) => {
        box.addEventListener("click", (e) => {
            $(".status_back_btn").click(function(e){
                hide_display_status(e)
        clearTimeout(timer)
            })
            const img_url=users[box.id].profile
            console.log(box.id,shuffleusers[box.id].name)
            front_page.classList.add("display-none")
            status_.classList.remove("display-none")
            status_container.classList.remove("display-block")
            document.getElementById("status-img").src = img_url
            status_display_img.src = statusImg[Math.floor(Math.random() * statusImg.length)]
            document.getElementById("status-name").textContent = shuffleusers[box.id].name.length > 8 ? shuffleusers[box.id].name.slice(0, 8) + "..." : shuffleusers[box.id].name
           let timer= setTimeout(() => {
            hide_display_status(e)
            }, 4000);
        })
    })
}
