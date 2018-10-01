const noop = () => {}

const funx = () => {
  let answer = 42
  return answer
}

// if you need to change elements of an array you want Array.map, not Array.forEach
// if you happen to have nested arrays and you want to change elements
// and get an array you want _.flatMap

// computed property types
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer#Computed_property_names
let random = Math.random()
let randomResult = { [random]: `now was ${random}` }
// without doing
// let random = Math.random()
// let randomResult = {}
// randomResult[random] = `now was ${random}` 

// if we don't want to use return but we want to return 
// an object then we must surround it with parens...
const functionThatReturnsAnObject = () => ({ answer: 42 })
// otherwise it will be treated as a label, like answer here
const watLabel = () => { answer: 42 }

let funx1 = () => {}, funx2 = () => {}, funx3 = () => {}
// no need to repeat key and value if they are the same
let funxs = { funx1, funx2, funx3 }

type A = (x: string) => any
function test(funx: A) { }

// given a function as type Original you're allowed to pass a function of type
// Another, as long as Another is assignable to Original
// https://github.com/Microsoft/TypeScript-Handbook/blob/master/pages/Type%20Compatibility.md#comparing-two-functions
type B = () => any
let b: B = () => {} 
test(b)

type C = (x: number) => any
let c: C = (x: number) => {} 
// errors as C is not assignable to A
// test(c)

// same for B
type D = (x: string) => any
let d: D = (x: string) => {} 
test(d)
