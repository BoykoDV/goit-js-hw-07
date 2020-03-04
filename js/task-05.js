// 'use strict';

class Car {
  static maxSpeed = 200;
  static speed = 50;
  static isOn = true;
  static distance = 100;
  static price = 2000;
  static getSpecs(car) {
    if (car) {
      console.log(car);
    } else {
      console.log(
        `maxSpeed: ${this.maxSpeed}, speed: ${this.speed}, isOn: ${this.isOn}, distance: ${this.distance}, price: ${this.price}`
      );
    }
  }

  constructor(specs) {
    this.maxSpeed = specs.maxSpeed;
    this._price = specs.price;

    this.speed = 0;
    this.isOn = false;
    this.distance = 0;
  }

  get price() {
    return this._price;
  }
  set price(newPrice) {
    this._price = newPrice;
  }

  turnOn() {
    this.isOn = true;
  }

  turnOff() {
    this.isOn = false;
    this.speed = 0;
  }

  accelerate(value) {
    if (this.maxSpeed >= this.speed + value) {
      this.speed += value;
    }
  }

  decelerate(value) {
    if (this.speed - value >= 0) {
      this.speed = this.speed - value;
    }
  }

  drive(hours) {
    if (this.isOn) {
      this.distance = hours * this.speed;
    }
  }
}

const mustang = new Car({ maxSpeed: 200, price: 2000 });

mustang.turnOn();
mustang.accelerate(50);
mustang.drive(2);

Car.getSpecs();
// maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000

mustang.decelerate(20);
mustang.drive(1);
mustang.turnOff();

Car.getSpecs(mustang);
// maxSpeed: 200, speed: 0, isOn: false, distance: 30, price: 2000

console.log(mustang.price); // 2000
mustang.price = 4000;
console.log(mustang.price); // 4000
