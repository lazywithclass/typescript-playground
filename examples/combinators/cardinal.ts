// lambda calculus syntax
// Cfxy = fyx

const C = (f: any) => (a: any) => (b: any) => f(b)(a)
