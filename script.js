// //Un objeto es toda funcionalidad que tenga metodos y/o propiedadas

// //Metodos: son funciones asignadas a objetos

// // [2, 3].push()

// // Propiedad(atributo): son valores asignados a objetos

// // [2, 3].length

// //Las clases son plantillas para crear objetos. Todos los objetos en JS se crean a partir de clases

// //class === plantilla === template

// // class Student {

// //   constructor(){
// //     this.name = 'Jaime'
// //   }

// //   saludar(){
// //     console.log('Hola a toda la clase!!')
// //   }
// // }

// //Sintaxis para crear un objeto a partir de la clase Student
// const x = new Student()

// // x.saludar()

// // const prueba = []

// class Array(){
//   constructor(){
//     this.length = {...}
//   }

//   push(){
//     {...}
//   }

//   splice(){
//     {...}
//   }

//   join(){
//     {...}
//   }
// }

// const prueba = new Array()

// console.log(prueba)

// let x = {name: 'Jaime'}

// x.toString('name')

// console.log(x)

// console.log(5.toString())

// const prueba = new Number()

// const prueba = new Number(5)
// const prueba = 5

// console.log(prueba.toString())

// class Player {
//   constructor(name){
//     this.name = name
//     this.hand = []
//     this.cardsValue = 0
//   }
// }

// class Game {
//   constructor(){
//     this.players = []
//     this.winner = {}
//   }

//   x(){
//     console.log('Holaaaaa')
//   }

//   y(){
//     this.x()
//   }

//   addPlayers(){
//     for(let argument of arguments){
//       this.players.push(argument)
//     }
//   }

//   dealCards(){
//     this.players.forEach((player)=>{
//       if(player.name === 'Jaime'){
//         player.hand.push(10)
//         player.hand.push(10)
//       } else {
//         player.hand.push(Math.floor(Math.random() * 10) + 1)
//         player.hand.push(Math.floor(Math.random() * 10) + 1)
//       }
//     })
//   }

//   getValueOfCards(){
//     this.players.forEach((player)=>{
//       player.cardsValue = player.hand[0] + player.hand[1]
//     })
//   }

//   getWinner(){
//     this.players.reduce((acc, player)=>{
//       if(player.cardsValue > acc){
//         acc = player.cardsValue
//         this.winner = player
//       }
//       return acc
//     }, 0)
//   }

//   showPlayers(){
//     this.players.forEach((player)=>{
//       console.log(`${player.name}: ${player.hand[0]}/${player.hand[1]}`)
//     })
//   }

//   showWinner(){
//     console.log(`Congrats ${this.winner.name}! You won this round with ${this.winner.cardsValue} points!`)
//   }
// }

// const game = new Game()

// const createAndAddPlayers = function(){
//   for(let argument of arguments){
//     const player = new Player(argument)
//     game.addPlayers(player)
//   }
// }

// createAndAddPlayers('Jaime', 'Jimena', 'Francisca')
// game.dealCards()
// game.getValueOfCards()
// game.getWinner()
// game.showPlayers()
// game.showWinner()

class Animal {
  constructor(name) {
    this.fur = true;
    this.name = name;
  }

  saludar() {
    console.log("Wowowowo");
  }
}

class Mamifero extends Animal {
  constructor(name) {
    super(name); //traeme todo lo que tiene Animal
  }

  parir() {
    console.log("Directamente de la madre");
  }
}

const animal = new Mamifero("Misifu");

animal.parir();
