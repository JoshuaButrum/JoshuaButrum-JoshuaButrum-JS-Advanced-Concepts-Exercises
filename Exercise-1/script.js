class Subject {
  constructor() {
    this.observers = [];
  }

  addObserver(observer) {
    if (typeof observer.update === 'function') {
      this.observers.push(observer);
    } else {
      throw new Error('Observer must have an update method');
    }
  }

  removeObserver(observer) {
    const index = this.observers.indexOf(observer);
    if (index !== -1) {
      this.observers.splice(index, 1);
    }
  }

  notifyObservers(message) {
    this.observers.forEach(observer => observer.update(message));
  }
}

// Instantiate the Subject and add multiple observers
class ConcreteObserver {
  constructor(name) {
    this.name = name;
  }

  update(message) {
    console.log(`${this.name} received message: ${message}`);
  }
}

const subject = new Subject();
const observer1 = new ConcreteObserver('Observer 1');
const observer2 = new ConcreteObserver('Observer 2');
const observer3 = new ConcreteObserver('Observer 3');

subject.addObserver(observer1);
subject.addObserver(observer2);
subject.addObserver(observer3);

// Call notifyObservers and ensure each observer gets updated
subject.notifyObservers('Hello, Observers!');