// alert("Hello Amit ")

let heading = document.getElementById('heading');
// heading.innerHTML = "Hello in DOM Class";
heading.style.background = "Teal";
heading.style.color = "yellow";
heading.style.borderRadius = "15px";
heading.style.padding = "12px";

// document.getElementById('para').style.background = "red";
// let name = document.querySelector('p');
// name.innerText = "Hello in DOM Class kya kr rhe ho aap sab kaisi chal rahi hai zindgi";
// document.getElementsByTagName(p).style.background = "orange";

// const flag = document.getElementsByTagName('p');
// flag[0].style.background = "orange";
// flag[0].style.color = "blue";

const temp = document.querySelectorAll('li');

// for(let i = 0; i < temp.length; i++) {
//     temp[i].style.background = "#C"+i+"B"+i+"C"+i;
// }

temp.forEach( (l) => {
    l.style.background ="orange";
});

// temp[0].style.background = "red";
