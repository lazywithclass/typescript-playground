declare const funx: () => number;
declare const functionThatReturnsAnObject: () => {
    answer: number;
};
declare const watLabel: () => void;
declare let funx1: () => void, funx2: () => void, funx3: () => void;
declare let funxs: {
    funx1: () => void;
    funx2: () => void;
    funx3: () => void;
};
declare type A = (x: string) => any;
declare function test(funx: A): void;
declare type B = () => any;
declare let b: B;
declare type C = (x: number) => any;
declare let c: C;
declare type D = (x: string) => any;
declare let d: D;
