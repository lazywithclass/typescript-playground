// showing what we could do with refinement types
// source https://medium.com/@lemoine.benoit/refinement-types-in-typescript-or-how-to-check-that-a-number-must-be-positive-at-compile-time-342c1e6e90e

// using declare here because we don't want this class to exist at runtime
// it also means that we will not be able to do new NonZeroNumberTag
declare class NonZeroNumberTag {
  private __kind: 'nonZeroNumber';
}

// & is type intersection https://www.typescriptlang.org/docs/handbook/advanced-types.html#intersection-types
// `Cat & Pettable` means Cat and Pettable
// which is the opposite of `Cat | Dog` which means Cat or Dog
type NonZeroNumber = number & NonZeroNumberTag;

const isNonZeroNumber = (n: number): n is NonZeroNumber => n !== 0
const divide = (a: number, b: NonZeroNumber) => a / b

// `1` is not a `NonZeroNumber` for TypeScript for some reason...
let denominator = 0;
if (isNonZeroNumber(denominator)) { // notice `denominator` type here...
  divide(1, denominator);           // versus what we have here
} else {
  // no no
  // divide(1, denominator);
}

// Why should I go through all this mess
// why can't I just write an `isNonZeroNumber` untyped function?
// Exhaustiveness
const assertNever = (x: never): never => { throw new Error('never') }
interface Square { kind: "square"; size: number; }
interface Circle { kind: "circle"; radius: number; }
type Shape = Square | Circle;
const area = (s: Shape) => {
  switch (s.kind) {
    // without any of the following lines
    // we get a compile time error
    case "square": return s.size * s.size;
    case "circle": return Math.PI * s.radius ** 2; 
    default: return assertNever(s);
  }
}
// if we were to add another type to Shape and not add it 
// to the switch we would get a compiler error
