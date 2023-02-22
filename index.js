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