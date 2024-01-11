
// to check if the js link is working
// alert("link is working");
// =================================================

// start-console.log==================
console.log("-console.log:======");
console.log("hi-console.log");
console.log("");

// end-console.log==================

// start-variables=============
console.log("-variables:======");

// var====
var number = 30;
console.log("var number= "+number);

// const===
const score = 120;
console.log("const score= "+score);

// let age = 40;===
let age = 40;
console.log("let age= "+age);
 age = 60;
console.log("age="+age);

//  or let age;===
// let age;
// age= 10;
// console.log(age);
console.log("");
// end-variables===============

// start-datatype=======
console.log("datatypes:============");
console.log("we check datatypes of a variable like that: console.log(typeof + variable name);");
console.log("ex: let age=40;");
console.log("console.log(typeof age);");
console.log("");

// primitive-data-type:======
console.log("- primitive-data-type:======");

// string=====
let dataTypeString = "shiva";
console.log("string= shiva is text so it is: "+ typeof dataTypeString);

// number=====
let dataTypeNumber = 44.2;
console.log("number= 12 or 3.7 is number so it is:"+ typeof dataTypeNumber);

// boolean=====
let dataTypeBoolean = true ;
console.log("boolean= true/false are boolean so:"+ typeof dataTypeBoolean);

// undefined=====
let dataTypeUndefined;
console.log("undefined= let dataTypeUndefined; is:"+ typeof dataTypeUndefined);

// null=====
let dataTypNull = null;
console.log("null= null shows as object so let dataTypNull = null; is:"+ typeof dataTypNull );

// empty=====
let dataTypEmpty = "";
console.log("empty= when we have an empty string datatype is still string but it is empty string so let dataTypEmpty is:"+ typeof dataTypEmpty );

console.log("");

// reference-data-type:======
console.log("- reference-data-type:======");

// array===
console.log("Array:");
console.log("let variableName= [];");

let dataTypArray=[2,'text',true];
console.log(dataTypArray);
console.log(dataTypArray [0]);
console.log(dataTypArray [1]);
console.log(dataTypArray [2]);

// add an value to an array
console.log("-add an value to an array:");
dataTypArray [3]= 77;
console.log(dataTypArray);

// replace an value to an array
console.log("-replace an value to an array:");
dataTypArray [2]= false;
console.log(dataTypArray);

console.log("");

// object======
console.log("Object:");
console.log("let variableName= {};");
console.log("");

let dataTypObjectPerson={

    name:"Shiva",
    gender:"female",

    contact:{ 

        number:12345,
        email:"shiva@gmail.com",
    },

    hobbies:["movies","codding","drawing"],
    
}
// access object items:
console.log("-access object items:");
console.log(dataTypObjectPerson);
console.log(dataTypObjectPerson.name);
console.log(dataTypObjectPerson.contact.email);
console.log(dataTypObjectPerson.hobbies[2]);

// add new item to an object:
console.log("-add new item to an object:");
dataTypObjectPerson.age= 37;
console.log(dataTypObjectPerson);

console.log("");

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


// end-datatype=======

// start-assignment===========
console.log("assignment:");
// let name="shiva";
// let anotherName;
// anotherName= name;

// anotherName="amin";
// console.log(name);
// console.log(anotherName);

let person={name:"shiva"};
let anotherPerson;

// normal assignment======
// console.log("normal assignment:");
// anotherPerson=person;
// anotherPerson.name ="amin";

// console.log(person);
// console.log(anotherPerson);



// deep assignment====
console.log("deep assignment:");


anotherPerson= Object.assign({}, person);
anotherPerson.name="amin";

console.log(person);
console.log(anotherPerson);

 // deep assignment for an array
 console.log(" assignment for an array: ");

 let DpNumber=[1,8,46,9];
 let newDpNumber;
//   array normal assignment===
// console.log(" array normal assignment: ");
//  newDpNumber=DpNumber;
// newDpNumber[2]=100;
//  console.log(DpNumber);
//  console.log(newDpNumber);

//  deep assignment=====
console.log(" array deep assignment: ");

 newDpNumber= Object.assign([], DpNumber);
 newDpNumber[2]=100,

 console.log(DpNumber);
 console.log(newDpNumber);
 console.log("=============");
 // end-assignment===========


//  start-datatype-number========
console.log("datatype-number:");

console.log("-using % and **");

let num1= 4;
let num2= 3;
let result1;
let result2;

result1= num1 % num2;
result2= num1 ** num2;

console.log(result1);
console.log(result2);
// ====================

// -Using ( ) in operation:
console.log("-Using ( ) in operation: ");

let parNum1= 4;
let parNum2= 3;
let parResult1;
let parResult2;

parResult1= (parNum1+parNum2) *parNum1;
parResult2= (parNum1 * parNum2) + parNum1;

console.log(parResult1);
console.log(parResult2);
// =====

// write shorter operation: (+= , *= , /=,...)
console.log("-write shorter operation: (+= , *= , /=,...)");

let shNum1= 4;
let shNum2= 3;
let shFirstResult;


shFirstResult= shNum1+ shNum2;
// extra explanation: shFirstResult=7

// ex1:======
// shNewResult= shFirstResult +3 
// shFirstResult+=3 

// ex2:======
// shNewResult= shFirstResult *2
shFirstResult*=2

console.log(shFirstResult);
// =========

// ++ before or after a variable=====
console.log("++ before or after a variable:");

let PPNum1= 5;
let PPNum2= 3;
let PPFirstResult;

PPFirstResult= PPNum1+ PPNum2;
// extra explanation: PPFirstResult=8


// we can add 1number to a variable in 4 forms

// form 1====
// newPPresult= PPFirstResult+1
// console.log(newPPresult);

// form 2=====
// PPFirstResult +=1
// console.log(PPFirstResult);

// form 3=====
// console.log(PPFirstResult++);

// PPFirstResult++;
// console.log(PPFirstResult++);

// form 4======
// will add +1
// console.log(++PPFirstResult);

// will add 1+1
++PPFirstResult;
console.log(++PPFirstResult);
console.log("================");
//  end-datatype-number==========

// start-math-method=============
console.log("-math-methods:");

resultMath = Math.round(3.7);
resultMath = Math.round(7.2);
// ========

resultMath = Math.ceil(7.2);
resultMath = Math.ceil(4.1);
// ===========

resultMath = Math.floor(8.9);
resultMath = Math.floor(2.7);
// ============

resultMath = Math.random();
// ============

console.log(resultMath);
console.log("=================");
// end-math-method==============


// start-datatype-string============
console.log("-datatype-string:");

// backtick========
console.log("backtick:");

let nameBack= "shiva"
let jobBack="web developer"
let ageBack= 37;
let resultBack= `my name ia ${nameBack} Iam ${jobBack}, I am ${ageBack}.`

console.log(resultBack);
console.log("");
// =========
// end-datatype-string==============


// start-scope============
console.log("scop:");

// global-scope==
console.log("-global-scope:");

var globalScope= "global scope";

function glScop() {

    console.log(`this is ${globalScope} inside a function`); 
}

console.log(`this is ${globalScope} outside a function`);

glScop()
console.log("");
// ===

//function-scope==
console.log("-function-scope:");


function fuScop() {

    var functionScope= "function scope";
    console.log(`this is ${functionScope} inside a function`); 
}

// fuScop()

function fuScop() {

    var functionScopeNumber=3

    if (functionScopeNumber===3) {
        console.log("this is if inside function scope");   
    }  
}

fuScop()
console.log("");

// block-scope==

function blScop() {

    if (true) {

         let blockVariable= "block scope";

        console.log(` access the ${blockVariable} is  only  inside a block{}`);
        
    }  
}

blScop()

// end-scope============

