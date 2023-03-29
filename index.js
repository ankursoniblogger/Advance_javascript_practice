// primitve data type store actual value of varible 
/*
var a = 10;

var b = a;

b = 20 ;

console.log("a:" , a );  */

// Non primitive data type hold memory location/address of value of varible

/*
var b = { name: 'Ankur'} 

var c = b ;
c.name = "Ankur soni";

console.log("b:" , b) */

// console.log(typeof null)
// console.log( 1 == "1");
/*
var arr = [ 1, 2, 3]
arr[0] = 7  
console.log(arr);

var str = "Ankur";
str[0] = "a";
console.log(str) */
/*
var admin = {
    name: "Ankur",
    password: "ankur12",
    age: "19"
}

// it's can be change admin 
admin = {
    name: "ankit",
    password: "ankit12",
    age: "21"
}
console.log(admin) */

// But if I written objuct.freeze() ,can't change admin 
/*
var admin = {
    name: "Ankur",
    password: "ankur12",
    age: "19"
}
Object.freeze(admin);

admin.name = "Ankit soni";  //ab admin freez ho gya hain esse change nai kr sakte
console.log(admin) */



// using this keyword and new keyword


//create a function that will reutrn a objuct
/*
function nikeProduct(){
    let product = {}
    product.name = "Nike";
    product.price = "2000";

    return product; 

}

let p1 = nikeProduct();
console.log(p1) */

//NOW SOLVE THIS QUESTION USING CONSTRACTED function
/*
function nikeProduct2(){
    this.name = "nike";  // this = inisilization
    this.price = "2000";

}
let p2 = new nikeProduct2(); // new keyword is same as returing
console.log(p2); */

/*
function product(n, p, b){

    this.name = n;
    this.price = p;
    this.brand = b;
}
 let p1 = new product("nike", "2000", "nikebrand") ;
 let p2 = new product("addidas", "2000", "addidasbrand") ;

 console.log(p1)
 console.log(p2)  ; */


//  Call ,Apply ,  Bind
/*
function cookFood (order){
    console.log(`serving ${order} in ${this.name}`)

}

const kitchan = {
    name: "kitchan",
    purpose:"cook"
}
const bedroom = {
    name: "bedroom",
    purpose: "living"
}
const LR = {
    name: "living room",
    purpose: "we live"
}

cookFood.call(kitchan, "maggi");*/

// var myName = "Ankur soni";

// function a1(){
//     var an = "first name";
//     console.log(an);
//     b1();
//     console.log("My name is ankur soni");
// }

// function b1(){
//     console.log("this is 2nd function ");
//     c1();
// }
// function c1(){
//     console.log("this is 3rd function");
// }
// a1();


// function area(length , breadth){
//     let area = length * breadth;
//     console.log(area)
// }


// area(2,3);
// area(3,4);

// let a =  10 ;  // a = 20
// let b = 20 ;  //b = 10 

// a = a + b  // a = 30
//   var i = 10;
//   do {
//     console.log("hii");
//   }while(i<5);

// var i = 0;
// while(i<5);{
//     console.log("hii");
//     ++i;
// }

// function sum(n){
        
// let sum = 0;
// for (let i = 1; i <= n; i++)
// {
//   if (i % 2 == 0)
//   {
//     sum = sum + i;
//   }
// }
// console.log(sum)
// }
// sum(2)


                         // what is closurse  given the example of closurse



const interwiewQuestion = (name) => {

    return function(topic){
        if(name === "vinod"){
            console.log(`Hi ${name}. plz explain what is the ${topic }`);
        }
         else if(name === "thapa"){
            console.log(`Hi ${name}. plz explain what is the ${topic}`);
        }
         else if(name === "ankur"){
            console.log(`Hi ${name}. plz explain what is the ${topic }`)
        } else{
            console.log("welcome")
        }
    
    }
    }
    interwiewQuestion("vinod")("UI");
    interwiewQuestion("ankur")("web developer");
