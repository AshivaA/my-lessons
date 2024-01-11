
//  to check js link======
// alert("hi");
// ======================

// start-while-loop===============
console.log("while-loop:");

let number= 0;


while (number<5) {

    console.log("this is while loop");

    number=number + 1;

    
}

console.log(number);
console.log("=================");

// end-while-loop=================

// start-for-loop===============

console.log("for-loop:");

// ex 1:
console.log("ex 1:");

let Number=7

for (let Number = 0; Number < 7; Number++) {
     console.log("this is for loop");;  
}

console.log("");


// ex 2:
console.log("ex 2: finding special item in array in each loop");

let forArray = [2,3,17,90,45,4];


for (let index = 0; index < forArray.length; index++) {
    
    if (forArray[index] === 90) {

        console.log("index[3]=90");
        
    }
    
}

console.log("");



// for each
console.log("for each: will change the original array");

 let arrayNames=["Shiva","Amin","Ahoora","Barana"];


 arrayNames.forEach(arrayNamesElement => {

    console.log(`hi ${arrayNamesElement}`);
    
});



console.log("");
// for of
console.log("for of:");

let forOfNumbers=[1,8,0,9,27,89,6,10,13,2,4,80];

for (let forOfNumber of forOfNumbers) {
    
    if (forOfNumber===10) {
        console.log(`${forOfNumber} is found`);   
    }
    
}
console.log("");


// for in
console.log("for in: (in object)");

let person={

    name: "shiva",
    age:37,
    gender:"female"
};

for (let personKey in person) {

    console.log(`${personKey}:${person[personKey]}`);
    
}

console.log("");

console.log("for in: (in array)");

let foriNNumbers=[1,8,0,9,27,89,6,10,13,2,4,80];

for (let foriNNumber in foriNNumbers) {

    console.log(`${foriNNumber}: ${foriNNumbers[foriNNumber]}`);
    
}

console.log("");
// end-for-loop===============


// start-Break-continue==========


for (let counter = 0; counter< 10; counter++) {
   
    
    if (counter===7) {
        break;
       
    } else if (counter===3){
        continue;
        
    }
    console.log(counter);
}




// end-Break-continue===============