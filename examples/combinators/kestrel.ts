// https://glebec.github.io/lambda-talk/
// https://stackoverflow.com/a/38738264/57095
// https://github.com/raganwald-deprecated/homoiconic/blob/master/2008-10-29/kestrel.markdown#readme

// lambda calculus syntax
// Kxy = x

const notReallyK = (k: any) => (func: Function) => { func(); return k }

// why is it useful?
// I want to map a constant function to a list
let listOfEmptyStrings = ['', '', '']
let listOfAs = listOfEmptyStrings.map(notReallyK(() => {})(() => {}))
// console.log(listOfAs)

// ...or think about side effects
let print = (a: any) => console.log('about to loop')
let scream = (s: any) => s.toUpperCase() 
let listOfStrings = ['hello', 'what', 'a', 'beautiful', 'day']
// let screaming = listOfStrings.map(notReallyK(scream)(print))
// console.log(screaming)

// tap :: (a -> b) -> a -> a
const tap = (func: Function) => (a: any) => {
  func(a)
  return a
}

// while K combinator is just
const K = (k: any) => (_: any) => k

// returning
type FunxReturning<T> = (...args : any[]) => T
const returning = function<T>(funx: FunxReturning<T>) {
  let args = arguments
  return (sideEffects?: Function): T => {
    let result = funx.apply(args)
    if (sideEffects) sideEffects(result)
    return result
  }
}

let arr = [ 1, 2, 3 ]
const double = (n: number) => n * 2
// returning(() => arr.map(double))
// way easier to add / remove logging
// returning(() => arr.map(double))((asd: Array<number>) => console.log('result: ', asd))
