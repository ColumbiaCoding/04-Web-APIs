//working out way down the DOM tree is called dom  traverse
console.log("Document Body: ")
console.log(document.body);

// Gives an arry like object that tells the three direct children of the body.
console.log("Children of Document Body: ")
console.log(document.body.children);

console.log("First child of body: ")
console.log(document.body.children[0]);

console.log("First child of the ul: ")
console.log(document.body.children[1].children[0]);

// Accessing element by id
const firstChildUl = document.getElementById("first-child-ul");
console.log(firstChildUl)

// Setting style of element
firstChildUl.style.color = "green";
