let student ={
    name : "David Rayy",
    sclass : "VI",
    rollno : 12
};
console.log(Object.values(student));

const data = {
  firstName: "John",
  lastName: "Doe",
  email: "doe@gmail.com",
};
const output = Object.entries(data).map(([key, value]) => ({
  key,
  value,
}));

console.log(output);
class Cat {
  constructor(
    name,
    tiredness = 0,
    hunger = 10,
    loneliness = 10,
    happiness = 0
  ) {
    this.name = name;
    this.tiredness = tiredness;
    this.hunger = hunger;
    this.loneliness = loneliness;
    this.happiness = happiness;
  }
  normalizeValue(val) {
    if (val < 0) {
      return 0;
    }
    if (val > 10) {
      return 10;
    }
    return val;
  }
  play(val = 1) {
    this.loneliness = this.normalizeValue(this.loneliness - val);
    this.happiness = this.normalizeValue(this.happiness + val);
  }
  feed(val = 1) {
    this.hunger = this.normalizeValue(this.hunger - val);
  }
  pet(val = 1) {
    this.loneliness = this.normalizeValue(this.loneliness - val);
  }
  sleep(val = 1) {
    this.tiredness = this.normalizeValue(this.tiredness - val);
  }
  getStatus() {
    return {
      tired: this.tiredness > 5,
      hungry: this.hunger > 5,
      lonely: this.loneliness > 5,
      happy: this.happiness > 5,
    };
  }
  toString() {
    const status = this.getStatus();

    return (
      Object.keys(status)
        .map((k) => {
          const state = status[k] ? "is" : "is not";
          return `${this.name} ${state} ${k}`;
        })
        .join(". ") + "."
    );
  }
}

const paws = new Cat("paws");
paws.play(6);
paws.feed(8);
console.log(paws.toString());