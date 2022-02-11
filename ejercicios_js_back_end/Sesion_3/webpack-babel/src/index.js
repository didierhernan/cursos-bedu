import { suma } from './utils';
import {compact} from './utils'
import './app.css'

//Usando suma
console.log('suma: 4 + 10 = ', suma(4, 10));

//Usando Compact
const originalArray = [0, 1, false, 2, '', 3]
const compactedArray = compact(originalArray)

console.log(`
Here is the original array: ${originalArray}
And here is the compacted array: ${compactedArray}
`)
