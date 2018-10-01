// lambda calculus syntax
// Txy = yx

type Funx = (...args : any[]) => any

const T = (x: any) => (ys: Funx[]) => ys.reverse().reduce((prev, y) => y(prev), x)

const add1 = (n: number) => n + 1
const mul2 = (n: number) => n * 2

const succDoubled = T(0)([mul2, add1])

// console.log(succDoubled) // 2
// not really understanding why it is useful tho!