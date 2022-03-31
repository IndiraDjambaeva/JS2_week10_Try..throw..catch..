// Этот код не работает
// greet();
// console.log("Hello2");
// console.log("Hello2");
// console.log("Hello2");
// console.log("Hello2");

// //ex1
// try {
//   greet();
// } catch (error) {
//   console.log(error);
// }

// console.log("hello2");


// //ex2
// try {
//   greet();
// } catch (error) {
//   console.log(error.message);
// }

// console.log("hello2");

// //ex3
// try {
//   greet();
// } catch (error) {
//   console.log(error.name);
// }

// console.log("hello2");


// //ex4
// try {
//   greet();
// } catch (error) {
//   console.log(error.name);
// } finally {
//   console.log("This is finally content");
// }

// console.log("hello2");


// //ex5
// try {
//   greet();
// } catch (error) {
//   console.log(error.name);
// } finally {
//   console.log("This is finally content");
// }

// console.log("hello2");

// function greet() {
//   console.log("Hello World!");
// }


// //ex6
// const user = { name: "John" };

// try {
//   if (!user.email) {
//     throw new SyntaxError("User does not have an email");
//   }
// } catch (error) {
//   console.log(error);
// }



//ex7
const user = { name: "John" };

try {
  if (!user.email) {
    throw new ReferenceError("User does not have an email");
  }
} catch (error) {
  console.log(error);
}