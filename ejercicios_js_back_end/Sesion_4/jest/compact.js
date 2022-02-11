//ECMA6
/*export const compact = (array) => 
if(!array.length) throw Error('Array cannot be empty')
array.filter((element) => !!element)*/

//Versiones anteriores
function compact(array){
    if(!array.length){
        throw Error('Array cannot be empty')
    } 
    
    return array.filter(function(element){
        return !!element
    })
}

module.exports = compact