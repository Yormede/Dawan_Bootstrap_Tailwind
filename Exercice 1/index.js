const ul = document.querySelector("ul")
const li = document.querySelectorAll("li")
const button = document.querySelector("button")

button.addEventListener("click", () => {
    if (ul.classList.contains("visible")) {
        ul.className = "hidden"
        li.forEach((e) => {
            e.className = "hidden"
        })
    } else {
        ul.className = "visible"
        li.forEach((e) => {
            e.className = "visible"
        })
    }

})