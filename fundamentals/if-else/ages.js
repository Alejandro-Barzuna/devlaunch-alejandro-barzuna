/*
El programa solicita al usuario su edad con prompt-sync, la convierte a número y
utiliza if-else para clasificar

0-2 años: "You are a baby"
3-13 años: "You are a child"
14-17 años: "You are a teenager"
18-29 años: "You are a young adult"
30-60 años: "You are an adult"
Mayor a 60 años: "You are an elderly"

Si la edad es menor a 5, muestra: "The institution does not support your age, please try again."
Es una forma clara
*/

const prompt = require('prompt-sync')()

const age = parseInt(prompt('Por favor indique su edad: '))

// const message = (age >= 0 && age<=2)
//     ?'You are a baby'
//     :(age >= 3 && age <= 13)
//         ?'You are a child'
//         :(age >= 14 && age <= 17)
//             ?'You are a teenager'
//             :(age >= 18 && age <= 29)
//                 ?'You are a young adult'
//                 :(age >= 30 && age <= 60)
//                     ?'You are an adult'
//                     :(age > 60)
//                         ?'You are an elderly'
//                         :null
// console.log(message ? message: 'The institution does not support your age, please try again.')                 
        

if (age>=0 && age<=2){
    console.log(`You are a baby\nThe institution does not support your age, please try again.`)
}   else if (age >= 3 && age <= 13){
        if (age<5) {
            console.log(`You are a child.\nThe institution does not support your age, please try again.`)
        } else{
            console.log(`You are a child`)
        }
            
}   else if (age >= 14 && age <= 17){
    console.log(`You are a teenager`)
}   else if (age >= 18 && age <= 29){
    console.log(`You are a young adult`)
}   else if (age >= 30 && age <= 60){
    console.log(`You are an adult`)
}   else if (age>60){
        console.log('You are an elderly')
}   else {
        console.log('The institution does not support your age, please try again.')
}
// si no hago las comparaciones, cuando pongo el negativo igual sale el texto del grupo