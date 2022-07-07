const sendbtn = document.getElementById("send-btn")
const messageBox = document.querySelector(".message-box")
const input = document.getElementById("input")
input.addEventListener("input", () => {
    navigator.vibrate([50])
})


function scrolldown() {
    if (messageBox) {
        const all = [...messageBox.children]
        const height = all[all.length - 1].offsetTop
        document.querySelector(".innerchats").scrollTo({
            top: height + 30,
            left: 0,
            behavior: "smooth"
        })
    }

}
document.querySelector(".innerchats").addEventListener("scroll", (e) => {
    console.log(document.querySelector(".innerchats").offsetHeight)
})

function addtocharts() {
    const input = document.getElementById("input")
    if (input.value.length >= 1) {
        navigator.vibrate([100])
        messageBox.innerHTML +=
            `           <div class="chat send text-dark">${input.value}
                    </div>
                    <div class="chat text-dark">thanks for contacting not available at the moment
                    </div>
        `

        input.value = ""
        scrolldown()

    }
}
$(".down").click(function(e) {
    scrolldown()
    e.preventDefault();

});
sendbtn.addEventListener("click", addtocharts)
window.addEventListener("keyup", (e) => {
    if (e.key == "Enter") {
        addtocharts()
    }
})

const dropdown = document.getElementById("dropdown")
const more = document.getElementById("more")
more.parentElement.addEventListener("click", e => {
    e.stopPropagation()

})
more.parentElement.nextElementSibling.addEventListener("click", e => {
    e.stopPropagation()

})
more.parentElement.nextElementSibling.nextElementSibling.addEventListener("click", e => {
    e.stopPropagation()
})
more.parentElement.nextElementSibling.nextElementSibling.nextElementSibling.addEventListener("click", e => {
    e.stopPropagation()
})

dropdown.addEventListener("click", (e) => {
    console.log(more.parentElement.classList.contains("display-none"))
    more.parentElement.classList.remove("display-none")
    e.stopPropagation()
})
more.onclick = function(e) {
    more.parentElement.classList.toggle("display-none")
    more.parentElement.nextElementSibling.classList.toggle("display-none")
    e.stopPropagation()
}
document.getElementById("settings").addEventListener("click", (e) => {
    more.parentElement.nextElementSibling.nextElementSibling.classList.remove("display-none")
    e.stopPropagation()
})
document.getElementById("status-options").addEventListener("click", (e) => {
    more.parentElement.nextElementSibling.nextElementSibling.nextElementSibling.classList.remove("display-none")
    e.stopPropagation()
})
window.addEventListener("click", e => {
    more.parentElement.nextElementSibling.classList.add("display-none")
    more.parentElement.nextElementSibling.nextElementSibling.classList.add("display-none")
    more.parentElement.nextElementSibling.nextElementSibling.nextElementSibling.classList.add("display-none")
    more.parentElement.classList.add("display-none")

})