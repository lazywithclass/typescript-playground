// showing a possible way to avoid checking for undefined
// and returning something that makes sense domain-wise

// adapted from https://medium.com/@KevinBGreene/typescript-enums-and-polymorphism-with-type-matching-fc3dc74b031c

const enum MaybeType {
  JUST,
  NOTHING
}

interface Just<T> {
  kind: MaybeType.JUST;
  value: T
}

interface Nothing {
  kind: MaybeType.NOTHING
}

// this could be parameterised also to have something else
// instead of Nothing, like Number for a default value for example
type Maybe<T> = Just<T> | Nothing
// ...the parameterised version would look like this
type MaybeP<T, N = Nothing> = Just<T> | N

const Just = <T>(val: T): Just<T> => ({ kind: MaybeType.JUST, value: val })
const Nothing = (): Nothing => ({ kind: MaybeType.NOTHING })

// ideally I would like something along the lines of the following
// maybeDivide = (Num n) => n -> n -> Maybe n
// maybeDivide _ 0 = Nothing
// maybeDivide a b = Just a / b 

// the problem I have with the following approach is that switch is not
// an expression, so I can't return that
// but I love switch's exhaustiveness and relative simplicity
const maybeDivide = (a: number, b: number): Maybe<number> => {
  switch (b) {
    case 0:  return Nothing()
    default: return Just(a / b)
  }
}

// for a simple two elements return we could always use
// the ternary operator
const maybeDivide2 = (a: number, b: number): Maybe<number> => {
  return b === 0 
    ? Nothing()
    : Just(a / b)
}

// use it like this
let result: Maybe<number> = maybeDivide(10, 0)
switch (result.kind) {
  case MaybeType.JUST:    console.log(result.value)
  case MaybeType.NOTHING: console.log('error division by 0') // TODO what do we do here?
}

// cool thing is that the info is encoded in types

// which could become somethig like
const unpacker = <T>(packed: Maybe<T>, defaultValue: T): T => {
  switch (packed.kind) {
    case MaybeType.JUST:    return packed.value
    case MaybeType.NOTHING: return defaultValue
  }  
}

// ok but why?
// encode the information about data in the type, not in the value!
// you get type safety, documentation, plus DRY as you will be removing lots
// of null checks due to uncertainty