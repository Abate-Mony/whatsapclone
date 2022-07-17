window.addEventListener("resize", () => {
    if (window.innerWidth >= 772) {
        alert("not available for big devices for now thanks for understanoing")
    }
})

const btns = document.querySelectorAll(".btn")
btns.forEach(btn => {
    btn.addEventListener("click", e => {
        $(btn).toggleClass("border", "border-4", "border-danger")
    })
})