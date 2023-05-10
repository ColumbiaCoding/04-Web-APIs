const container = document.querySelector(".container");

container.addEventListener("click", function (event) {
  const element = event.target;

  // TODO: Complete function
  // Check if the clicked element was an image
  if (element.matches(".box")) {
    // Get the current value of the image's data-state attribute
    const state = element.getAttribute("data-state");

    if (state === "hidden") {
      // Change the data-state attribute's value
      // There are two different ways this attribute can be set
      element.dataset.state = "revealed";
      console.log(element.dataset.state) 
      element.textContent = element.dataset.number
    }
    }
});
