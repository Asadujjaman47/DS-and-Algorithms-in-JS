// LIFO = Last in First Out

// const firends = []  // array
// firends.push(45)
// firends.push(85)
// firends.push(123)

// // console.log(firends);

// const getOne = firends.pop()
// console.log(getOne);
// console.log(firends);


//make stack with array
class Stack {
    constructor() {
        this.stack = [];
    }
    add(item) {
        this.stack.push(item);
    }
    remove() {
        if (this.stack.length) {
            return this.stack.pop();
        }
    }
}

const guest = new Stack();
guest.add('Rahman')
guest.add('Zahman')
guest.add('Kahman')
guest.add('Xahman')
console.log(guest.stack);

const speaker = guest.remove();
console.log(speaker);
console.log(guest.stack);