let total: number = 10;
let lesson: string = "TypeScript";
let isActive: boolean = true;
let empty: null = null;
let undef: undefined = undefined;

// let age = 25;
let age: number = 25;

// age = "10";

// const array: number[]= [1, 2, 3, 4, 5]
// array.push('10');

// const user: {name: string, age: number} = {
//     name: "Sara",
//     age: 35,
// }

// type User = {
//   name: string;
//   age: number | string;
// };

// const user: User = {
//   name: "Sara",
//   age: 35,
//   isActive: true,
// };

// UserActivation.age = "15";
// UserActivation.name = 1;

// type eventType = "lesson" | "deadline";

// const event: eventType = "homework";

// let age: any = 10;
// age = "Bob";
// age = false;

// let name: unknown = 12;
// name = "Bob";
// name.toFixed();

// type size = "small" | "medium" | "large";

// enum Sizes {
//   small = "small",
//   medium = "medium",
//   large = "large",
// }

// const button: size = "large";

// const button2: Sizes = Sizes.large;

// function add(num1: number, num2: number): string {
//   return `${num1}` + `${num2}`;
// }

// console.log(add(2, 3));

// function add(num1: number, num2: number): void {
//   console.log(num1 + num2);
// }

// add(2, 3);

// type User = {
//   name: string;
// };

// function great(user: User): void {
//   console.log(`Hello ${user.name}`);
// }

// type User = {
//   name: string;
//   age: number;
//   hobby: string;
// };

// function userConstructor(name: string, age: number, hobby: string): User {
//   return {
//     name,
//     age,
//     hobby,
//   };
// }

// type Car = {
//   color: string;
//   price: number;
//   currency: string;
//   start: (color: string) => {};
// };

// const Car = {
//   color: "red",
//   price: 1000,
//   currency: "UAH",
//   start(color) {
//     console.log("Start" + this.color);
//   },
// };

type User = {
  name: string;
  age: number;
  role?: string;
};

const user: User = {
  name: "Sara",
  age: 30,
};

const admin: User = {
  name: "Max",
  age: 23,
  role: "Admin",
};
