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


// TODO expand on default values for types
// directive<TScope extends IScope = IScope>