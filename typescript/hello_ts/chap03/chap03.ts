// function test(arg: { id: number; name: string }) {
//   console.log(arg.id, arg.name);
// }
// const user1 = { id: 1, name: "user1" };
// test(user1);
// test({ id: 1, name: "user2" });
// test({ name: "user2", id: 1 });

// type Password = string;

// function test(obj: { readonly id: number; value: string }) {
//   // obj.id = 1; // ERROR
//   console.log(obj.id);
// }

// const obj = { id: 1, value: "hello" };
// test(obj);

class Parent {
  func() {
    console.log("parent function");
  }
  arr = () => {
    console.log("parent arrow function");
  };
}
class Child extends Parent {
  test() {
    super.func(); // OK
    this.arr(); // ERROR
  }
}
