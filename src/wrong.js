// require("babel-polyfill");
window.onload = function () {
  const aaa = [1, 2, 3, 4];
  const bbb = {
    name: 'dd'
  }
  aaa.forEach((item, index) => {
    // console.log(item);
  });
  Object.assign(bbb, {age: 12});
  const fn = function(a, b) {
    return a + b;
  }
  console.log(fn(1, 2));
};
export const a = 123;
export var b = 456;
export function c() { }
export class d { }

export default function y() { }