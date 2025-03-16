import readline from "readline"
import { sumar } from "./sumar"

const InterfazConsola = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

InterfazConsola.question("Por favor ingrese el primer número: ", (num1) => {
    console.log("")

    InterfazConsola.question("Por favor ingrese el segundo número: ", (num2) => {
        console.log("")

        let numero1: = parseFloat(num1)
        let numero2: numbero2 = parseFloat(num2)

        console.log(`Su suma es: ${sumar(numero1, numero2)}\n`)

        InterfazConsola.close()
    })
})
