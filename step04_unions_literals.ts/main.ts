
let myname: string | null;

myname = null;
console.log(myname);

myname = "M.Zayyan";
console.log(myname);

//myname = undefined; //Error
//myname = 12; //Error

let myAge: string | number;

myAge = 20;//narrowing
console.log(myAge);

//console.log(myAge.toLowerCase());//Error

myAge = "Dont Know";//narrowing
console.log(myAge);

console.log(myAge.toString()); // common to both types 
                               //can be called even without narrowing

console.log(myAge.toLowerCase());//Can be called on string 
                                //because of narrowing

let newAge = Math.random() > 0.6 ? "sheikh": 60;

//newAge.toLowerCase();//Error: Transpiler cannot narrow

if (newAge === "sheikh") {
    // Type of newAge: string
    newAge.toUpperCase(); // Can be called
}

if(typeof newAge === "string"){
    // Type of newAge: string
    newAge.toUpperCase(); // Can be called
}

typeof newAge === "string"
? newAge.toUpperCase() // Ok: string
: newAge.toFixed(); // Ok: number


let age: number | "died" | "unknown";

age = 80;//OK
age = "died";//OK
age = "unknown";//OK
//age = "living";//Error


// let zayan: "M.Zayyan";

// zayan = "zayan";
// //zia = "khan";//Error


let yourName = Math.random() > 0.6 ? "Zayan-sheikh": undefined;

if (yourName) {
    yourName.toUpperCase(); // Ok: string
}

//yourName.toUpperCase();//Error: Object is possibly 'undefined'.

yourName?.toUpperCase();//OK

// You can also define a type alias
type RawData = boolean | number | string | null | undefined;

let data: RawData;

// You can even combine them

type Id = number | string;

type IdMaybe = Id | undefined | null;