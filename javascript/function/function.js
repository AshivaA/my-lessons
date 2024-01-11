
// js link check
// alert("hi");
// ====================================

// function=====
console.log("Function:");

function dataTypFunction(params) {
    console.log("Hi function");
}

dataTypFunction();

// add parameters and argument to a function:
console.log("-add parameters and argument to a function:");

function addParametersAndArgument(pName,pAge) {

    console.log( "i am " + pName +" and I have "+ pAge);
     
}

addParametersAndArgument("(arName) Shiva", "(arAge) 37");
addParametersAndArgument("(arName) Amin", "(arAge) 38");
addParametersAndArgument("(arName) Ahoora", "(arAge) 11");
console.log("");

// return in function:
console.log("-return in function:");

function square(PNumber) {

    return PNumber * PNumber;
    
}


  console.log(square(3));
  console.log(square(5));
  console.log(square(4));


  // arrow function=========
console.log("arrow-function");

let Numbers= [3,91,7,67,0,52,40];

arResult= Numbers.sort(function(x,y){
    return x-y;
});

arResult= Numbers.sort((x,y) => {
    return x-y;
});

arResult= Numbers.sort((x,y) => x-y);

console.log(arResult);

  console.log("==============");

//   different-kind-of-function===============
console.log(" different-kind-of-function:");

// function declaration:
console.log("1-function declaration:");

function sum (a, b) {
    return a+b 
}
 console.log(`funName= ${sum(2,5)}`);
 console.log("");


//  function expression:
console.log("2-function expression:");

let fuResult= function (a,b) {
    return a+b   
}
console.log(`let funResult= ${fuResult(3,6)}`);
console.log("============");

// hoisting
console.log("hoisting:");

console.log(`funDName= ${funDName(2,5)} (it works)`);

// console.log(`let fuExResult= ${fuExResult(3,6)}`);
console.log(`let fuExResult= (get error)`);

// function declaration:
function funDName (a, b) {
    return a+b 
}
//  console.log(`funDName= ${funDName(2,5)}`);
 console.log("");


//  function expression:
let fuExResult= function (a,b) {
    return a+b   
}
// console.log(`let fuExResult= ${fuExResult(3,6)}`);
console.log("==============");



// function parameters=========
console.log("function parameters:");

function myFunction(x, y = 10) {
    return x + y;
  }
  console.log(myFunction(5));

// rest syntax===
console.log("rest parameters syntax:");
  function sum(...restParameter) {
    let result = 0;
    for (let arguments of restParameter) {
        result += arguments;
    }
    return result;
  }
  
  console.log( sum(4,3,1,2));

// rest parameter meaning: 
console.log("rest parameter meaning:");
function bio(fName, lName,...otherInfo) {
 
    // return  {fName, lName,...otherInfo};
    return otherInfo;
}
console.log(bio("shiva", "khandel", "web dvp","artist" ));
// ====

// rest parameters ex:
console.log("rest parameters ex:");
function sum(a,b,...restParameter) {

    let sumResult= 0;
   for (let itemArgument of restParameter) {
     sumResult+= itemArgument;
   }
     return sumResult; 

}

console.log(sum(1,3,2,4));

console.log("==================");

// spread=============
//  spread syntax in array
console.log("spread:");
console.log("spread syntax in array:");
let spArray1= [1,2,3];
// let spArray2= [...spArray1,4,5,6];
let spArray2= [20,30,...spArray1, 6,7,8];
console.log(spArray2);


//  spread syntax in function
console.log("spread syntax in function:");

let spreadArray= [2,3];
function SumFunc(...restParameter) {

    let result= 0;
    for (const arguments of restParameter) {
        result+= arguments; 
        // resultFunc= [1,...spreadArray,4];
    }
   return result;
}

console.log(SumFunc(1,...spreadArray,5));
// console.log(SumFunc(...spreadArray));


  
  











