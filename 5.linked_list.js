// linked list is e list where it's item are connected 

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor(head) {
        this.head = head;
    }
    add(value) {
        const newNode = new Node(value);
        // this.head.next = newNode;
        let current = this.head;
        while (current.next != null) {
            current = current.next;
        }
        current.next = newNode;
    }
}

const head = new Node(1500);
const line = new LinkedList(head);

line.add(17);
console.log(line);
/* output:
LinkedList {
    head: Node { value: 1500, next: Node { value: 17, next: null } }
  }
*/

line.add(27);
line.add(13);
line.add(59);
console.log(line);

// convert JSON
console.log(JSON.stringify(line));

/*
{"head":{"value":1500,"next":{"value":17,"next":{"value":27,"next":{"value":13,"next":{"value":59,"next":null}}}}}}
*/