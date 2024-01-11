// test
// alert("hi");
// ===========

 
// object description======
console.log("Object:");
console.log("let variableName= {};");
console.log("");

let ObjectPerson={

    name:"Shiva",
    gender:"female",

    contact:{ 

        number:12345,
        email:"shiva@gmail.com",
    },

    hobbies:["movies","codding","drawing"],
    
}
// access object items:==============
console.log("-access object items:");
console.log(ObjectPerson);
console.log(ObjectPerson.name);
console.log(ObjectPerson.contact.email);
console.log(ObjectPerson.hobbies[2]);

// add new item to an object:===========
console.log("-add new item to an object:");
ObjectPerson.age= 37;
console.log(ObjectPerson);

console.log("==========");

// constructor==============
console.log("function-constructor:");

function Bio(fName,lName) {

    this.firstName= fName;
    this.lastName= lName;
    
}

let person1= new Bio("shiva","khandel");
let person2= new Bio("amin","rahmat");

console.log(person1);
console.log(person2);

console.log("======");

// function method===========
console.log("function method:");

Bio.prototype.fullName= function () {

    return `${this.firstName} ${this.lastName}`;
    
}

console.log(person1.fullName());
console.log(person2.fullName());
console.log("==========");

// ====
console.log("class-constructor:");

class Person{
    constructor(fName,lName){

    this.firstName= fName;
    this.lastName= lName;
    }

    fullName(){
        return `${this.firstName} ${this.lastName}`;
    }
}

let shiva= new Person("shiva","khandel");
let amin= new Person("amin","rahmat");

console.log(shiva);
console.log(amin);
console.log(shiva.fullName());
console.log(amin.fullName());
console.log("===========");
// =====

console.log("object built in method:");
//1- object.keys(objectName)
console.log("1- object.keys(objectName):");
console.log(Object.keys(ObjectPerson));

// 2-object.values(objectName)
console.log("2-object.values(objectName):");
console.log(Object.values(ObjectPerson));

// 3-object.entries(objectName)
console.log("3-object.entries(objectName):");
console.log(Object.entries(ObjectPerson));
console.log("============");

// window object===
console.log("window object:");
console.log(window);
// alert("how are you?");
// let person= prompt(" what is your name ?");

// if (confirm("is this your name?")) {
//     console.log("yes");
    
// } else {
//     console.log("no");
    
// };

let result;
  result= window.location;
  result= window.navigator;
  result= window.Bio;
  result= window.document;
 
  console.log(result);
