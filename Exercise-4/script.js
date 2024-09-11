class Subject {
	constructor() {
		this.observers = [];
	}

	addObserver(observer) {
		// TODO: Add observer to the list
        this.observers.push(observer);
	}

	removeObserver(observer) {
		// TODO: Remove observer from the list
        const index = this.observers.indexOf(observer);
        if (index !== -1) {
            this.observers.splice(index, 1);
        }
	}

	notifyObservers(data) {
		// TODO: Notify all observers with given data
        this.observers.forEach(observer => observer.update(data));
	}

	async fetchAndNotify() {
		const url = 'https://jsonplaceholder.typicode.com/posts?_limit=10';

		// TODO: Fetch data from the API and notify observers
        try {
            const response = await fetch(url);
            const data = await response.json();
            this.notifyObservers(data);
        } catch (error) {
            this.notifyObservers(error.message);
        }
	}
}

class Observer {
	update(data) {
		// TODO: Handle the received data. If it's an error message, log it.
		// If it's the list of posts, destructure and log the title of the first post.
        if (typeof data === 'string') {
            console.error(data);
        } else {
            const { title } = data[0];
            console.log(title);
        }
	}
}

// TODO: Instantiate the Subject, add observers, and call the fetchAndNotify method
const subject = new Subject();
const observer1 = new Observer();
const observer2 = new Observer();

subject.addObserver(observer1);
subject.addObserver(observer2);

subject.fetchAndNotify();