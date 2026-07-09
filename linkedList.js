import Node from './node';

class LinkedList {

    // blue print for a node using constuctor

    constructor() {
        this.head = null; // empty
    }

    append(value) {
        let newNode = Node(value);
        if (this.head === null) {
            this.head = newNode;
        }
    }

    prepend(value) {
        let newNode = Node(value);
       
        let oldNode = this.head;
        this.head = newNode;
        newNode.nextNode = oldNode;
        
    }




}

export default LinkedList;