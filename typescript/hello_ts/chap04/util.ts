function sayHello(name: string) {
  console.log(`Hello, ${name}`);
}
// 2개 이상 export 할 수 있다.
export const stringValue = "Test Value";
export const numberValue = 10;
// default 는 하나만
export default sayHello;
