const element = document.querySelector("button")

element.addEventListener("click", function (event) {
  console.log("Произошло событие", event.type)
})
