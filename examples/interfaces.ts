// use interfaces when you want to extend behaviour
// or when you want it to be implemented
interface Pettable {
  areas: String[]
}
interface Washable {}
interface Cat extends Pettable {
  legs: number
  inBox: boolean
}
interface Dog extends Pettable, Washable {
  legs: number
  onLeash: boolean
}

// it's a good idea to document code with interfaces, showing which types come and
// go through the application

// use types when you want to combine
type Animal = Cat | Dog

class Maggie implements Cat {
  legs = 4
  inBox = true
  areas = [ 'head', 'neck' ]
}

class Lassie implements Dog {
  legs = 4
  onLeash = false
  areas = [ 'head', 'neck', 'back', 'tummy' ]
}

class Robot {
  legs = 2
}

const pet = (animal: Animal) => {}
pet(new Maggie())
// pet(new Robot())
