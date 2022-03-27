var scrollMar = document.getElementById("scrollMar")
var para = document.getElementById("para")
var inputText = document.getElementById("inputText")
var count = []
function change() {
    scrollMar.innerHTML = document.getElementById("inputText").value
}
function clearText() {
    let list = document.getElementById("message")
    list.innerText = ""
    inputText.value = ""
}
function chatFunction() {
        let list = document.getElementById("message")
        let li = document.createElement("li")
        list.appendChild(li)
        let marqee = document.createElement("marquee")
        marqee.innerText ="📧"+ inputText.value + "📧"
        marqee.addEventListener("mouseover",marqee.stop)
        marqee.addEventListener("mouseout",marqee.start)
        li.appendChild(marqee)
}
function wish() {
        let list = document.getElementById("wishList")
        let inputText = document.getElementById("boyName")
        let li = document.createElement("li")
        list.appendChild(li)
        li.innerHTML = "🎂 Happy birthday ❤ to you "  + inputText.value +" 🎂"
}
function clearText1() {
    let boyName = document.getElementById("boyName")
    boyName.value = ""
    document.getElementById("wishList").innerHTML = ""
}