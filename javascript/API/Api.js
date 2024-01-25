// test js link
// alert("hi");
// =======================

// Asynchronous function:
// console.log("Asynchronous function:");

// setTimeout(() => {
//     console.log("Asynchronous function:");
//     console.log("shows HELLO after three second");
//     console.log("===================");
    
// }, 1000);


// console.log("===============");
// access JSON data from url and API
console.log("access JSON data from url and API:");

var ApiKey = "0b14bd9f90173719c5c03461e31ad0ac";
var queryURL = "http://api.openweathermap.org/geo/1.0/direct?q=London&limit=5&appid="+ApiKey;

console.log(queryURL);
console.log("===============");


// callback function======================================
// normal calling function:
function FuncOne(){
    setTimeout(function (){
        
    console.log("the first function execute after second function.");
        console.log("===============");  
    },2000);
    } 
    function FuncTow(){ 
        console.log("normal calling function:");
        console.log("the second function execute first.");
        
    } 
    FuncOne();
    FuncTow();

// callback function:
function Func1(Func){
    setTimeout(function (){
        console.log("callback function:");
        console.log("the first function execute first.");
        Func();
    },3000);
    } 
    function Func2(){ 
        console.log("the second function execute second.");
        console.log("===============");
       
    } 

 
    Func1(Func2);
// ===============================================

// promise================================

  const welcome = new Promise(function (resolve, reject) {
    setTimeout(() => {

        var a="v"
        var b="b"

        if (a==b) { 
          resolve();   
        }else{
            reject();
        } 
       
         
    }, 4000);
  });
  
  welcome.then(function () {
    console.log("promise:");
    console.log("call resolve (correct!)");
    console.log("===============");
  });

  welcome.catch(function () {
    console.log("promise:");
    console.log("call reject (error!)");
    console.log("===============");
  });
// console.log(welcome);
//   ===================================================

// fetch

fetch(queryURL)

.then(function (response) {
   return response.json();
})

.then(function(data) {
    console.log(data);
    // (response.status) sets to check if the error is working
    // console.log(response.status);
 })

.catch(function (error) {
    console.log( `errrrorrr! ${error}`); 
})



// fetch in arrow function=======

// fetch(queryURL)//api for the get request
//  .then(response => response.json())
//  .then(data => console.log(data))


