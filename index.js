console.log(window.screen);
document.getElementById("open").addEventListener("click", () => {
    window.open("http://google.com");
})
document.getElementById("close").addEventListener("click", () => {
    window.close();
})

setTimeout(() => {
    console.log("mnp")
    window.focus();
}, 3000);

window.addEventListener("load", () => {
    console.log("loaded")
})

window.addEventListener("resize", (event) => {
    console.log(event);
})

document.getElementById("redirect").addEventListener("click", () => {
    window.location = "http://google.com"
})

