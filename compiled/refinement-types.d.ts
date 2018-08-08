declare class NonZeroNumberTag {
    private __kind;
}
declare type NonZeroNumber = number & NonZeroNumberTag;
declare const isNonZeroNumber: (n: number) => n is NonZeroNumber;
declare const divide: (a: number, b: NonZeroNumber) => number;
declare let denominator: number;
declare const assertNever: (x: never) => never;
interface Square {
    kind: "square";
    size: number;
}
interface Circle {
    kind: "circle";
    radius: number;
}
declare type Shape = Square | Circle;
declare const area: (s: Shape) => number;
