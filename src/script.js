function handleSubmit(event) {
  event.preventDefault();
  let recipeBox = document.querySelector("#recipe");
  recipeBox.innerHTML = "Generating a recipe for you";
}

let submitButton = document.querySelector("#recipe-form");
submitButton.addEventListener("submit", handleSubmit);
