// const parent = document.querySelector('.parent');

// console.log(parent);
// console.log(parent.children)
// console.log(parent.children[0]);
// console.log(parent.children[1].innerHTML);
// parent.children[2].innerHTML = "BSDK"
// console.log(parent.firstElementChild);
// console.log(parent.lastElementChild);

// const dayOne = document.querySelector('.day');

// console.log(dayOne);
// console.log(dayOne.parentElement);
// console.log(dayOne.nextElementSibling);

// console.log("node ", parent.childNodes)

// ADDING TEXT in HTML By DOM manipulation

const div = document.createElement("div");
div.className = "main";
div.id = "idone";
// div.innerHTML = "Amit Singh";
div.style.background = "pink";
div.style.color = "Red";
div.style.padding = "20px"
div.style.fontSize = "20px"
const addtext = document.createTextNode("Amit Singh is learning JavaScript DOM")
div.appendChild(addtext);
document.body.appendChild(div);