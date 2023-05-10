//The localStorage read-only property of the window interface allows you to access a Storage object for the Document's origin; the stored data is saved across browser sessions.
//localStorage is similar to sessionStorage, except that while localStorage data has no expiration time, sessionStorage data gets cleared when the page session ends — that is, when the page is closed. (localStorage data for a document loaded in a "private browsing" or "incognito" session is cleared when the last "private" tab is closed.)

//query selectors - when were 
const counter = document.querySelector("#counter");
const addButton = document.querySelector("#add");
const subtractButton = document.querySelector("#subtract");

let count = localStorage.getItem("count");

// here the object is counter, and 
counter.textContent = count;

addButton.addEventListener("click", function () {
  if (count < 24) {
    count++;
    counter.textContent = count;
    localStorage.setItem("count", count);
  }
});

subtractButton.addEventListener("click", function () {
  if (count > 0) {
    count--;
    counter.textContent = count;
    localStorage.setItem("count", count);
  }
});
