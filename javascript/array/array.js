
// js-link-test
// alert("hi");
// ======================

console.log("array method:(length,indexOf(),unshift/shift(),push/pop(),splice()");

 let numbers=[0,1,2,3,40,50,60,7,8,9,10];
 let result;
// length is a property so don't need () 
 result= numbers.length;
 result= numbers.indexOf(5);

//  add or remove a number from the start of an array
 result= numbers.unshift(-1);
 result= numbers.shift();

 //  add or remove a number from the end of an array
 result= numbers.push(11);
 result= numbers.pop();

//  replace new number in special index
// (2=index[2], 0=keep the new number in the same index, 80=the new number)
 result= numbers.splice(2, 0, 80);

//  remove a number from special index
// (5 = when rich index 5, 1= then remove the item in index5)
result= numbers.splice(5, 1);

//  remove a series of number from an index to another index
// (7 = when rich index 7, 2= then remove the item in index7, and the next one )
result= numbers.splice(7, 2);

 console.log(`numbers: ${numbers}`);
 console.log(`result: ${result}`);
 console.log("");


//  concatenate tow array each other.
console.log(" concatenate tow array each other:");
let Numbers1=[1,2,3,4,5];
let Numbers2=[10,20,30,40,50];
let concatResult;

concatResult= Numbers1.concat(Numbers2);

console.log(`Number1: ${Numbers1}`);
console.log(`Number2: ${Numbers2}`);
console.log(`concatResult: ${concatResult}`);
console.log("---------------");

// start-array-compare-function-method
console.log("array-compare-function-method:");
console.log("compare function syntax:");
console.log("");
console.log("function compare(x , y) {");
console.log(" return x-y");
console.log("}");
console.log("");



// sort method=====
console.log("sort() numbers in an array:");
let Numbers= [3,91,7,67,0,52,-1,-9,40];


// sort in order====
SortNumOrder= Numbers.sort(function(x,y){
    return x-y;
});
console.log(`Sort Numbers in Order: ${SortNumOrder}`);
   
// sort revers======
SortNumRevers= Numbers.sort(function(x,y){
    return y-x;
});
console.log(`Sort Numbers in Revers: ${SortNumRevers}`);



// can not use Numbers.sort()============
console.log("");
console.log("can not sort number byu using Numbers.sort()");

let sortNumbers;
sortNumbers= Numbers.sort();
console.log(`sortNumber: ${sortNumbers}`);
console.log("");
// ======================================

// filter method=====
console.log("filter() numbers in an array:");

filterResult= Numbers.filter(function (Number) {

    return Number < 0; 
})

console.log(`Number(shows array items): ${filterResult}`);
console.log("");


// map method=====
console.log("map method:");


 mapResult=Numbers.map(function(Number) {

 return Number + 1;
    
})

console.log(mapResult);
console.log("");

// reduce method====

reduceResult= Numbers.reduce(function(sum,Number) {

    return sum + Number
    
})

console.log(reduceResult);




// end-array-compare-function-method