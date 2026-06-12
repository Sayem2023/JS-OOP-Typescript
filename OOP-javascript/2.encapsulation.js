class Computer {
  #warrenty; // Private property using # syntax
  constructor(name, model, warrenty) {
    this.name = name;
    this.model = model;
    this.#warrenty = warrenty;
  }
  #privateMethod() {
    console.log("This is a private method");
  }
  aboutComputer() {
    return `Name: ${this.name}, Model: ${this.model}, Warranty: ${this.#warrenty} and ${this.#privateMethod()}`;
  }
  getWarrenty() {
    return this.#warrenty;
  }
  setWarrenty(newWarrenty) {
    this.#warrenty = newWarrenty;
  }
}
const dell = new Computer("Dell", "Inspiron", "1 year");
console.log(dell.aboutComputer());
dell.setWarrenty("2 years");
console.log(dell.getWarrenty()); // Accessing private property using getter
dell.warrenty = "3 years"; // This will not change the private property
