const prfimg = document.getElementById("profileImg");
const img1 = document.getElementById("profileImg")
var count = 0
var count_ = 0
if (img1)
    var img2 = document.getElementById("img-2")
img2.src = img1.src
img2.classList.add("profile-animtainer")
prfimg ? prfimg.addEventListener("click", () => {
    $(".share-wrapper").removeClass("scroll-up");
    $(".share-wrapper").removeClass("scroll-down");
    $(".update-profile").removeClass("scroll-up");
    $(".update-profile").removeClass("scroll-down");
    count = 0
    count_ = 0
    document.querySelector(".setting") ? document.querySelector(".setting").classList.add("d-none") : "do nothing"
    document.querySelector(".pfpg") ? document.querySelector(".pfpg").classList.remove("d-none") : "do nothing"


}) : ""
const backbtn = document.getElementById("backbtn")
if (backbtn)
    backbtn.addEventListener("click", () => {
        document.querySelector(".setting") ? document.querySelector(".setting").classList.remove("d-none") : "do nothing"
        document.querySelector(".pfpg") ? document.querySelector(".pfpg").classList.add("d-none") : "do nothing"
    })
document.body.addEventListener("click", () => {
    count = 0
    count_ = 0
    $(".share-wrapper").addClass("scroll-down");
    $(".update-profile").addClass("scroll-down");
})
$(".share").click(function(e) {
    $(".update-profile").addClass("scroll-down");
    if (++count % 2) {
        $(".share-wrapper").removeClass("scroll-down");
        $(".share-wrapper").addClass("scroll-up");

    } else {
        $(".share-wrapper").addClass("scroll-down");
        $(".share-wrapper").removeClass("scroll-up");
    }
    e.stopPropagation()
});
$(".update").click(function(e) {
    $(".share-wrapper").addClass("scroll-down");
    if (++count_ % 2) {
        $(".update-profile").removeClass("scroll-down");
        $(".update-profile").addClass("scroll-up");
    } else {
        $(".update-profile").addClass("scroll-down");
        $(".update-profile").removeClass("scroll-up");
    }
    e.stopPropagation()

});