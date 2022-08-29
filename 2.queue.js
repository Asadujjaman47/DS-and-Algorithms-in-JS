// FIFO = First in First Out

// queue implement with array 
class Queue {
    constructor() {
        this.queue = [];
    }
    enqueue(item) {
        this.queue.push(item);
    }
    dequeue() {
        if (this.queue.length) {
            return this.queue.shift();
        }
    }
}

const line = new Queue();
line.enqueue("Asad")
line.enqueue("Azad")
line.enqueue("Akul")
console.log(line);

const winner = line.dequeue();
console.log(winner);
console.log(line);