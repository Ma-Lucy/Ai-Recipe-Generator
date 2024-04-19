function handleSubmit(event) {
  event.preventDefault();
  let recipeBox = document.querySelector("#recipe");

  new Typewriter("#recipe", {
    strings: "Generating a recipe for you",
    autoStart: true,
    cursor: "",
    delay: 15,
  });
}

let submitButton = document.querySelector("#recipe-form");
submitButton.addEventListener("submit", handleSubmit);

//add api to event function - include api ket prompt etc
//create another function to handle response, with typewriter plugin
