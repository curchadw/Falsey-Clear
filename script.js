//An exercise during FSM session clearinf falesy values from array
let array = [0, 1, 'hello', '*&^', false, 2, undefined, '', 3, null, 23, 109];

const falesy = (array) =>{
   const newValues = []
   for (let i = 0; i < array.length; i++){
     if (!!array[i]){
       newValues.push(array[i])
     }
     
   }
   return newValues
  
}


console.log(falesy(array))