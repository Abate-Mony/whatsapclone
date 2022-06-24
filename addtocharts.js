const sendbtn = document.getElementById("send-btn")
const messageBox = document.querySelector(".message-box")

function addtocharts() {
    const input = document.getElementById("input")
    if (input.value.length >= 1) {
        messageBox.innerHTML +=
            `           <div class="chat send text-dark">${input.value}
                    </div>
                    <div class="chat text-dark">thanks for contacting not available at the moment
                    </div>
        `
        input.value = ""
    }
}
sendbtn.addEventListener("click", addtocharts)
window.addEventListener("keyup", (e) => {
    if (e.key == "Enter") {
        addtocharts()
    }
})