// ADD ELEMENT IN HTML USING DOM

// function addLanguage(langName){
//     const li = document.createElement('li');
//     li.innerHTML = `${langName}`;
//     document.querySelector('.language').appendChild(li);
// }

// addLanguage("Python")
// addLanguage("C++");
// addLanguage("Java");
// addLanguage("C#");


function addOptiLanguage(langName) {
    const li = document.createElement('li');
    li.appendChild(document.createTextNode(langName));
    document.querySelector('.language').appendChild(li);
}


addOptiLanguage("Python");
addOptiLanguage("Java");
addOptiLanguage("C#");
addOptiLanguage("C++");
addOptiLanguage("Golang");

// UPDATE ELEMENT IN HTML USING DOM

const seclang = document.querySelector("li:nth-child(2)");
const newli = document.createElement("li");
newli.textContent = "Ruby";
seclang.replaceWith(newli);

// REMOVE ELEMENT IN HTML USING DOM

const lastlang = document.querySelector('li:last-child');
lastlang.remove();