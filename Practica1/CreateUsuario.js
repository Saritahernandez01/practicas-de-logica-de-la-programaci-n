const { log } = require("console");
const leerLine = require ("readline");

const interfazCosola = leerLine.createInterface({
    input : process.stdin,
    output : process.stdout
})


interfazCosola.question("Por favor ingrese el nombre completo", (nombre)=> {

    if (nombre.length < 3) {
        console.log("Porfavor ingrese un nombre valido de almenos 3 caracteres");
    interfazCosola.close();
    return;
    }
interfazCosola.question("Porfavor ingrese su correo: " , (correo)=>{
    if (!correo.includes("@")){
        console.log("Porfavor ingrese un correo valido");
        interfazCosola.close();
        return;
    }

    interfazCosola.question("Porfavor ingrese la contraseña: ", (password)=>{
        if (password.length < 8){
            console.log ("La contraseña debe ser mayor a 8 caracteres");
            interfazCosola.close()
            return;
        }
    console.log("Usuario creado exitosamente");
    console.log (`nombre:${nombre}\ncorreo:${correo}\nPassword:${password}`);
    interfazCosola.close()
}) 
})
})