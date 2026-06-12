// HOW TO RUN: tsc index.ts -> node index.js

var id: number = 1;
console.log(id);

//types(string, number, boolean, any, void, null, undefined)============================
let numberOfPlaylist: any = 10;
let list: string | number | boolean = 10;
list = 11;
list = "eleven";
list = true;

//functions(return type, parameter type)================================================
function sayHi1() {
  // void
  console.log("Hi");
}
function sayHi() {
  // string
  return "Hi";
}

function sayHi3(name: string): string {
  // string
  return `Hi ${name}`;
}

function addition(num1: number, num2: number): string {
  return `Total: ${num1 + num2}`;
}
addition(10, 20);

function multiply(num1: number, num2: number = 20): number {
  return num1 * num2;
}
multiply(10);

//Objects=============================================================================
type Name = {
  firstName: string;
  lastName: string;
};
type User = {
  name: Name;
  age: number;
  isAdmin: boolean;
};

const user1: User = {
  name: {
    firstName: "Sayem",
    lastName: "Hossain",
  },
  age: 25,
  isAdmin: true,
};
//function with object parameter============================================================

function sayDetails1(obj: DetailsType): string {
  let { firstName, lastName: lastName, age } = obj;
  return `My name is ${firstName} ${lastName} and I am ${age} years old.`;
}

type NameType = {
  firstName: string;
  lastName: string;
};
type AgeType = {
  age: number;
};
type DetailsType = NameType & AgeType;

let myuser: DetailsType = {
  firstName: "Abu",
  lastName: "Sayem",
  age: 10,
};
sayDetails1(myuser);

//Arrays====================================================================================

//undefined array
let arr: undefined[] = [];
// arr.push("a"); error

//string array
let arr2: string[] = ["a", "b", "c"];

//arr3and arr4 elements are either string or number array(jekono ekta)
let arr3: number[] | string[] = [1, 2, 3];
let arr4: number[] | string[] = [1, 2, 3];

//Union ( | ) arr5 elements are string or number or boolean (sobgulo ekshatheo hote parbe)
let arr5: (string | number | boolean)[] = [1, 2, 3, "a", "b", "c", true, false];

let day: "Saturday" | "Sunday" | "Monday" | "Tuesday";
day = "Saturday";

//type narrowing=============================================================================

function age(age: number | string): void {
  let currentAge;
  if (typeof age === "string") {
    currentAge = Number(age) - 2;
  } else {
    currentAge = age - 2;
  }
}
age(25);
age("25");

// interface  Part 1================diff between type and interface==================================
type People1 = {
  firstName: string;
  lastName: string;
  age: number;
};
// type People1 = {
//     email: string;
// } // error: Duplicate identifier 'People1'

interface People {
  firstName: string;
  lastName: string;
  age: number;
}
interface People {
  email: string;
  fullName(): string;
}

let Sayem1: People = {
  firstName: "Abu",
  lastName: "Sayem",
  age: 10,
  email: "abu.sayem@example.com",
  fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
};

// interface Part 2== inherit , multi inherit================================================
interface Family {
  isWife: boolean;
}
interface Employee extends People, Family {
  designation: string;
  salary: number;
}

let Sayem2: Employee = {
  firstName: "Abu",
  lastName: "Sayem",
  age: 10,
  email: "abu.sayem@example.com",
  fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
  designation: "Software Engineer",
  salary: 50000,
  isWife: false,
};

// class=============================================================================
class Computer {
  name: string;
  #ssd: number;
  private _processor: string;
  constructor(
    name: string,
    public ram: number,
    ssd: number,
    processor: string,
    private isGaming: boolean,
  ) {
    this.name = name;
    this.ram = ram;
    this.#ssd = ssd;
    this._processor = processor;
    this.isGaming = isGaming;
  }
  private getDetails(): string {
    return `Name: ${this.name}, RAM: ${this.ram}GB, SSD: ${this.#ssd}GB, Processor: ${this._processor} Gaming: ${this.isGaming}`;
  }
  get ssdDetails(): number {
    return this.#ssd;
  }
  set ssdDetails(value: number) {
    this.#ssd = value;
  }
}

//shortcut
class Computer2 {
  constructor(
    public name: string,
    public ram: number,
    public _ssd: number,
    private _processor: string,
    private _isGaming: boolean,
  ) {
    this.name = name;
    this.ram = ram;
    this._ssd = _ssd;
    this._processor = _processor;
    this._isGaming = _isGaming;
  }
  private getDetails(): string {
    return `Name: ${this.name}, RAM: ${this.ram}GB, SSD: ${this._ssd}GB, Processor: ${this._processor} Gaming: ${this._isGaming}`;
  }
  get ssdDetails(): number {
    return this._ssd;
  }
  set ssdDetails(value: number) {
    this._ssd = value;
  }
}

// interface implementation=============================================================================
interface CoumputerInterface {
  name: string;
  ram: number;
}
interface DetailsInterface {
  aboutComputer(): void;
}

class MyCoumputer implements CoumputerInterface, DetailsInterface {
  constructor(
    public name: string,
    public ram: number,
  ) {} // this.name = name; this.ram = ram; no need to write Because in TypeScript, when you put an access modifier (public, private, protected, or readonly) before constructor parameters, TypeScript automatically:
  aboutComputer(): void {
    console.log(`Name: ${this.name}, RAM: ${this.ram}GB`);
  }
}
let myComputer1 = new MyCoumputer("Dell", 16);
myComputer1.aboutComputer();

//Generics====================Generic vs any=========================================================

//any
function Getage1(age: any): any {
  return Number(age);
}
Getage1("Ten"); // dicchi string , return korche number(problem)

//Generics
function Getage<DynamicType>(age: DynamicType): DynamicType {
  // return Number(age); will show error
  return age;
}
Getage<string>("25");
Getage<number>(25);
Getage<boolean>(true);

//Gemerics 2====================================================
function combineObj<T extends object, U extends object>(obj1: T, obj2: U) {
  return { ...obj1, ...obj2 };
}
// combineObj({ name: "sayem", age: 10 }, "Hello"); // error 2nd parameter should be object
combineObj({ name: "sayem", age: 10 }, { message: "Hello" });
