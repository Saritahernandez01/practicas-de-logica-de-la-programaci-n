// let name = "Sarita"; //String --- cadena de texto

// let age = 19.5 //Number puede ser que sea un dato numerico o un dato float (DECIMAL) 


// let number = 20.22 //float or double



// //en linea o no esta en linea

// let isActive = true //true or false 

// isActive = false



// const siEstaActivo = () => {
//     if(isActive == true){
//         return 'en linea'
//     }else{
//         return 'ultima vez 02 PM'
//     }
// }

// console.log(siEstaActivo());

const fruits = [
    "apple",
    "pear",
    "uva",
    1
]



fruits.forEach(element =>{
    console.log(element);
});



console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[3]);



const UserInfo = {
    name: "Sarita",
    age : 19,
    isActive : true,
    favoritecolor : ["blue","verde"]

} 
const {name, age, isActive, favoritecolor} = UserInfo

console.log(name);
console.log(age);
console.log(isActive);

favoritecolor.forEach(element => {
    console.log(element);
});