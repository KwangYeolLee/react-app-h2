// const message = "Hello";
// let userName = "User";

function moveTo(direction: "left" | "right" | "up" | "down") {
  console.log(`move to ${direction}`);
}
moveTo("left"); // OK
// moveTo("rihgt"); // ERROR
moveTo("right"); // OK
