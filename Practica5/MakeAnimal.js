const leerLinea = require("readline")
const AnimalFactory = require("./AnimalFactory")

const InterfazConsola = leerLinea.createInterface({
    input : process.stdin,
    output : process.stdout
})


InterfazConsola.question("Porfavor igrese el nombre del animal",(name)=>{

InterfazConsola.question("Ingrese la edad del animal",(age)=>{
InterfazConsola.question("Ingrese el color del animal", (color)=>{
InterfazConsola.question("Porfavor ingrese la raza del animal",(raza)=>{

 console.log(AnimalFactory(name, age, color, raza));
 InterfazConsola.close()
} )
        })
    })


})

