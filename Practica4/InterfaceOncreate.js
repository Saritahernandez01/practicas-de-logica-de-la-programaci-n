const LeerLine = require("readline")
const VehicleOncreate = require("./VehicleService")


const InterfazConsola = LeerLine.createInterface({
    input : process.stdin,
    output : process.stdout
})


InterfazConsola.question("Porfavor ingrese el modelo del vehiculo", (model) => {

    InterfazConsola.question("Porfavor ingrese el color del vehiculo", (color) => {

        InterfazConsola.question("Porfavor ingrese el año del vehiculo", (year) => {

            InterfazConsola.question("Por favor ingrese el estado del vehiculo", (isFuncional) => {

                InterfazConsola.question("Por favor ingrese la marca del vehiculo", (brand) => {

                  console.log(VehicleOncreate(model, color, year, isFuncional, brand));
                  InterfazConsola.close ()

                })
            })
        })
    })

})
