class Computer {
  constructor(name, model) {
    this.name = name;
    this.model = model;
  }
  aboutComputer() {
    return `Name: ${this.name}, Model: ${this.model}`;
  }
}

class HP extends Computer {
  constructor(name, model, warrenty) {
    super(name, model); // Call the parent class constructor
    this.warrenty = warrenty;
  }
  aboutWarrenty() {
    return `Warrenty: ${this.warrenty}`;
  }
}
const hp = new HP("HP", "Model Z", "2 years");
