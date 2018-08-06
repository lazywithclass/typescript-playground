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

type Maybe<T> = Just<T> | Nothing

const Just = <T>(val: T): Just<T> => ({ kind: MaybeType.JUST, value: val })
const Nothing = (): Nothing => ({ kind: MaybeType.NOTHING })

// trying different approaches to pattern matching,
// ideally I would like something along the lines of
// not really Haskell syntax, more or less but you get the idea
// maybeDivide = (Num n) => n -> n -> Maybe Num
// maybeDivide _ 0 = Nothing
// maybeDivide a b = a / b 

const maybeDivide = (a: number, b: number): Maybe<number> => {
  switch (b) {
    case 0:  return Nothing()
    default: return Just(a / b)
  }
}

// use it like this
let result = maybeDivide(10, 0)
switch (result.kind) {
  case MaybeType.JUST:    console.log(result.value)
  case MaybeType.NOTHING: console.log('error division by 0') // TODO what do we do here?
}