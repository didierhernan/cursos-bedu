//ECMA6
import compact from "../compact";
//const compact = require("../compact")

describe('Funcion Compact' , () => {
    //test 1
    test('Esto remueve los valores en falso', () => {
        //Input
        const input = [0 , 1 , false , 2 , '', 3];

        //Outputt
        const output = [1, 2, 3];

        expect(compact(input)).toEqual(output)
    })

    test('Verificacion que no sea un array vacio',() => {
        //Output
        const outputV = () =>{
            throw new Error('Array cannot be empty');
        }

        expect(() => {
            compact([])
        }).toThrow()
    })
  
})