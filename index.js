const element = document.querySelector("button")

element.addEventListener("click", function (event) {
  fetch("http://45.89.189.42/api/todos/1", {
    method: "GET",
    headers: {
      Accept: "application/json",
    },
  })
    .then((response) => response.json())
    .then((json) => console.log(json))
})
