// js link test.
// alert("hi");
// ========================

// let example2=  document.getElementsByTagName("li");
// let example1= document. querySelector("ul");

// access an html tag
console.log("access an html tag:");
let forthChild= document.querySelectorAll(".div-ex li.li-ex")[3];
console.log(forthChild);
console.log("========");

// traverse in DOM:(parents to children)
console.log("traverse in DOM:(parents to children)");
// access parent tag
console.log("-access parent tag:");
let ulParents= document.querySelector("ul");
console.log(ulParents);

// access special children content
console.log("-access special children content:");
let Children= ulParents.children;
console.log(Children[1].textContent);

// access first/last child/number of children
console.log("-access first/last child/number of children:");
let firstChild= ulParents.firstElementChild;
let lastChild= ulParents.lastElementChild;
let numberChildren= ulParents.childElementCount;

console.log(firstChild);
console.log(lastChild);
console.log(numberChildren);

console.log("=========");

// making an element
console.log("making an element:");
// we can hover on  if it shows( property we need to add = ), if it shows (method we should only put () )

let newElement= document.createElement("h4");

newElement.className= "element-className";
newElement.id= "element-idName";
newElement.setAttribute("attr-key","attr-value");

// we can make content for an element in 2 ways:
newElement.innerHTML= "1-making new content using innerHtml";
newElement.appendChild(document.createTextNode("2-making new content using appendChild nd createTextNode "));

console.log(newElement);
console.log("==========");


// make nested elements:
console.log("-we can make an element inside another in 2 ways: ");

console.log("1-using appendChild:");
let Div= document.createElement("div");
let hFive= document.createElement("h5");
Div.appendChild(hFive);
hFive.appendChild(document.createTextNode("this content made by appendChild and createTextNode"));

console.log(Div);



console.log("2-using innerHtml:");

let divHtml= document.createElement("div")
divHtml.innerHTML= `
<h5>this content made by innerHtml</h5>
`

console.log(divHtml);

console.log("============");

// replace-elements
console.log("replace-elements:");

let ULParents= document.querySelector("#ul-ex");

let replaceCH= document.createElement("li");
replaceCH.className= "li-ex";
replaceCH.textContent="this is replaced child";
ULParents.appendChild(replaceCH);

let thirdCh= document.querySelectorAll(".div-ex li.li-ex")[2];


ULParents.replaceChild(replaceCH, thirdCh);


// console.log(ULParents);
// console.log( thirdCh);
console.log(replaceCH);
console.log("==============");


// addEventListener
console.log("addEventListener:");


let button= document.querySelector(".btn");
button.addEventListener("click",showText);


function showText(event) {

    event.preventDefault
    
    button.textContent="new button";
    //  console.log("this is a new button");
}


// console.log(button);
console.log("===");

// local storage
console.log("local storage:");

  localStorage.setItem("myKey", "myValue");
  let storData= localStorage.getItem("myKey");

console.log(storData);
console.log("");

// remove special data from local storage
console.log("remove data from local storage:");

localStorage.setItem("shiva","khandel");
localStorage.setItem("ahoora","barana");

let shivaName= localStorage.getItem("shiva");
localStorage.removeItem("shiva");

// remove all data from local storage
// localStorage.clear();

console.log("");

// saving an array in local storage:
console.log("saving an array in local storage:");

let myArray= [1,2,3,4];
localStorage.setItem("arr",myArray);
let storArray= localStorage.getItem("arr").split(",");

console.log(storArray);
console.log("");

// saving an object in local storage:
console.log("saving an object in local storage:");

let myObject= {
    name: "shiva",
    age: 38
}

localStorage.setItem("obj", JSON.stringify(myObject));
let storeObject= JSON.parse(localStorage.getItem("obj"));


console.log(storeObject);
