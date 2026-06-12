// 1. constructor function ===============================================
const Computer = function (name, model) {
  this.name = name;
  this.model = model;
};
//evabe prototype e method add korle object er moddhe function thakena na, sudhu reference thake. eta memory efficient
Computer.prototype.aboutComputer = function () {
  return `Name: ${this.name}, Model: ${this.model}`;
};
const dell = new Computer("Dell", "Model Y");
console.log(dell);

// 2. class  ============================================================
class ComputerClass {
  constructor(name, model) {
    this.name = name;
    this.model = model;
  }
  aboutComputer() {
    return `Name: ${this.name}, Model: ${this.model}`;
  }
}
const hp = new ComputerClass("HP", "Model Z");

//static method Belongs to the Computer class itself.
//Does NOT belong to objects created from the class.
// Suppose you want to know how many computers have been created.
class Computer1 {
  static count = 0;

  constructor(name) {
    this.name = name;
    Computer1.count++;
  }

  static getCount() {
    return Computer1.count;
  }
}

new Computer1("Dell");
new Computer1("HP");

console.log(Computer1.getCount()); // 2

//static 2 ====how to access object data into static method=============
class Computer2 {
  constructor(name, model) {
    this.name = name;
    this.model = model;
  }
  //static method parameter holds the object reference, so we can access the object data using that parameter.
  static showInfo(computer) {
    console.log(computer.name);
    console.log(computer.model);
  }
}

const pc = new Computer2("Dell", "Inspiron");
Computer2.showInfo(pc);
// getter and setter ================================================
class Computer3 {
  constructor(name, model) {
    this._name = name; // Use underscore to indicate private property(but still accessible)
    this._model = model;
  }
  get name() {
    return this._name;
  }

  set name(newName) {
    this._name = newName;
  }
  get model() {
    return this._model;
  }
}
