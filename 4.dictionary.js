// hashtable / hashmap  = key-value pair
// key: value

// implement using object
// const dictionary = {};
// dictionary[name] = "Asadujjaman Akul"

// dictionary[name]

class Dictionary {
    constructor() {
        this.dictionary = {};
    }
    add(key, value) {
        this.dictionary[key] = value;
    }
    get(key) {
        return this.dictionary[key];
    }
}


// same key will overwrite previous value
const phoneBook = new Dictionary();
phoneBook.add('Asad', '013')
phoneBook.add('Azad', '019')
phoneBook.add('Akul', '015')

console.log(phoneBook.dictionary);

const info = phoneBook.get("Asad")
console.log(info);


