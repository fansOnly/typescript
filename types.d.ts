export as namespace foo;
export default foo;

declare function foo(): string;

declare namespace foo {
    const bar: string;
}

// declare global {
//     interface string {
//     }
// }