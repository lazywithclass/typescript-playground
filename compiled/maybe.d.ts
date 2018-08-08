declare const enum MaybeType {
    JUST = 0,
    NOTHING = 1
}
interface Just<T> {
    kind: MaybeType.JUST;
    value: T;
}
interface Nothing {
    kind: MaybeType.NOTHING;
}
declare type Maybe<T> = Just<T> | Nothing;
declare const Just: <T>(val: T) => Just<T>;
declare const Nothing: () => Nothing;
declare const maybeDivide: (a: number, b: number) => Maybe<number>;
declare let result: Maybe<number>;
declare const unpacker: <T>(packed: Maybe<T>, defaultValue: T) => T;
