const funx = () => {
  let answer = 42
  return answer
}

// if we don't want to use return but we want to return 
// an object then we must surround it with parens
const functionThatReturnsAnObject = () => ({ answer: 42 })
// answer here is treated as a label
const watLabel = () => { answer: 42 }

let funx1 = () => {}, funx2 = () => {}, funx3 = () => {}
// no need to repeat key and value if they are the same
let funxs = { funx1, funx2, funx3 }

type A = (x: string) => any
function test(funx: A) { }

// given a function as type Original you're allowed to pass a function of another type
// Another, as long as Another is assignable to Original
// https://github.com/Microsoft/TypeScript-Handbook/blob/master/pages/Type%20Compatibility.md#comparing-two-functions
type B = () => any
let b: B = () => {} 
test(b)

type C = (x: number) => any
let c: C = (x: number) => {} 
// error as C is not assignable to A
// test(c)

// same for B
type D = (x: string) => any
let d: D = (x: string) => {} 
test(d)
