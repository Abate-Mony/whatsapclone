$(".message-btn").click(function(e) {
    const text = this.innerHTML
    if (text == "chats") {
        location.href = "./message.html"
    }
    e.preventDefault();

});