// ECMA6
import operaciones from '../utils'
//const operaciones = require("../utils")

describe ('Funciones de operaciones',() =>{
    test('Suma',()=>{
        const inputA = 3
        const inputB = 5

        const output = 8

        expect(operaciones.suma(inputA,inputB)).toBe(output)
    })

    test('resta',()=>{
        const inputA = 10
        const inputB = 6

        const output = 4

        expect(operaciones.resta(inputA,inputB)).toBe(output)
    })

})